var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");
var glob = require('glob');
var es = require('event-stream');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('js', function(done) {
    glob('./src/app/*.js', function(err, files) {
        if(err) done(err);

        var tasks = files.map(function(entry) {
          return browserify({
              entries: [entry]
          })
          .transform(babelify.configure({
              presets : ["es2015"]
          }))
          .bundle()
          .pipe(source(entry))
          .pipe(flatten())
          .pipe(gulp.dest('./build/js'));
      })
    es.merge(tasks).on('end', done);
  });
});

gulp.task('js:watch', function() {
  gulp.watch('./src/app/**/*.js', ['js']);
});

gulp.task('img', function() {
  gulp.src('src/static/img/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('default', ['sass', 'js', 'img']);
