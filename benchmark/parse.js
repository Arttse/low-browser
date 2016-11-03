'use strict';

const Benchmark = require ( 'benchmark' );
const flat = require ( 'flat' );

/** Parsers */
const expressUserAgent = require ( 'express-useragent' );
const koopa = require ( 'koopa' );
const lowBrowser = require ( 'low-browser' );
const platform = require ( 'platform' );
const uaParser = require ( 'ua-parser' );
const uaParserJS = require ( 'ua-parser-js' );
const ua_parser = require ( 'ua_parser' );
const useragent = require ( 'useragent' );
const useragentParser = require ( 'useragent-parser' );
const useragent_parser = require ( 'useragent_parser' );

/** Work with user agents */
let userAgents = require ( '../test/user-agents' );
userAgents = flat ( userAgents );
userAgents = Object.keys ( userAgents ).map ( key => userAgents[key] );

console.log ( `User agents count: ${userAgents.length}\n` );

/** Suite */
const suite = new Benchmark.Suite;

suite

  .add ( 'express-useragent', function () {
    for ( let u of userAgents ) {
      expressUserAgent.parse ( u );
    }
  } )

  .add ( 'koopa', function () {
    for ( let u of userAgents ) {
      koopa ( u );
    }
  } )

  .add ( 'low-browser', function () {
    for ( let u of userAgents ) {
      lowBrowser.parse ( u );
    }
  } )

  .add ( 'platform', function () {
    for ( let u of userAgents ) {
      platform.parse ( u );
    }
  } )

  .add ( 'ua-parser', function () {
    for ( let u of userAgents ) {
      uaParser.parseUA ( u );
    }
  } )

  .add ( 'ua-parser-js', function () {
    for ( let u of userAgents ) {
      uaParserJS ( u );
    }
  } )

  .add ( 'ua_parser', function () {
    for ( let u of userAgents ) {
      ua_parser.userAgent ( u );
    }
  } )

  .add ( 'useragent', function () {
    for ( let u of userAgents ) {
      useragent.parse ( u );
    }
  } )

  .add ( 'useragent-parser', function () {
    for ( let u of userAgents ) {
      useragentParser.parse ( u );
    }
  } )

  .add ( 'useragent_parser', function () {
    for ( let u of userAgents ) {
      useragent_parser.parse ( u );
    }
  } )

  // add listeners
  .on ( 'cycle', function ( event ) {
    console.log ( String ( event.target ) );
  } )

  .on ( 'complete', function () {
    console.log ( `\nFastest is ${this.filter ( 'fastest' ).map ( 'name' )}` );
  } )

  // run
  .run ();
