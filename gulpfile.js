const gulp = require('gulp')
const minify = require('gulp-minify')

gulp.task('default', function () {
    gulp.src('hello.js')
        .pipe(minify())
        .pipe(gulp.dest('build/'))
})

