var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('sass', function() {
  gulp.src([
    'src/main.scss',
    'src/**/*.+(scss|css)'
  ])
  .pipe(concat('bundle.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('www/'));
});

gulp.task('watch', function() {
  gulp.start('sass');

	watch([
		'src/**/*.+(scss|css)'
	], function() {
		gulp.start('sass');
	});
});
