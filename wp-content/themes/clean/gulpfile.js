const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Compile SCSS to CSS
gulp.task('styles', function () {
  return gulp
    .src('src/scss/style.scss') // Watch the main style.scss file
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

// Concatenate and minify JS
gulp.task('scripts', function () {
  return gulp
    .src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Watch for changes
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles')); // Watch all SCSS files
  gulp.watch('src/js/*.js', gulp.series('scripts'));
});

// Default task
gulp.task('default', gulp.series('styles', 'scripts', 'watch'));
