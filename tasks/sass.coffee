sass = require('gulp-sass');
concat = require 'gulp-concat'

gulp.task 'sass', (done) ->
  gulp.src 'src-public/styles/*.scss'
  .pipe sass()
  .pipe concat 'app.css'
  .pipe gulp.dest 'public/css'
  .on 'end', done
  return
