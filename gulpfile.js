var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');

gulp.task('sass', function() {
    return gulp.src('app/sass/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: 'app'
    },
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('app/sass/style.sass',['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
});
