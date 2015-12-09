/*!
 * Low Browser it is a small tool to check Microsoft browsers (IE and EDGE) on JavaScript
 * https://github.com/Arttse/low-browser
 * Copyright (c) 2015 Nikita «Arttse» Bystrov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.2.0-pre3
 */

(function ( global ) {

    var lowBrowser = {};

    /**
     * Parse user agent browser
     *
     * @param {string} userAgent - string of user agent browser
     *
     * @returns {lowBrowser}
     */
    lowBrowser.parse = function ( userAgent ) {

        var m;

        this.userAgent    = userAgent;
        this.name         = undefined;
        this.version      = undefined;
        this.core         = undefined;
        this.coreVersion  = undefined;
        this.os           = undefined;
        this.osBuild      = undefined;
        this.gamePlatform = undefined;

        /** Check Windows OS */
        if ( ( m = userAgent.match( /(Windows.*?)(;|\))/i ) ) ) {
            this.os = m[1];
        }

        /** Check Trident version core */
        if ( ( m = userAgent.match( /Trident\/(\d+\.\d+)(;|\))/i ) ) ) {
            this.core        = 'Trident';
            this.coreVersion = m[1];
        }

        /** Check IE 11 */
        if ( /rv:11\.0/i.test( userAgent ) && this.core === 'Trident' ) {
            this.name    = 'IE';
            this.version = '11.0';
        }

        /** Check IE < 11 */
        if ( ( m = userAgent.match( /MSIE (\d+\.\d+)(;|\))/i ) ) ) {
            this.name    = 'IE';
            this.version = m[1];
        }

        /** Check IEMobile */
        if ( ( m = userAgent.match( /IEMobile(\/|\s)(\d+\.\d+)(;|\))/i ) ) ) {
            this.name    = 'IEMobile';
            this.version = m[2];
        }

        /** Check EDGE browser */
        if ( ( m = userAgent.match( /Edge\/(.*?)\.(\d+)/i ) ) ) {
            this.name        = 'Edge';
            this.version     = m[1];
            this.osBuild     = +m[2] ? m[2] : undefined;
            this.core        = 'EdgeHTML';
            this.coreVersion = m[1] + '.' + m[2];
        }

        /** Check Xbox 360 */
        if ( /Xbox/i.test( userAgent ) ) {
            this.gamePlatform = 'Xbox 360';
        }

        /** Check Xbox One */
        if ( /Xbox One/i.test( userAgent ) ) {
            this.gamePlatform = 'Xbox One';
        }

        return this;

    };

    /** Check server side or browser */
    if ( typeof exports === 'object' && module !== 'undefined' ) {
        module.exports = lowBrowser;
    } else {

        /** Check AMD */
        if ( typeof define === 'function' && define.amd ) {
            define ( function () {
                return lowBrowser;
            } );
        } else {
            lowBrowser.parse( global.navigator.userAgent );
            global.lowBrowser = lowBrowser;
        }

    }

}) ( this );