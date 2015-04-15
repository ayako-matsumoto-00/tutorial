var gulp = require('gulp');
var stylus = require('gulp-stylus');

//stylusファイルをコンパイルをする
gulp.task('stylus',function(){
	gulp.src('./src/styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch',function(){
    gulp.watch('./src/**/*.styl', ['stylus']);
});

gulp.task('default',["watch"]);