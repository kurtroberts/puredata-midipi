var gulp = require('gulp'),
	shell = require('gulp-shell'),
	paths = {
		puredata: './puredata/**',
		pdTarget: '/home/pi/pd-patches/'

	};

gulp.task('puredata', function () {
	return gulp.src(paths.puredata)
			.pipe(gulp.dest(paths.pdTarget));
});

gulp.task('midiports', shell.task(['cat /dev/sndstat']));

gulp.task('interactive', shell.task(['pd-extended -midiindev 0,1 -midioutdev 0,1 ']));
