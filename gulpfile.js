var gulp = require('gulp'),
	paths = {
		puredata: './puredata/**',
		pdTarget: '/home/pi/pd-patches/'

	};

gulp.task('puredata', function () {
	return gulp.src(paths.puredata)
			.pipe(gulp.dest(paths.pdTarget));
});
