// Defaults / settings
var LoadType = new Object();
LoadType.WEIGHT =      'weight';
LoadType.BODY_WEIGHT = 'body_weight';
LoadType.TIME =        'time';
LoadType.TIME =        'time2';

var DayType = new Object();
DayType.MONDAY =    1;
DayType.TUESDAY =   2;
DayType.WEDNESDAY = 3;
DayType.THURSDAY =  4;
DayType.FRIDAY =    5;
DayType.SATURDAY =  6;
DayType.SUNDAY =    7;

var MAX_WEEKS = 52;
// var MAX_WEEKS = 8;
var DAYS_IN_WEEK = 7;

// How many kg in 1 pound
var LB_TO_KG = 0.453592;

var IGNORE_DAYS = [ DayType.SUNDAY ];
// var IGNORE_DAYS = [ ];

// Min weight can increase on load (smallest plate * 2(each side))
var WEIGHT_SMALLEST_PLATE = 2.5;

var schedule = new Array( MAX_WEEKS * DAYS_IN_WEEK );
schedule.fill( '' );

// Use metric kg?
var USE_METRIC_KG = false;

// Disable proportional limits?
var DISABLE_BW_LIMITS = true;




// Classes
// --------------------------------------------------

// An exercise

function Exercise( name, load_type, training_max, use_warmup_sets, warmup_sets_count, warmup_min_load, warmup_inc_min_load, warmup_inc_max_load, min_rest_day, routine_schedule, routine_offset, routine_fastforward, ignore_days, show_rest, loop_exercise, session_load_inc, training_max_limiter ) {
	// Exercise name
	this.name = name;

	// Load type (weight, time, etc)
	this.load_type = load_type;

	// Max load
	this.training_max = training_max;

	// Max load limit rate (relative to bodyweight)
	this.training_max_limiter = DISABLE_BW_LIMITS ? (training_max_limiter + 10) : training_max_limiter;

	// Use warmup sets for this exercise?
	this.use_warmup_sets = use_warmup_sets;

	// How many warmup sets preferably?
	this.warmup_sets_count = warmup_sets_count;

	// Minimum warmup set load
	this.warmup_min_load = warmup_min_load;

	// Minimum warmup set increment load
	this.warmup_inc_min_load = warmup_inc_min_load;

	// Maximum warmup set increment load
	this.warmup_inc_max_load = warmup_inc_max_load;

	// Minimum rest days before can do exercise again
	this.min_rest_day = min_rest_day;

	// Routine schedule
	this.routine_schedule = routine_schedule;

	// Routine offset (days)
	this.routine_offset = routine_offset;

	// Routine fastforward (days)
	this.routine_fastforward = routine_fastforward;

	// List of ignore days. Trumps global version
	this.ignore_days = ignore_days ? ignore_days : IGNORE_DAYS;

	// Show rest time in log
	this.show_rest = ( typeof show_rest !== 'undefined' ) ? show_rest : true;

	// Repeat days at end of loop
	this.loop_exercise = ( typeof loop_exercise !== 'undefined' ) ? loop_exercise : false;

	// Amount to add to load each session
	this.session_load = ( typeof session_load !== 'undefined' ) ? session_load : 0;
}

// Build the exercise

Exercise.prototype.build = function() {

	// Set min incremental value for load
	switch ( this.load_type ) {

		case LoadType.WEIGHT:
			this.min_load_inc = WEIGHT_SMALLEST_PLATE * 2;
			break;

		default:
			this.min_load_inc = 1;
			break;
	}

	// Adjust Max weight
	ADJ_MAX_WEIGHT = (100 * MAX_WEIGHT) / 95;

	// Cycle through days
	for ( var i = 0; i < this.routine_schedule.length; i++ ) {
		// Cycle through sets
		for ( var j = 0; j < this.routine_schedule[i].sets.length; j++ ) {

			var set = this.routine_schedule[i].sets[j];
			var prev_set = this.routine_schedule[i].sets[j-1];
			set.log_msg = '';

			// Convert percentages
			if ( set.load && set.load.includes('%') ) {
				var load_raw = (parseInt(set.load.replace('%', '')) / 100) * this.training_max;
				if (this.load_type == LoadType.WEIGHT)
					set.load_final =  round( (USE_METRIC_KG ? load_raw * LB_TO_KG : load_raw), this.min_load_inc );
				else
					set.load_final = round(load_raw, this.min_load_inc)
			}

			else {
				set.load_final = set.load;
			}

			if (this.use_warmup_sets && j == 0 && this.load_type == LoadType.WEIGHT) {
				console.log('==============');
				console.log(this.name);
				var starting_weight = load_raw;
				console.log(starting_weight);
				var working_weight = (starting_weight - this.warmup_min_load);
				console.log(working_weight);
				var weight_per_set = (working_weight / this.warmup_sets_count);
				console.log(weight_per_set);

				var adj_WPS = Math.min(Math.max(this.warmup_inc_min_load, weight_per_set), this.warmup_inc_max_load);
				var weight = this.warmup_min_load;
				console.log(adj_WPS);
				while ((working_weight / this.warmup_sets_count) > this.warmup_inc_max_load) {
					this.warmup_sets_count++;
					console.log('inc')
				}
				for (var h = 0; h < this.warmup_sets_count; h++) {
					var rounded_weight = round( (USE_METRIC_KG ? weight * LB_TO_KG : weight), this.min_load_inc );
					if (rounded_weight < set.load_final) {
						// console.log(rounded_weight);
						set.log_msg += '<span title="warmup">{0} x {1}</span> <span>({2} rest)</span><br>'.format( rounded_weight, set.reps, pretty_seconds(set.rest_time));
					}

					weight += adj_WPS;
				}
				
			}

			// Make log message ({2}s rest)
			switch ( this.load_type ) {

				case LoadType.WEIGHT:
					set.log_msg += '<span title="{0}">{1} x {2}</span>'.format( set.load, set.load_final, set.reps);
					break;

				case LoadType.BODY_WEIGHT:
					set.log_msg += '<span>{0}{1}</span>'.format( set.reps, set.load_final);
					break;

				case LoadType.TIME:
					set.log_msg += '<span>{0} {1}</span>'.format( pretty_seconds(set.reps), set.load_final);
					break;

				case LoadType.TIME2:
					set.log_msg += '<span>{0}</span>'.format( pretty_seconds(set.load_final) );
					break;

				default:
					break;
			}

			// Add rest time to end of previous log_msg. All sets will get except last one
			if ( prev_set && this.show_rest == true ) {

				prev_set.log_msg += ' <span>({0} rest)</span>'.format( pretty_seconds(prev_set.rest_time) );

			}

		}

		// Add session load to training_max
		if ( this.session_load ) {
			var max_limiter;
			if (this.load_type == LoadType.WEIGHT) {
				this.routine_schedule[i].sets[0].log_msg = '<span class="training-max">{0}lb{1}</span>{2}'.format( 
					Math.round(this.training_max),
					USE_METRIC_KG ? ' / ' + round(this.training_max * LB_TO_KG, this.min_load_inc) + 'kg': '',
					this.routine_schedule[i].sets[0].log_msg
				);
				max_limiter = Math.min(ADJ_MAX_WEIGHT,BODY_WEIGHT * this.training_max_limiter * AGE_MODIFIER);
				this.session_load = max_limiter / 105;
				this.training_max += this.session_load;
				this.training_max = Math.min(this.training_max, max_limiter);
			}
			else {
				this.routine_schedule[i].sets[0].log_msg = '<span class="training-max">{0}</span>{1}'.format( 
					this.training_max,
					this.routine_schedule[i].sets[0].log_msg
				);
				this.training_max += this.session_load;
				max_limiter = this.training_max_limiter;
				this.training_max = Math.min(this.training_max, this.training_max_limiter);
			}

			if (this.training_max == max_limiter) {
				this.routine_schedule[i].sets[0].log_msg = this.routine_schedule[i].sets[0].log_msg + '<span class="limiter"></span>'
			}
		}

	}

}


// A day

function Day( gap, sets ) {
	// Day offset from previous
	this.gap = gap;

	// Array of sets
	this.sets = sets;
}


// A set

function Set( load, load_type, reps, rest_time ) {
	// Load amount (195, 60, etc. Only numbers)
	this.load =       load;

	// Load type (weight, time)
	this.load_type =  load_type;

	// How many reps
	this.reps =       reps;

	// Rest time in seconds after exercise
	this.rest_time =  rest_time;

	// Text to appear on schedule (built later)
	this.log_msg =    '';
}




// Functions
// --------------------------------------------------

// String format function
String.prototype.format = function() {
	a = this;
	for ( k in arguments ) {
		a = a.replace( '{' + k + '}', arguments[k] )
	}
	return a
}

// Turn seconds to minute:seconds
function pretty_seconds( time ) {

	// Minutes value
	var minutes = Math.floor( time / 60 );

	// Seconds value
	var seconds = time - minutes * 60;

	// Prettified
	var pretty_seconds = minutes + ( seconds > 9 ? ':' : ':0' ) + seconds;

	return pretty_seconds;
}

// Round number to nearest...
function round( number, to ) {
	return Math.ceil( number / to ) * to;
}

// Register an exercise to the schedule
function pjt_register_exercise( exercise ) {

	// Is day not beyond days in a week?
	function isValidDay() { return current_day <= DAYS_IN_WEEK; }

	// Is week within defined max
	function isValidWeek() { return current_week <= MAX_WEEKS; }

	// Cycle to next day
	function nextDay() {
		current_day = current_day + 1;
		current_day_raw = current_day_raw + 1;

		if ( !isValidDay() ) {
			current_day = 1;
			current_week = current_week + 1;
		}

		if ( !isValidWeek() )
			return false;

		return true;
	}

	// Log msg to day
	function log_day( msg ) {
		var index = ( DAYS_IN_WEEK * (current_week - 1) ) + current_day - 1;
		schedule[index] += msg + '<br>';
	}


	

	// For cycling
	var current_week = 1;
	var current_day = 1;
	var current_day_raw = current_day;
	var prev_exercise_day;

	var ignore_gap = false;

	

	// While day and week are vaild
	while ( isValidDay() && isValidWeek() ) {

		// Build the exercise
		exercise.build();

		// Exercise routine
		var routine = exercise.routine_schedule;

		// Cycle through days
		for ( var i = 0; i < routine.length; i++ ) {
			
			// Current Day exercise
			var day = routine[i];

			// Current Day gap
			var gap = day.gap;

			// Apply a one-time offset to gap
			gap += exercise.routine_offset;
			exercise.routine_offset = 0;

			// Current Day sets
			var sets = day.sets;

			if ( !ignore_gap ) {
				// Cycle through gap days
				for ( var j = 0; j < gap; j++ ) {
					nextDay();
				}
			}

			// Cycle through ignored days (ex, sunday)
			while ( exercise.ignore_days.includes( current_day ) ) {

				nextDay();				
			}

			// If day and week are valid
			if ( isValidDay() && isValidWeek() ) {

				if ( exercise.routine_fastforward > 0 ) {
					exercise.routine_fastforward--;
					ignore_gap = true;
					continue;
				}

				else {
					ignore_gap = false;
				}

				// If minimum exercise rest days haven't been met
				if ( (current_day_raw - prev_exercise_day) <= exercise.min_rest_day ) {
					nextDay();
				}

				else {
					// Opening exercise div
					log_day( '<div class="exercise">' )

					// Log exercise name
					log_day( '<b>{0}</b>'.format( exercise.name ) )

					// Cycle through sets
					for ( var j = 0; j < sets.length; j++ ) {

						// Current set
						var set = sets[j];

						// Log set
						log_day( set.log_msg );
					}

					// Log exercise close div
					log_day( '</div>' );

					// Keep track of last exercise day
					prev_exercise_day = current_day_raw;
				}
			} 

			// Next day
			nextDay();
		}

		if ( !exercise.loop_exercise )
			break;
	}
}

// Build the schedule
function pjt_build_schedule() {
	// Total days we are working with
	var days = schedule.length;
	
	// Cycle through weeks
	for ( var week = 0; week < days; week = week + 7 ) {

		// Write basic table stuff
		for ( var key in IGNORE_DAYS ) {
			document.write( '<style>th:nth-of-type(' + IGNORE_DAYS[key] + '),td:nth-of-type(' + IGNORE_DAYS[key] + '){display:none;}</style>' );
		}

		document.write( '<table cellspacing="0">' );
			document.write( '<thead>' );
				document.write( '<tr>' );
					// document.write( '<th class="week" colspan="7">Week {0}</th>'.format((week / 7) + 1) );
					document.write( '<th class="week" colspan="' + (7 - IGNORE_DAYS.length) + '">Week {0}</th>'.format((week / 7) + 1) );
				document.write( '</tr>' );
				document.write( '<tr>' );
					document.write( '<th>Monday</th>' );
					document.write( '<th>Tuesday</th>' );
					document.write( '<th>Wednesday</th>' );
					document.write( '<th>Thursday</th>' );
					document.write( '<th>Friday</th>' );
					document.write( '<th>Saturday</th>' );
					document.write( '<th>Sunday</th>' );
				document.write( '</tr>' );
			document.write( '</thead>' );
			document.write( '<tbody>' );
				document.write( '<tr>' );
					
					// Cycle through days in current week
					for ( var current_day = 0; current_day < DAYS_IN_WEEK; current_day++ ) {
						// console.log(schedule[current_day + week].length)
						// Write entry
						document.write( '<td>' + schedule[current_day + week] + '</td>' );
					}

		// Closing table stuff
				document.write( '</tr>' );
			document.write( '</tbody>' );
		document.write( '</table>' );

	}
}
