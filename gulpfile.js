var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  // return gulp.src('app/assets/stylesheets/*.scss')
  // .pipe(sass())
  // .pipe(gulp.dest('app/assets/stylesheets/'))
  //stuff here
  console.log('hello zell!')
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '../'
    },
  })
})