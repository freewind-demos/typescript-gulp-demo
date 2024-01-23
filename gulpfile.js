const gulp = require('gulp')
const minify = require('gulp-minify')

gulp.task('default', () => {
    return gulp.src('hello.js')
        .pipe(minify())
        .pipe(gulp.dest('build/'))
})

