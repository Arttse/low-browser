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
var isValid;


process.on ( 'exit', function () {
    process.nextTick ( function () {
        process.exit ( 1 );
    } );
} );


/** Generate Table of Contents for README */
gulp.task ( 'toc', function () {
    return gulp
        .src ( './README.md' )
        .pipe ( toc ( {
            title : '## Table of Contents'
        } ) )
        .pipe ( gulp.dest ( './' ) );
} );


/** Validate Package.json */
gulp.task ( 'validator.package', function () {
    return gulp
        .src ( './package.json' )
        .pipe ( validatePackage () )
        .pipe ( mapstream ( function ( file, cb ) {
            isValid = file.nicePackage.valid;
            cb ( null, file );
        } ) )
        .on ( 'end', function () {
            if ( !isValid ) {
                process.emit ( 'exit' );
            }
        } );
} );

/** All validators */
gulp.task ( 'validators', function ( cb ) {
    sequence ( 'validator.package', function () {
        cb ();
    } );
} );


/** JSHint */
gulp.task ( 'lint', function () {
    return gulp
        .src ( './low-browser.js' )
        .pipe ( gulpJSHint () )
        .pipe ( gulpJSHint.reporter ( jshintStylish ) )
        .pipe ( gulpJSHint.reporter ( "fail" ) );
} );

/** JSHint tests */
gulp.task ( 'lint.tests', function () {
    return gulp
        .src ( './test/tests.js' )
        .pipe ( gulpJSHint () )
        .pipe ( gulpJSHint.reporter ( jshintStylish ) )
        .pipe ( gulpJSHint.reporter ( "fail" ) );
} );

/** Check from .editorconfig */
gulp.task ( 'lint.spaces', function () {
    return gulp
        .src ( [
            './*.?(html|js|json|yml|md)',
            './**/*.?(html|js|json|yml|md)',
            '!./node_modules/**',
            '!./coverage/**'
        ] )
        .pipe ( lintSpaces ( {
            editorconfig : './.editorconfig',
            ignores      : ['js-comments']
        } ) )
        .pipe ( lintSpaces.reporter () );
} );

/** All lints */
gulp.task ( 'lints', function ( cb ) {
    sequence ( 'lint', 'lint.tests', 'lint.spaces', function () {
        cb ();
    } );
} );

/** Istanbul pre-test */
gulp.task ( 'pre-test', function () {
    return gulp
        .src ( ['./low-browser.js'] )
        .pipe ( istanbul () )
        .pipe ( istanbul.hookRequire () );
} );

/** Run server side tests with coverage */
gulp.task ( 'test.node', ['pre-test'], function () {
    return gulp
        .src ( './test/tests.js', {read : false} )
        .pipe ( gulpMocha ( {
            reporter : 'dot'
        } ) )
        .pipe ( istanbul.writeReports () );
} );

/** Test in browser */
gulp.task ( 'test.browser', function () {
    return gulp
        .src ( 'test/browser.html' )
        .pipe ( mochaPhantomJS ( {
            reporter : 'dot'
        } ) );
} );

/** All tests */
gulp.task ( 'tests', function ( cb ) {
    sequence ( 'test.node', 'test.browser', function () {
        cb ();
    } );
} );

/** Push to coveralls.io */
gulp.task ( 'coveralls', function () {
    return gulp
        .src ( 'coverage/**/lcov.info' )
        .pipe ( coveralls () );
} );


/** Compress script */
gulp.task ( 'compress', function () {
    return gulp
        .src ( './low-browser.js' )
        .pipe ( gulpUglify ( {
            preserveComments : 'license'
        } ) )
        .pipe ( gulpRename ( 'low-browser.min.js' ) )
        .pipe ( gulp.dest ( './' ) );
} );


/** Full validate */
gulp.task ( 'check.all', function ( cb ) {
    sequence ( 'validators', 'lints', 'tests', function () {
        cb ();
    } );
} );


/** Start work */
gulp.task ( 'start', function () {
    gulp.watch ( './low-browser.js', ['compress'] );
    gulp.watch ( './README.md', ['toc'] );
} );


/** Run all */
gulp.task ( 'default', function ( cb ) {
    sequence ( 'check.all', 'toc', 'compress', function () {
        cb ();
    } );
} );