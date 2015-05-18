sass = require('gulp-sass');
concat = require 'gulp-concat'
minifycss = require('gulp-minify-css');

gulp.task 'sass', (done) ->
  gulp.src(['src-public/styles/*.scss', 'src-public/styles/*.css'])
  .pipe sass()
  .pipe minifycss()
  .pipe concat 'app.min.css'
  .pipe gulp.dest 'public/css'
  .on 'end', done
  return
