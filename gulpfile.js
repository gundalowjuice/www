var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create()
var svgstore = require('gulp-svgstore')
var svgmin = require('gulp-svgmin')
var rename = require('gulp-rename')

gulp.task('sass', function () {
  return gulp.src('src/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('src/*.scss', ['sass'])
  gulp.watch(['craft/templates/**/*.html', 'public/assets/js/*.js'], browserSync.reload)
})

gulp.task('browserSync', function () {
  browserSync.init({
    proxy: 'gundalowjuice.dev',
    open: false
  })
})

gulp.task('svgstore', function () {
  return gulp
    .src('src/img/svg/*.svg')
    .pipe(svgstore())
    .pipe(rename({basename: 'sprite'}))
    .pipe(gulp.dest('craft/templates/_includes/'))
})
