import gulp from 'gulp';
import ts from 'gulp-typescript';

gulp.task('default', async () => {
    return gulp.src('./src/hello.ts')
        .pipe(ts({
            outFile: 'bundle.js',
        }))
        .js
        .pipe(gulp.dest('build'))
        .on('success', () => {
            console.log('### DONE');
        })
})

