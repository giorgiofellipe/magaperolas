gulp = require 'gulp'
gutil = require 'gulp-util'
templateCache = require 'gulp-angular-templatecache'

gulp.task 'views', (done) ->
  gulp.src(['src-public/views/**/*.html', 'src-public/directives/**/*.html'])
    .pipe gulp.dest('public/views')
  	.on 'error', gutil.log
    .pipe(templateCache(
      filename: 'templates.js'
      module: 'app.templates'
      standalone: true))
    .on 'error', gutil.log
    .pipe gulp.dest('public/js')
    .on 'end', done
  return
