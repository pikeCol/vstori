var gulp = require('gulp'),
    less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('testLess', function () {
    gulp.src(['./css/*.less'])
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));
});

gulp.task('default',['testLess'], function(){
	browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("css/*.less", ['testLess']);
  gulp.watch("*.html").on('change',browserSync.reload);
  gulp.watch("backend/*.html").on('change',browserSync.reload);
})