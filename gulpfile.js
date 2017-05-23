var gulp = require ( 'gulp' );
var gulpRename = require ( 'gulp-rename' );
var gulpJSHint = require ( 'gulp-jshint' );
var gulpUglify = require ( 'gulp-uglify' );
var gulpMocha = require ( 'gulp-mocha' );
var mochaPhantomJS = require ( 'gulp-mocha-phantomjs' );
var istanbul = require ( 'gulp-istanbul' );
var coveralls = require ( 'gulp-coveralls' );
var jshintStylish = require ( 'jshint-stylish' );
var validatePackage = require ( 'gulp-nice-package' );
var toc = require ( 'gulp-doctoc' );
var lintSpaces = require ( 'gulp-lintspaces' );
var mapstream = require ( 'map-stream' );
var sequence = require ( 'run-sequence' );
var pump = require ( 'pump' );
var isValid;


process.on ( 'exit', function () {
  process.nextTick ( function () {
    process.exit ( 1 );
  } );
} );


/** Generate Table of Contents for README */
gulp.task ( 'toc', function ( cb ) {
  pump ( [
    gulp.src ( './README.md' ),
    toc ( {title : '## Table of Contents'} ),
    gulp.dest ( './' )
  ], cb );
} );


/** Validate Package.json */
gulp.task ( 'validator.package', function ( cb ) {
  pump ( [
    gulp.src ( './package.json' ),
    validatePackage (),
    mapstream ( function ( file, cb ) {
      isValid = file.nicePackage.valid;
      cb ( null, file );
    } ).on ( 'end', function () {
      if ( !isValid ) {
        process.emit ( 'exit' );
      }
    } )
  ], cb );
} );

/** All validators */
gulp.task ( 'validators', function ( cb ) {
  sequence ( 'validator.package', cb );
} );


/** JSHint */
gulp.task ( 'lint', function ( cb ) {
  pump ( [
    gulp.src ( './low-browser.js' ),
    gulpJSHint (),
    gulpJSHint.reporter ( jshintStylish ),
    gulpJSHint.reporter ( "fail" )
  ], cb );
} );

/** JSHint tests */
gulp.task ( 'lint.tests', function ( cb ) {
  pump ( [
    gulp.src ( './test/tests.js' ),
    gulpJSHint (),
    gulpJSHint.reporter ( jshintStylish ),
    gulpJSHint.reporter ( "fail" )
  ], cb );
} );

/** Check from .editorconfig */
gulp.task ( 'lint.spaces', function ( cb ) {
  pump ( [
    gulp.src ( [
      './*.?(html|js|json|yml|md)',
      './**/*.?(html|js|json|yml|md)',
      '!**/node_modules/**',
      '!./coverage/**'
    ] ),
    lintSpaces ( {
      editorconfig : './.editorconfig',
      ignores      : ['js-comments']
    } ),
    lintSpaces.reporter ()
  ], cb );
} );

/** All lints */
gulp.task ( 'lints', function ( cb ) {
  sequence ( 'lint', 'lint.tests', 'lint.spaces', cb );
} );

/** Istanbul pre-test */
gulp.task ( 'pre-test', function ( cb ) {
  pump ( [
    gulp.src ( ['./low-browser.js'] ),
    istanbul (),
    istanbul.hookRequire ()
  ], cb );
} );

/** Run server side tests with coverage */
gulp.task ( 'test.node', ['pre-test'], function ( cb ) {
  pump ( [
    gulp.src ( './test/tests.js', {read : false} ),
    gulpMocha ( {reporter : 'dot'} ),
    istanbul.writeReports ()
  ], cb );
} );

/** Test in browser */
gulp.task ( 'test.browser', function ( cb ) {
  pump ( [
    gulp.src ( 'test/browser.html' ),
    mochaPhantomJS ( {reporter : 'dot'} )
  ], cb )
} );

/** All tests */
gulp.task ( 'tests', function ( cb ) {
  sequence ( 'test.node', 'test.browser', cb );
} );

/** Push to coveralls.io */
gulp.task ( 'coveralls', function ( cb ) {
  pump ( [
    gulp.src ( 'coverage/**/lcov.info' ),
    coveralls ()
  ], cb );
} );


/** Compress script */
gulp.task ( 'compress', function ( cb ) {
  pump ( [
    gulp.src ( './low-browser.js' ),
    gulpUglify ( {preserveComments : 'license'} ),
    gulpRename ( 'low-browser.min.js' ),
    gulp.dest ( './' )
  ], cb );
} );


/** Full validate */
gulp.task ( 'check.all', function ( cb ) {
  sequence ( 'validators', 'lints', 'tests', cb );
} );


/** Start work */
gulp.task ( 'start', function () {
  gulp.watch ( './low-browser.js', ['compress'] );
  gulp.watch ( './README.md', ['toc'] );
} );


/** Run all */
gulp.task ( 'default', function ( cb ) {
  sequence ( 'check.all', 'toc', 'compress', cb );
} );
