'use strict'

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    wiredep = require('wiredep').stream;

//server connect
gulp.task('connect', function(){
    connect.server({
        root: './src/main/webapp/',
        livereload: true
    });
});

//html
gulp.task('html', function(){
    gulp.src('src/main/webapp/index.html')
        .pipe(connect.reload());
});

//wiredep realise
gulp.task('bower', function () {
    gulp.src('./src/main/webapp/index.html')
        .pipe(wiredep({
            directory: "./src/main/webapp/bower_components"
        }))
        .pipe(gulp.dest('./src/main/webapp/'));
});

//watch
gulp.task('watch', function(){
    gulp.watch('src/main/webapp/index.html', ['html']),
    gulp.watch('./src/main/webapp/bower.json', ['bower'])
});


//default
gulp.task('default', ['connect', 'html', 'watch', 'bower']);

