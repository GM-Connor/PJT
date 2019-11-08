
// Squat
// --------------------------------------------------

var STR_SQUAT = new Exercise(
	name =                'Squat',
	load_type =           LoadType.WEIGHT,
	training_max =        195, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
	],
	routine_offset =      -4,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 1.6,
);





// Bench
// --------------------------------------------------

var STR_BENCH = new Exercise(
	name =                'Bench',
	load_type =           LoadType.WEIGHT,
	training_max =        145, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
	],
	routine_offset =      -3,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 1.2,
);





// Deadlift
// --------------------------------------------------

var STR_DEADLIFT = new Exercise(
	name =                'Deadlift',
	load_type =           LoadType.WEIGHT,
	training_max =        195, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('65%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('85%', LoadType.WEIGHT, 3, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180),
				new Set('75%', LoadType.WEIGHT, 3, 180)
			]
		),
	],
	routine_offset =      -2,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 1.9,
);





// Press
// --------------------------------------------------

var STR_PRESS = new Exercise(
	name =                'Press',
	load_type =           LoadType.WEIGHT,
	training_max =        75, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
	],
	routine_offset =      -1,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 0.8,
);





// Shrug
// --------------------------------------------------

var STR_SHRUG = new Exercise(
	name =                'Shrug',
	load_type =           LoadType.WEIGHT,
	training_max =        75, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
	],
	routine_offset =      -1,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 1.6,
);




// Bicep curl
// --------------------------------------------------

var STR_BCURL = new Exercise(
	name =                'Bicep Curl',
	load_type =           LoadType.WEIGHT,
	training_max =        195, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 5, 180),
				new Set('80%', LoadType.WEIGHT, 5, 180),
				new Set('90%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 180),
				new Set('95%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
	],
	routine_offset =      -3,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 0.6,
);






// T-bar row
// --------------------------------------------------

var STR_TBAR = new Exercise(
	name =                'T-Bar Row',
	load_type =           LoadType.WEIGHT,
	training_max =        145, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0)
			]
		),
	],
	routine_offset =      -2,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 1.1,
);






// Tricept Extension
// --------------------------------------------------

var STR_TRIEXT = new Exercise(
	name =                'Tricep Ext.',
	load_type =           LoadType.WEIGHT,
	training_max =        75, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 50,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('70%', LoadType.WEIGHT, 3, 180),
				new Set('80%', LoadType.WEIGHT, 3, 180),
				new Set('90%', LoadType.WEIGHT, 3, 0)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 3, 180),
				new Set('95%', LoadType.WEIGHT, 1, 0)
			]
		),
	],
	routine_offset =      -4,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 0.65,
);






// Reverse Wrist Curl
// --------------------------------------------------

var STR_RWCURL = new Exercise(
	name =                'Rev. Wrist Curl',
	load_type =           LoadType.WEIGHT,
	training_max =        195, 
	use_warmup_sets =     true,
	warmup_sets_count =   3,
	warmup_min_load =     45,
	warmup_inc_min_load = 15,
	warmup_inc_max_load = 45,
	min_rest_day =        1,
	routine_schedule =    [
		new Day( 
			gap  = 4,
			sets = [
				new Set('70%', LoadType.WEIGHT, 5, 180),
				new Set('80%', LoadType.WEIGHT, 5, 180),
				new Set('90%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('65%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 3,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('85%', LoadType.WEIGHT, 5, 180),
				new Set('95%', LoadType.WEIGHT, 5, 0),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
		new Day( 
			gap  = 4,
			sets = [
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('75%', LoadType.WEIGHT, 5, 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180),
				new Set('45%', LoadType.WEIGHT, '21s', 180)
			]
		),
	],
	routine_offset =      -4,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1,
	training_max_limiter = 0.75,
);










// 50Pullup
// --------------------------------------------------

var PULLUP_50 = new Exercise(
	name =                'Pullups',
	load_type =           LoadType.BODY_WEIGHT,
	training_max =        null, 
	use_warmup_sets =     false,
	warmup_sets_count =   null,
	warmup_min_load =     null,
	warmup_inc_min_load = null,
	warmup_inc_max_load = null,
	min_rest_day =        1,
	routine_schedule =    [

		// Cycle 6-8, Day 1
		new Day( 
			gap  = 0,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('+', LoadType.BODY_WEIGHT, 3, 0)
			]
		),

		// Cycle 6-8, Day 2
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('+', LoadType.BODY_WEIGHT, 4, 0)
			]
		),

		// Cycle 6-8, Day 3
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('', LoadType.BODY_WEIGHT, 2, 120),
				new Set('+', LoadType.BODY_WEIGHT, 4, 0)
			]
		),

		// Cycle 6-8, Day 4
		new Day( 
			gap  = 2,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('+', LoadType.BODY_WEIGHT, 4, 0)
			]
		),

		// Cycle 6-8, Day 5
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('+', LoadType.BODY_WEIGHT, 5, 0)
			]
		),

		// Cycle 6-8, Day 6
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('+', LoadType.BODY_WEIGHT, 6, 0)
			]
		),

		// Cycle 6-8, Test Day
		new Day( 
			gap  = 4,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 9-11, Day 1
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('', LoadType.BODY_WEIGHT, 3, 120),
				new Set('+', LoadType.BODY_WEIGHT, 5, 0)
			]
		),

		// Cycle 9-11, Day 2
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('+', LoadType.BODY_WEIGHT, 6, 0)
			]
		),

		// Cycle 9-11, Day 3
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('+', LoadType.BODY_WEIGHT, 6, 0)
			]
		),

		// Cycle 9-11, Day 4
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('+', LoadType.BODY_WEIGHT, 8, 0)
			]
		),

		// Cycle 9-11, Day 5
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('+', LoadType.BODY_WEIGHT, 8, 0)
			]
		),

		// Cycle 9-11, Day 6
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('+', LoadType.BODY_WEIGHT, 10, 0)
			]
		),

		// Cycle 9-11, Test
		new Day( 
			gap  = 3,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 12-15, Day 1
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('+', LoadType.BODY_WEIGHT, 8, 0)
			]
		),

		// Cycle 12-15, Day 2
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('+', LoadType.BODY_WEIGHT, 9, 0)
			]
		),

		// Cycle 12-15, Day 3
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('', LoadType.BODY_WEIGHT, 6, 120),
				new Set('+', LoadType.BODY_WEIGHT, 9, 0)
			]
		),

		// Cycle 12-15, Day 4
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('+', LoadType.BODY_WEIGHT, 10, 0)
			]
		),

		// Cycle 12-15, Day 5
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('+', LoadType.BODY_WEIGHT, 10, 0)
			]
		),

		// Cycle 12-15, Day 6
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('+', LoadType.BODY_WEIGHT, 11, 0)
			]
		),

		// Cycle 12-15, Test
		new Day( 
			gap  = 4,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 16-20, Day 1
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('+', LoadType.BODY_WEIGHT, 10, 0)
			]
		),

		// Cycle 16-20, Day 2
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('+', LoadType.BODY_WEIGHT, 11, 0)
			]
		),

		// Cycle 16-20, Day 3
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('', LoadType.BODY_WEIGHT, 9, 120),
				new Set('+', LoadType.BODY_WEIGHT, 12, 0)
			]
		),

		// Cycle 16-20, Day 4
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('+', LoadType.BODY_WEIGHT, 13, 0)
			]
		),

		// Cycle 16-20, Day 5
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('+', LoadType.BODY_WEIGHT, 13, 0)
			]
		),

		// Cycle 16-20, Day 6
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('+', LoadType.BODY_WEIGHT, 13, 0)
			]
		),

		// Cycle 16-20, Day 7
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('', LoadType.BODY_WEIGHT, 11, 120),
				new Set('+', LoadType.BODY_WEIGHT, 15, 0)
			]
		),

		// Cycle 16-20, Day 8
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('+', LoadType.BODY_WEIGHT, 16, 0)
			]
		),

		// Cycle 16-20, Day 9
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('+', LoadType.BODY_WEIGHT, 16, 0)
			]
		),

		// Cycle 16-20, Test
		new Day( 
			gap  = 4,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 21-25, Day 1
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('+', LoadType.BODY_WEIGHT, 15, 0)
			]
		),

		// Cycle 21-25, Day 2
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('+', LoadType.BODY_WEIGHT, 16, 0)
			]
		),

		// Cycle 21-25, Day 3
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('+', LoadType.BODY_WEIGHT, 16, 0)
			]
		),

		// Cycle 21-25, Day 4
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('+', LoadType.BODY_WEIGHT, 18, 0)
			]
		),

		// Cycle 21-25, Day 5
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('+', LoadType.BODY_WEIGHT, 19, 0)
			]
		),

		// Cycle 21-25, Day 6
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('', LoadType.BODY_WEIGHT, 14, 120),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 21-25, Day 7
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 21-25, Day 8
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 21-25, Day 9
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('+', LoadType.BODY_WEIGHT, 5, 0)
			]
		),

		// Cycle 21-25, Test
		new Day( 
			gap  = 3,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 26-30, Day 1
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('+', LoadType.BODY_WEIGHT, 17, 0)
			]
		),

		// Cycle 26-30, Day 2
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('+', LoadType.BODY_WEIGHT, 19, 0)
			]
		),

		// Cycle 26-30, Day 3
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 26-30, Day 4
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('', LoadType.BODY_WEIGHT, 17, 120),
				new Set('+', LoadType.BODY_WEIGHT, 22, 0)
			]
		),

		// Cycle 26-30, Day 5
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('+', LoadType.BODY_WEIGHT, 22, 0)
			]
		),

		// Cycle 26-30, Day 6
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('+', LoadType.BODY_WEIGHT, 24, 0)
			]
		),

		// Cycle 26-30, Day 7
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 26-30, Day 8
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('+', LoadType.BODY_WEIGHT, 26, 0)
			]
		),

		// Cycle 26-30, Day 9
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 26-30, Test
		new Day( 
			gap  = 4,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 31-35, Day 1
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('', LoadType.BODY_WEIGHT, 19, 120),
				new Set('+', LoadType.BODY_WEIGHT, 23, 0)
			]
		),

		// Cycle 31-35, Day 2
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 31-35, Day 3
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 31-35, Day 4
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('+', LoadType.BODY_WEIGHT, 26, 0)
			]
		),

		// Cycle 31-35, Day 5
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('+', LoadType.BODY_WEIGHT, 27, 0)
			]
		),

		// Cycle 31-35, Day 6
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 31-35, Day 7
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 29, 0)
			]
		),

		// Cycle 31-35, Day 8
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 30, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 30, 0)
			]
		),

		// Cycle 31-35, Day 9
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 32, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 32, 0)
			]
		),

		// Cycle 31-35, Test
		new Day( 
			gap  = 4,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 36-40, Day 1
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('+', LoadType.BODY_WEIGHT, 26, 0)
			]
		),

		// Cycle 36-40, Day 2
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 36-40, Day 3
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('+', LoadType.BODY_WEIGHT, 29, 0)
			]
		),

		// Cycle 36-40, Day 4
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 30, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 30, 0)
			]
		),

		// Cycle 36-40, Day 5
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 31, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 31, 0)
			]
		),

		// Cycle 36-40, Day 6
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 31, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 26, 0)
			]
		),

		// Cycle 36-40, Day 7
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 31, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 32, 0)
			]
		),

		// Cycle 36-40, Day 8
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 32, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 32, 0)
			]
		),

		// Cycle 36-40, Day 9
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 34, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('+', LoadType.BODY_WEIGHT, 34, 0)
			]
		),

		// Cycle 36-40, Test
		new Day( 
			gap  = 3,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		),

		// Cycle 40+, Day 1
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('', LoadType.BODY_WEIGHT, 24, 120),
				new Set('+', LoadType.BODY_WEIGHT, 27, 0)
			]
		),

		// Cycle 40+, Day 2
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 40+, Day 3
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 30, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 29, 0)
			]
		),

		// Cycle 40+, Day 4
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 31, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('', LoadType.BODY_WEIGHT, 25, 120),
				new Set('+', LoadType.BODY_WEIGHT, 31, 0)
			]
		),

		// Cycle 40+, Day 5
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 32, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 31, 0)
			]
		),

		// Cycle 40+, Day 6
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 32, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 26, 0)
			]
		),

		// Cycle 40+, Day 7
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 34, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 33, 0)
			]
		),

		// Cycle 40+, Day 8
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 34, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('', LoadType.BODY_WEIGHT, 26, 120),
				new Set('+', LoadType.BODY_WEIGHT, 34, 0)
			]
		),

		// Cycle 40+, Day 9
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 35, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('', LoadType.BODY_WEIGHT, 27, 120),
				new Set('+', LoadType.BODY_WEIGHT, 35, 0)
			]
		),

		// Cycle 40+, Test
		new Day( 
			gap  = 4,
			sets = [
				new Set('+', LoadType.BODY_WEIGHT, 'Max', 0)
			]
		)
	],
	routine_offset =       0,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        false,
	session_load =         0
);










// Couch to 5k
// --------------------------------------------------

var COUCH_TO_5K = new Exercise(
	name =                'Couch to 5k',
	load_type =           LoadType.TIME,
	training_max =        null, 
	use_warmup_sets =     false,
	warmup_sets_count =   null,
	warmup_min_load =     null,
	warmup_inc_min_load = null,
	warmup_inc_max_load = null,
	min_rest_day =        0,
	routine_schedule =    [
		// Week 1
		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 120, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 120, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 180, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 2
		new Day( 
			gap  = 2,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 180, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 240, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 300, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 3
		new Day( 
			gap  = 2,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 360, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 240, 0),
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 240, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 420, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 4
		new Day( 
			gap  = 2,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 420, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 480, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 540, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 5
		new Day( 
			gap  = 2,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 540, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 360, 0),
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 360, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 600, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 660, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 6
		new Day( 
			gap  = 1,
			sets = [
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 660, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 780, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 900, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 7
		new Day( 
			gap  = 2,
			sets = [
				new Set('jog', LoadType.TIME, 900, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 480, 0),
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 480, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 960, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1020, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 8
		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1020, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1080, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1200, 0),
				new Set('walk', LoadType.TIME, 300, 0)
			]
		),

		// Week 9
		new Day( 
			gap  = 2,
			sets = [
				new Set('jog', LoadType.TIME, 1200, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 720, 0),
				new Set('walk', LoadType.TIME, 300, 0),
				new Set('jog', LoadType.TIME, 720, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1440, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1500, 0)
			]
		),

		// Week 10
		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1500, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1620, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1800, 0)
			]
		),

		new Day( 
			gap  = 1,
			sets = [
				new Set('jog', LoadType.TIME, 1800, 0)
			]
		),
	],
	routine_offset =      2,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            false,
	loop_exercise =        false,
	session_load =         0
);









// 100Dips
// --------------------------------------------------

var DIP_100 = new Exercise(
	name =                'Dips',
	load_type =           LoadType.BODY_WEIGHT,
	training_max =        null, 
	use_warmup_sets =     false,
	warmup_sets_count =   null,
	warmup_min_load =     null,
	warmup_inc_min_load = null,
	warmup_inc_max_load = null,
	min_rest_day =        1,
	routine_schedule =    [

		// Cycle 1, Day 1
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 2, 60),
				new Set('', LoadType.BODY_WEIGHT, 3, 60),
				new Set('', LoadType.BODY_WEIGHT, 2, 60),
				new Set('', LoadType.BODY_WEIGHT, 2, 60),
				new Set('+', LoadType.BODY_WEIGHT, 3, 0)
			]
		),

		// Cycle 1, Day 2
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 3, 90),
				new Set('', LoadType.BODY_WEIGHT, 4, 90),
				new Set('', LoadType.BODY_WEIGHT, 2, 90),
				new Set('', LoadType.BODY_WEIGHT, 3, 90),
				new Set('+', LoadType.BODY_WEIGHT, 4, 0)
			]
		),

		// Cycle 1, Day 3
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('', LoadType.BODY_WEIGHT, 4, 120),
				new Set('+', LoadType.BODY_WEIGHT, 5, 0)
			]
		),

		// Cycle 1, Day 4
		new Day( 
			gap  = 2,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 4, 60),
				new Set('', LoadType.BODY_WEIGHT, 6, 60),
				new Set('', LoadType.BODY_WEIGHT, 4, 60),
				new Set('', LoadType.BODY_WEIGHT, 4, 60),
				new Set('+', LoadType.BODY_WEIGHT, 6, 0)
			]
		),

		// Cycle 1, Day 5
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 5, 90),
				new Set('', LoadType.BODY_WEIGHT, 6, 90),
				new Set('', LoadType.BODY_WEIGHT, 4, 90),
				new Set('', LoadType.BODY_WEIGHT, 4, 90),
				new Set('+', LoadType.BODY_WEIGHT, 7, 0)
			]
		),

		// Cycle 1, Day 6
		new Day( 
			gap  = 1,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('+', LoadType.BODY_WEIGHT, 8, 0)
			]
		),

		// Cycle 1, Day 7
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 6, 60),
				new Set('', LoadType.BODY_WEIGHT, 6, 60),
				new Set('', LoadType.BODY_WEIGHT, 4, 60),
				new Set('', LoadType.BODY_WEIGHT, 4, 60),
				new Set('+', LoadType.BODY_WEIGHT, 5, 0)
			]
		),

		// Cycle 1, Day 8
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 6, 90),
				new Set('', LoadType.BODY_WEIGHT, 8, 90),
				new Set('', LoadType.BODY_WEIGHT, 6, 90),
				new Set('', LoadType.BODY_WEIGHT, 6, 90),
				new Set('+', LoadType.BODY_WEIGHT, 7, 0)
			]
		),

		// Cycle 1, Day 9
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 8, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('', LoadType.BODY_WEIGHT, 7, 120),
				new Set('+', LoadType.BODY_WEIGHT, 10, 0)
			]
		),

		// Cycle 1, Day 10
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 9, 60),
				new Set('', LoadType.BODY_WEIGHT, 11, 60),
				new Set('', LoadType.BODY_WEIGHT, 8, 60),
				new Set('', LoadType.BODY_WEIGHT, 8, 60),
				new Set('+', LoadType.BODY_WEIGHT, 11, 0)
			]
		),

		// Cycle 1, Day 11
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 10, 90),
				new Set('', LoadType.BODY_WEIGHT, 12, 90),
				new Set('', LoadType.BODY_WEIGHT, 9, 90),
				new Set('', LoadType.BODY_WEIGHT, 9, 90),
				new Set('+', LoadType.BODY_WEIGHT, 13, 0)
			]
		),

		// Cycle 1, Day 12
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 12, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('', LoadType.BODY_WEIGHT, 10, 120),
				new Set('+', LoadType.BODY_WEIGHT, 15, 0)
			]
		),

		// Cycle 1, Day 13
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 12, 60),
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('', LoadType.BODY_WEIGHT, 11, 60),
				new Set('', LoadType.BODY_WEIGHT, 10, 60),
				new Set('+', LoadType.BODY_WEIGHT, 16, 0)
			]
		),

		// Cycle 1, Day 14
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 90),
				new Set('', LoadType.BODY_WEIGHT, 16, 90),
				new Set('', LoadType.BODY_WEIGHT, 12, 90),
				new Set('', LoadType.BODY_WEIGHT, 12, 90),
				new Set('+', LoadType.BODY_WEIGHT, 18, 0)
			]
		),

		// Cycle 1, Day 15
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 18, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('', LoadType.BODY_WEIGHT, 13, 120),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 1, Day 16
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 12, 60),
				new Set('', LoadType.BODY_WEIGHT, 17, 60),
				new Set('', LoadType.BODY_WEIGHT, 13, 60),
				new Set('', LoadType.BODY_WEIGHT, 13, 60),
				new Set('+', LoadType.BODY_WEIGHT, 17, 0)
			]
		),

		// Cycle 1, Day 17
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 90),
				new Set('', LoadType.BODY_WEIGHT, 19, 90),
				new Set('', LoadType.BODY_WEIGHT, 14, 90),
				new Set('', LoadType.BODY_WEIGHT, 14, 90),
				new Set('+', LoadType.BODY_WEIGHT, 19, 0)
			]
		),

		// Cycle 1, Day 18
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 16, 120),
				new Set('', LoadType.BODY_WEIGHT, 5, 120),
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('', LoadType.BODY_WEIGHT, 15, 120),
				new Set('+', LoadType.BODY_WEIGHT, 5, 0)
			]
		),

		// Cycle 1, Day 19
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('', LoadType.BODY_WEIGHT, 18, 60),
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 1, Day 20
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 90),
				new Set('', LoadType.BODY_WEIGHT, 25, 90),
				new Set('', LoadType.BODY_WEIGHT, 15, 90),
				new Set('', LoadType.BODY_WEIGHT, 15, 90),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 1, Day 21
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('', LoadType.BODY_WEIGHT, 30, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 1, Day 22
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 18, 60),
				new Set('', LoadType.BODY_WEIGHT, 22, 60),
				new Set('', LoadType.BODY_WEIGHT, 16, 60),
				new Set('', LoadType.BODY_WEIGHT, 16, 60),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 1, Day 23
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 90),
				new Set('', LoadType.BODY_WEIGHT, 25, 90),
				new Set('', LoadType.BODY_WEIGHT, 20, 90),
				new Set('', LoadType.BODY_WEIGHT, 20, 90),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 1, Day 24
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('', LoadType.BODY_WEIGHT, 28, 120),
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('', LoadType.BODY_WEIGHT, 23, 120),
				new Set('+', LoadType.BODY_WEIGHT, 33, 0)
			]
		),

		// Cycle 1, Day 25
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('', LoadType.BODY_WEIGHT, 18, 60),
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('', LoadType.BODY_WEIGHT, 14, 60),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 1, Day 26
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 90),
				new Set('', LoadType.BODY_WEIGHT, 25, 90),
				new Set('', LoadType.BODY_WEIGHT, 15, 90),
				new Set('', LoadType.BODY_WEIGHT, 15, 90),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 1, Day 27
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 22, 120),
				new Set('', LoadType.BODY_WEIGHT, 30, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('', LoadType.BODY_WEIGHT, 20, 120),
				new Set('+', LoadType.BODY_WEIGHT, 28, 0)
			]
		),

		// Cycle 1, Day 28
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 5, 60),
				new Set('', LoadType.BODY_WEIGHT, 25, 60),
				new Set('', LoadType.BODY_WEIGHT, 5, 60),
				new Set('', LoadType.BODY_WEIGHT, 5, 60),
				new Set('+', LoadType.BODY_WEIGHT, 32, 0)
			]
		),

		// Cycle 1, Day 29
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 90),
				new Set('', LoadType.BODY_WEIGHT, 29, 90),
				new Set('', LoadType.BODY_WEIGHT, 25, 90),
				new Set('', LoadType.BODY_WEIGHT, 25, 90),
				new Set('+', LoadType.BODY_WEIGHT, 36, 0)
			]
		),

		// Cycle 1, Day 30
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 33, 120),
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('', LoadType.BODY_WEIGHT, 29, 120),
				new Set('+', LoadType.BODY_WEIGHT, 40, 0)
			]
		),

		// Cycle 1, Day 31
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 17, 60),
				new Set('', LoadType.BODY_WEIGHT, 19, 60),
				new Set('', LoadType.BODY_WEIGHT, 15, 60),
				new Set('', LoadType.BODY_WEIGHT, 15, 60),
				new Set('+', LoadType.BODY_WEIGHT, 20, 0)
			]
		),

		// Cycle 1, Day 32
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('', LoadType.BODY_WEIGHT, 13, 45),
				new Set('', LoadType.BODY_WEIGHT, 13, 45),
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('', LoadType.BODY_WEIGHT, 9, 45),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 1, Day 33
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 13, 45),
				new Set('', LoadType.BODY_WEIGHT, 13, 45),
				new Set('', LoadType.BODY_WEIGHT, 15, 45),
				new Set('', LoadType.BODY_WEIGHT, 15, 45),
				new Set('', LoadType.BODY_WEIGHT, 12, 45),
				new Set('', LoadType.BODY_WEIGHT, 12, 45),
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('+', LoadType.BODY_WEIGHT, 25, 0)
			]
		),

		// Cycle 1, Day 34
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 25, 60),
				new Set('', LoadType.BODY_WEIGHT, 30, 60),
				new Set('', LoadType.BODY_WEIGHT, 20, 60),
				new Set('', LoadType.BODY_WEIGHT, 15, 60),
				new Set('+', LoadType.BODY_WEIGHT, 40, 0)
			]
		),

		// Cycle 1, Day 35
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 15, 45),
				new Set('', LoadType.BODY_WEIGHT, 15, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('', LoadType.BODY_WEIGHT, 10, 45),
				new Set('+', LoadType.BODY_WEIGHT, 44, 0)
			]
		),

		// Cycle 1, Day 36
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 13, 45),
				new Set('', LoadType.BODY_WEIGHT, 13, 45),
				new Set('', LoadType.BODY_WEIGHT, 17, 45),
				new Set('', LoadType.BODY_WEIGHT, 17, 45),
				new Set('', LoadType.BODY_WEIGHT, 16, 45),
				new Set('', LoadType.BODY_WEIGHT, 16, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('+', LoadType.BODY_WEIGHT, 50, 0)
			]
		),

		// Cycle 1, Day 37
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 28, 60),
				new Set('', LoadType.BODY_WEIGHT, 35, 60),
				new Set('', LoadType.BODY_WEIGHT, 25, 60),
				new Set('', LoadType.BODY_WEIGHT, 22, 60),
				new Set('+', LoadType.BODY_WEIGHT, 35, 0)
			]
		),

		// Cycle 1, Day 38
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 14, 45),
				new Set('', LoadType.BODY_WEIGHT, 16, 45),
				new Set('+', LoadType.BODY_WEIGHT, 40, 0)
			]
		),

		// Cycle 1, Day 39
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 17, 45),
				new Set('', LoadType.BODY_WEIGHT, 17, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('+', LoadType.BODY_WEIGHT, 45, 0)
			]
		),

		// Cycle 1, Day 40
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 40, 60),
				new Set('', LoadType.BODY_WEIGHT, 50, 60),
				new Set('', LoadType.BODY_WEIGHT, 25, 60),
				new Set('', LoadType.BODY_WEIGHT, 25, 60),
				new Set('+', LoadType.BODY_WEIGHT, 50, 0)
			]
		),

		// Cycle 1, Day 41
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 23, 45),
				new Set('', LoadType.BODY_WEIGHT, 23, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('+', LoadType.BODY_WEIGHT, 53, 0)
			]
		),

		// Cycle 1, Day 42
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 30, 45),
				new Set('', LoadType.BODY_WEIGHT, 30, 45),
				new Set('', LoadType.BODY_WEIGHT, 25, 45),
				new Set('', LoadType.BODY_WEIGHT, 25, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('+', LoadType.BODY_WEIGHT, 55, 0)
			]
		),

		// Cycle 1, Day 43
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 36, 60),
				new Set('', LoadType.BODY_WEIGHT, 40, 60),
				new Set('', LoadType.BODY_WEIGHT, 30, 60),
				new Set('', LoadType.BODY_WEIGHT, 24, 60),
				new Set('+', LoadType.BODY_WEIGHT, 40, 0)
			]
		),

		// Cycle 1, Day 44
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 19, 45),
				new Set('', LoadType.BODY_WEIGHT, 19, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('+', LoadType.BODY_WEIGHT, 45, 0)
			]
		),

		// Cycle 1, Day 45
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 24, 45),
				new Set('', LoadType.BODY_WEIGHT, 24, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 20, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('+', LoadType.BODY_WEIGHT, 50, 0)
			]
		),

		// Cycle 1, Day 46
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 45, 60),
				new Set('', LoadType.BODY_WEIGHT, 55, 60),
				new Set('', LoadType.BODY_WEIGHT, 35, 60),
				new Set('', LoadType.BODY_WEIGHT, 30, 60),
				new Set('+', LoadType.BODY_WEIGHT, 55, 0)
			]
		),

		// Cycle 1, Day 47
		new Day( 
			gap  = 3,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 30, 45),
				new Set('', LoadType.BODY_WEIGHT, 30, 45),
				new Set('', LoadType.BODY_WEIGHT, 24, 45),
				new Set('', LoadType.BODY_WEIGHT, 24, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('', LoadType.BODY_WEIGHT, 18, 45),
				new Set('+', LoadType.BODY_WEIGHT, 58, 0)
			]
		),

		// Cycle 1, Day 48
		new Day( 
			gap  = 4,
			sets = [
				new Set('', LoadType.BODY_WEIGHT, 26, 45),
				new Set('', LoadType.BODY_WEIGHT, 26, 45),
				new Set('', LoadType.BODY_WEIGHT, 33, 45),
				new Set('', LoadType.BODY_WEIGHT, 33, 45),
				new Set('', LoadType.BODY_WEIGHT, 26, 45),
				new Set('', LoadType.BODY_WEIGHT, 26, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('', LoadType.BODY_WEIGHT, 22, 45),
				new Set('+', LoadType.BODY_WEIGHT, 60, 0)
			]
		),

	],
	routine_offset =       1,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        false,
	session_load =         0
);










// 100Pushups
// --------------------------------------------------

var PUSHUP_100 = new Exercise(
	name =                 'Pushups',
	load_type =            DIP_100.load_type,
	training_max =         DIP_100.training_max, 
	use_warmup_sets =      DIP_100.use_warmup_sets,
	warmup_sets_count =    DIP_100.warmup_sets_count,
	warmup_min_load =      DIP_100.warmup_min_load,
	warmup_inc_min_load =  DIP_100.warmup_inc_min_load,
	warmup_inc_max_load =  DIP_100.warmup_inc_max_load,
	min_rest_day =         DIP_100.min_rest_day,
	routine_schedule =     DIP_100.routine_schedule,
	routine_offset =       0,
	routine_fastforward =  DIP_100.routine_fastforward,
	ignore_days =          DIP_100.ignore_days,
	show_rest =            DIP_100.show_rest,
	loop_exercise =        DIP_100.loop_exercise,
	session_load =         DIP_100.session_load
);










// 100Situps
// --------------------------------------------------

var SITUP_100 = new Exercise(
	name =                 'Situps',
	load_type =            DIP_100.load_type,
	training_max =         DIP_100.training_max, 
	use_warmup_sets =      DIP_100.use_warmup_sets,
	warmup_sets_count =    DIP_100.warmup_sets_count,
	warmup_min_load =      DIP_100.warmup_min_load,
	warmup_inc_min_load =  DIP_100.warmup_inc_min_load,
	warmup_inc_max_load =  DIP_100.warmup_inc_max_load,
	min_rest_day =         DIP_100.min_rest_day,
	routine_schedule =     DIP_100.routine_schedule,
	routine_offset =       2,
	routine_fastforward =  DIP_100.routine_fastforward,
	ignore_days =          DIP_100.ignore_days,
	show_rest =            DIP_100.show_rest,
	loop_exercise =        DIP_100.loop_exercise,
	session_load =         DIP_100.session_load
);










// CO2O2 Table
// --------------------------------------------------

var CO2_O2 = new Exercise(
	name =                'CO2 / O2',
	load_type =           LoadType.TIME2,
	training_max =        46, 
	use_warmup_sets =     false,
	warmup_sets_count =   null,
	warmup_min_load =     null,
	warmup_inc_min_load = null,
	warmup_inc_max_load = null,
	min_rest_day =        0,
	routine_schedule =    [
		// CO2
		new Day( 
			gap  = 1,
			sets = [
				new Set('20%', LoadType.TIME2, '', 150),
				new Set('35%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 135),
				new Set('50%', LoadType.TIME2, '', 120),
				new Set('50%', LoadType.TIME2, '', 105),
				new Set('50%', LoadType.TIME2, '', 90),
				new Set('50%', LoadType.TIME2, '', 75),
				new Set('50%', LoadType.TIME2, '', 60),
				new Set('50%', LoadType.TIME2, '', 0),
			]
		),

		// CO2
		new Day( 
			gap  = 1,
			sets = [
				new Set('20%', LoadType.TIME2, '', 150),
				new Set('35%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 135),
				new Set('50%', LoadType.TIME2, '', 120),
				new Set('50%', LoadType.TIME2, '', 105),
				new Set('50%', LoadType.TIME2, '', 90),
				new Set('50%', LoadType.TIME2, '', 75),
				new Set('50%', LoadType.TIME2, '', 60),
				new Set('50%', LoadType.TIME2, '', 0),
			]
		),

		// CO2
		new Day( 
			gap  = 1,
			sets = [
				new Set('20%', LoadType.TIME2, '', 150),
				new Set('35%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 135),
				new Set('50%', LoadType.TIME2, '', 120),
				new Set('50%', LoadType.TIME2, '', 105),
				new Set('50%', LoadType.TIME2, '', 90),
				new Set('50%', LoadType.TIME2, '', 75),
				new Set('50%', LoadType.TIME2, '', 60),
				new Set('50%', LoadType.TIME2, '', 0),
			]
		),

		// CO2
		new Day( 
			gap  = 1,
			sets = [
				new Set('20%', LoadType.TIME2, '', 150),
				new Set('35%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 150),
				new Set('50%', LoadType.TIME2, '', 135),
				new Set('50%', LoadType.TIME2, '', 120),
				new Set('50%', LoadType.TIME2, '', 105),
				new Set('50%', LoadType.TIME2, '', 90),
				new Set('50%', LoadType.TIME2, '', 75),
				new Set('50%', LoadType.TIME2, '', 60),
				new Set('50%', LoadType.TIME2, '', 0),
			]
		),

		// O2
		new Day( 
			gap  = 1,
			sets = [
				new Set('20%', LoadType.TIME2, '', 120),
				new Set('30%', LoadType.TIME2, '', 120),
				new Set('37%', LoadType.TIME2, '', 120),
				new Set('44%', LoadType.TIME2, '', 120),
				new Set('51%', LoadType.TIME2, '', 120),
				new Set('58%', LoadType.TIME2, '', 120),
				new Set('65%', LoadType.TIME2, '', 120),
				new Set('72%', LoadType.TIME2, '', 120),
				new Set('80%', LoadType.TIME2, '', 120),
			]
		)
	],
	routine_offset =      0,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1.75,
	training_max_limiter = 300,
);










// Swimming Warmup
// --------------------------------------------------

var SWIM_WARMUP = new Exercise(
	name =                'Swim Warmup',
	load_type =           LoadType.WEIGHT,
	training_max =        null, 
	use_warmup_sets =     false,
	warmup_sets_count =   null,
	warmup_min_load =     null,
	warmup_inc_min_load = null,
	warmup_inc_max_load = null,
	min_rest_day =        0,
	routine_schedule =    [
		new Day( 
			gap  = 1,
			sets = [
				new Set('Free (kick)', LoadType.WEIGHT, 5, 120),
				new Set('Side (kick)', LoadType.WEIGHT, 5, 120),
				new Set('Free (pull)', LoadType.WEIGHT, 5, 120),
				new Set('Side (pull)', LoadType.WEIGHT, 5, 120),
				new Set('Free', LoadType.WEIGHT, 5, 120),
				new Set('Side', LoadType.WEIGHT, 5, 120),
				new Set('Dolphin', LoadType.WEIGHT, 5, 120),
			]
		)
	],
	routine_offset =      0,
	routine_fastforward =  0,
	ignore_days =          null,
	show_rest =            true,
	loop_exercise =        true,
	session_load =         1.5
);










// Swim to 5k
// --------------------------------------------------

var SWIM_TO_5K = new Exercise(
	name =                'Swim to 5k',
	load_type =           COUCH_TO_5K.load_type,
	training_max =        COUCH_TO_5K.training_max, 
	use_warmup_sets =     COUCH_TO_5K.use_warmup_sets,
	warmup_sets_count =   COUCH_TO_5K.warmup_sets_count,
	warmup_min_load =     COUCH_TO_5K.warmup_min_load,
	warmup_inc_min_load = COUCH_TO_5K.warmup_inc_min_load,
	warmup_inc_max_load = COUCH_TO_5K.warmup_inc_max_load,
	min_rest_day =        COUCH_TO_5K.min_rest_day,
	routine_schedule =    COUCH_TO_5K.routine_schedule,
	routine_offset =      1,
	routine_fastforward = COUCH_TO_5K.routine_fastforward,
	ignore_days =         [],
	show_rest =           COUCH_TO_5K.show_rest,
	loop_exercise =       COUCH_TO_5K.loop_exercise,
	session_load =        COUCH_TO_5K.session_load
);