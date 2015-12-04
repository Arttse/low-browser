var gulp            = require ( 'gulp' ),
    gulpRename      = require ( 'gulp-rename' ),
    gulpJSHint      = require ( 'gulp-jshint' ),
    gulpUglify      = require ( 'gulp-uglify' ),
    gulpMocha       = require ( 'gulp-mocha' ),
    jshintStylish   = require ( 'jshint-stylish' ),
    validatePackage = require ( 'gulp-nice-package' ),
    toc             = require ( 'gulp-doctoc' ),
    mapstream       = require ( 'map-stream' ),
    sequence        = require ( 'run-sequence' );


process.on( 'exit', function () {
    process.nextTick( function () {
        process.exit( 1 );
    } );
} );


/** Generate Table of Contents for README */
gulp.task( 'toc', function () {
    return gulp
        .src( './README.md' )
        .pipe( toc ( {
            title : '<!-- Content -->'
        } ) )
        .pipe( gulp.dest( './' ) );
} );


/** Validate Package.json */
gulp.task( 'validator.package', function () {
    var isValid;

    return gulp
        .src( './package.json' )
        .pipe( validatePackage () )
        .pipe( mapstream ( function ( file, cb ) {
            isValid = file.nicePackage.valid;
            cb ( null, file );
        } ) )
        .on( 'end', function () {
            if ( !isValid ) {
                process.emit( 'exit' );
            }
        } );
} );

/** All validators */
gulp.task( 'validators', function ( cb ) {
    sequence ( 'validator.package', function () {
        cb ();
    } );
} );


/** JSHint */
gulp.task( 'lint', function () {
    return gulp
        .src( './low-browser.js' )
        .pipe( gulpJSHint () )
        .pipe( gulpJSHint.reporter( jshintStylish ) )
        .pipe( gulpJSHint.reporter( "fail" ) );
} );

/** JSHint tests */
gulp.task( 'lint.tests', function () {
    return gulp
        .src( './test/tests.js' )
        .pipe( gulpJSHint () )
        .pipe( gulpJSHint.reporter( jshintStylish ) )
        .pipe( gulpJSHint.reporter( "fail" ) );
} );

/** All lints */
gulp.task( 'lints', function ( cb ) {
    sequence ( 'lint', 'lint.tests', function () {
        cb ();
    } );
} );


/** Run server side tests */
gulp.task( 'test.node', function () {
    return gulp
        .src( './test/tests.js', { read : false } )
        .pipe( gulpMocha () );
} );

/** All tests */
gulp.task( 'tests', function ( cb ) {
    sequence ( 'test.node', function () {
        cb ();
    } );
} );


/** Compress script */
gulp.task( 'compress', function () {
    return gulp
        .src( './low-browser.js' )
        .pipe( gulpUglify ( {
            preserveComments : 'license'
        } ) )
        .pipe( gulpRename ( 'low-browser.min.js' ) )
        .pipe( gulp.dest( './' ) );
} );


/** Full validate */
gulp.task( 'check.all', function ( cb ) {
    sequence ( 'validators', 'lints', 'tests', function () {
        cb ();
    } );
} );


/** Start work */
gulp.task( 'start', function () {
    gulp.watch( './low-browser.js', ['compress'] );
    gulp.watch( './README.md', ['toc'] );
} );


/** Run all */
gulp.task( 'default', function ( cb ) {
    sequence ( 'check.all', 'toc', 'compress', function () {
        cb ();
    } );
} );

gulp.task( 't', ['validator.package'], function () {
    console.log( 'sd' );
} );