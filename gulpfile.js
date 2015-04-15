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


var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src('./src/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./dist/js'))
});