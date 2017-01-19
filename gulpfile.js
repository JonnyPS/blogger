// Run the following command to start browserSync
// browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/*.scss, app/assets/javascripts/*.js,  app/views/**/*.html.erb, app/views/**/**/*.html.erb"


// browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/*.scss, app/views/*/*html.erb"
    console.log('hello')

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
    console.log('gulp task')
    setTimeout(function reload() {
    console.log('reload')
      return gulp.pipe(browserSync.reload({
        stream: true
      }))
    }, 3000); 
})

// watch files to compile when saved - first run browserSync and then run sass
gulp.task('watch', ['sass'], function(){
  gulp.watch('app/assets/**/*.scss', ['sass']); 
  // Other watchers
})

// init browserSync
gulp.task('browserSync', function() {
  browserSync.init({
  //   server: {
  //     baseDir: '../'
  //   },
  })
})

// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();

// var setupWatchers = function() {
//   gulp.watch(['./app/views/**/*.erb',
//               './app/assets/javascripts/**/*.js'], ['reload']);
//   gulp.watch(['./app/assets/stylesheets/**/*.scss'], ['reloadCSS'])
// };

// gulp.task('reload', function(){
//   return browserSync.reload();
// });

// gulp.task('reloadCSS', function() {
//   return browserSync.reload('*.css');
// });

// gulp.task('init', function() {
//   browserSync.init({
//       proxy: 'localhost:7999',
//       port: 8000,
//       open: false,
//       ui: {
//         port: 8001
//       }
//   });

//   setupWatchers();
// });

// gulp.task('default', ['init']);