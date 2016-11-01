/*!
 * Low Browser it is a small tool to definition Microsoft browsers (IE and EDGE) on JavaScript
 * https://github.com/Arttse/low-browser
 * Copyright (c) 2015-2016 Nikita «Arttse» Bystrov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.2.0
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

        var m, regExp;

        this.userAgent    = userAgent;
        this.name         = undefined;
        this.version      = undefined;
        this.core         = undefined;
        this.coreVersion  = undefined;
        this.os           = undefined;
        this.osBuild      = undefined;
        this.gamePlatform = undefined;

        /** Check Mac Power PC */
        if ( /Mac_PowerPC/i.test( userAgent ) ) {
            this.os = 'Mac_PowerPC';
        }

        /** Check Mac OS X */
        if ( /Mac OS X/i.test( userAgent ) ) {
            this.os = 'Mac OS X';
        }

        /** Check Windows OS */
        if ( ( m = userAgent.match( /(Windows.*?)(;|\))/i ) ) ) {

            this.os = m[1].replace( /^\s+|\s+$/g, '' );

            /** Fixes */
            this.os = this.os.replace( /NT(\d)/i, 'NT $1' );
            this.os = this.os.replace( /(NT\s\d{1,2})$/i, '$1.0' );

        }

        /** Check Trident version core */
        if ( ( m = userAgent.match( /Trident(\/|\s)(\d+\.(\d+|\w+))(;|\))/i ) ) ) {
            this.core        = 'Trident';
            this.coreVersion = m[2].replace( /^\s+|\s+$/g, '' );
        }

        /** Check IE 11 */
        if ( /rv:11\.0/i.test( userAgent ) && this.core === 'Trident' ) {
            this.name    = 'IE';
            this.version = '11.0';
        }

        /** Check IE < 11 */
        regExp = 'MSIE(\\/|\\s)(\\d+\\.(\\d+|\\w+))(;|\\))';

        if (
            ( m = userAgent.match ( new RegExp ( regExp, 'ig' ) ) ) &&
            ( m = m[m.length - 1].match ( new RegExp ( regExp, 'i' ) ) )
        ) {
            this.name = 'IE';
            this.version = m[2].replace ( /^\s+|\s+$/g, '' );
        }

        /** Check IEMobile */
        if ( ( m = userAgent.match( /IEMobile(\/|\s)(\d+\.(\d+|\w+))(;|\))/i ) ) ) {
            this.name    = 'IEMobile';
            this.version = m[2].replace( /^\s+|\s+$/g, '' );
        }

        /** Check EDGE browser */
        if ( ( m = userAgent.match( /Edge(\/|\s)(.*?)\.(\d+)/i ) ) ) {
            this.name        = 'Edge';
            this.version     = m[2].replace( /^\s+|\s+$/g, '' );
            this.osBuild     = +m[3] ? m[3].replace( /^\s+|\s+$/g, '' ) : undefined;
            this.core        = 'EdgeHTML';
            this.coreVersion = m[2].replace( /^\s+|\s+$/g, '' ) + '.' + m[3].replace( /^\s+|\s+$/g, '' );
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

    /** Universal Module Definition */
    if ( typeof module === 'object' && module.exports ) {
        // CommonJS
        module.exports = lowBrowser;
    } else if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define ( function () {
            return lowBrowser;
        } );
    } else {
        // Browser globals
        lowBrowser.parse ( global.navigator.userAgent );
        global.lowBrowser = lowBrowser;
    }

}) ( this );