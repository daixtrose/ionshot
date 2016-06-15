// Gulp Libraries

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sh = require('shelljs');
var coffee = require('gulp-coffee');
var insert = require('gulp-insert');
var chmod = require('gulp-chmod');
var include = require('gulp-include');

// Error Handling

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// Sources Paths

//coffee: ['./src/**/*.coffee']

var paths = {
  coffee_index: ['./src/index.coffee'],
  coffee: ['./src/**/*.coffee']
};

// Gulp Default Task

gulp.task('default', ['coffee', 'watch']);

// Gulp Coffee Task

gulp.task('coffee', function(done) {
  gutil.log(gutil.colors.yellow('Processing COFFEE File...'));
  gulp.src(paths.coffee_index)
  .pipe(include())
  .pipe(coffee({
    bare: true
  })
  .on('error', handleError))
  .pipe(insert.prepend('#! /usr/bin/env node\n\n'))
  .pipe(chmod({
        owner: { execute: true },
        group: { execute: true },
        others: { execute: true }
      }))
  .pipe(gulp.dest('./build/'))
  .on('end', done);
});

gulp.task('watch', function() {
  gutil.log(gutil.colors.yellow('Starting WATCH task...'));
  gulp.watch(paths.coffee, ['coffee']);
});