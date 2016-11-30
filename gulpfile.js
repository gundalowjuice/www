var gulp         = require('gulp');
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    browserSync  = require('browser-sync').create();


gulp.task('sass', function(){
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

gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('src/*.scss', ['sass']);
})

gulp.task('browserSync', function(){
  browserSync.init({
    proxy: 'gundalowjuice.dev',
    open: false
  });
})
