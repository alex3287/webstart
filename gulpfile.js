var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');

gulp.task('minify-css', function(done){
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css'))

  done();
})

gulp.task('move-js', function(done){
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'))

  done();
})

gulp.task('htmlmin', function(done){
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist/'))

  done();
})

gulp.task('fonts', function(done){
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))

  done();
})

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinyPNG({
          key: 'psTkpyy9K5Czw1yJJj4t4DJzz7hchFjt'
      }))
      .pipe(gulp.dest('dist/img/'));
      done();
});

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'fonts', 'tinypng', function(done) {
  // do more stuff
  done();
}));