/*!
 * Low Browser it is a small tool to check Microsoft browsers (IE and EDGE) on JavaScript
 * https://github.com/Arttse/low-browser
 * Copyright (c) 2015 Nikita «Arttse» Bystrov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.1.1
 */

(function ( window ) {

    /** Get userAgent of current browser */
    var userAgent = window.navigator.userAgent,
        m;

    /** Create object inside window */
    window.lowBrowser = {};

    /** Initialization function */
    window.lowBrowser.init = function ( userAgent ) {

        window.lowBrowser.name         = undefined;
        window.lowBrowser.version      = undefined;
        window.lowBrowser.core         = undefined;
        window.lowBrowser.coreVersion  = undefined;
        window.lowBrowser.os           = undefined;
        window.lowBrowser.osBuild      = undefined;
        window.lowBrowser.gamePlatform = undefined;

        /** Check Windows OS */
        if ( m = userAgent.match( /(Windows.*?)(;|\))/i ) ) {
            window.lowBrowser.os = m[1];
        }

        /** Check Trident version core */
        if ( m = userAgent.match( /Trident\/(\d+\.\d+)(;|\))/i ) ) {
            window.lowBrowser.core        = 'Trident';
            window.lowBrowser.coreVersion = m[1];
        }

        /** Check IE 11 */
        if ( /rv:11\.0/i.test( userAgent ) && window.lowBrowser.core === 'Trident' ) {
            window.lowBrowser.name    = 'IE';
            window.lowBrowser.version = '11.0';
        }

        /** Check IE < 11 */
        if ( m = userAgent.match( /MSIE (\d+\.\d+)(;|\))/i ) ) {
            window.lowBrowser.name    = 'IE';
            window.lowBrowser.version = m[1];
        }

        /** Check IEMobile */
        if ( m = userAgent.match( /IEMobile\/(\d+\.\d+)(;|\))/i ) ) {
            window.lowBrowser.name    = 'IEMobile';
            window.lowBrowser.version = m[1];
        }

        /** Check EDGE browser */
        if ( m = userAgent.match( /Edge\/(.*?)\.(\d+)/i ) ) {
            window.lowBrowser.name        = 'Edge';
            window.lowBrowser.version     = m[1];
            window.lowBrowser.osBuild     = m[2];
            window.lowBrowser.core        = 'EdgeHTML';
            window.lowBrowser.coreVersion = m[1] + '.' + m[2];
        }

        /** Check Xbox 360 */
        if ( /Xbox/i.test( userAgent ) ) {
            window.lowBrowser.gamePlatform = 'Xbox 360';
        }

        /** Check Xbox One */
        if ( /Xbox One/i.test( userAgent ) ) {
            window.lowBrowser.gamePlatform = 'Xbox One';
        }

    };

    /** Initialization for current browser */
    window.lowBrowser.init( userAgent );

}) ( window );