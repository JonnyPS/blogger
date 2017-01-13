// Run the following command to start browserSync
// browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/*.scss, app/assets/javascripts/*.js,  app/views/**/*.html.erb"

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('hello', function() {
//   console.log('Hello Zell');
// });

// compile sass files to css
gulp.task('sass', function() {
  return gulp.src('app/assets/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

// watch files to compile when saved - first run browserSync and then run sass
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/assets/**/*.scss', ['sass']); 
  // Other watchers
})

// init browserSync
gulp.task('browserSync', function() {
  // browserSync.init({
  //   server: {
  //     baseDir: '../'
  //   },
  // })
})