if ( typeof require === 'function' ) {
    var chai = require('chai'),
        assert = chai.assert,
        userAgents = require('./user-agents'),
        lowBrowser = require('../low-browser');
}

/**
 * Check Microsoft Edge browser
 */
describe ( 'Microsoft Edge', function () {

    /**
     * Edge 13 tests
     */
    describe ( 'Version 13', function () {

        describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.edge13.desktop.defaultWin10 );
            } );

            it ( 'Name should be «Edge»', function () {
                assert.strictEqual( lowBrowser.name, 'Edge' );
            } );

            it ( 'Version should be «13»', function () {
                assert.strictEqual( lowBrowser.version, '13' );
            } );

            it ( 'Core should be «EdgeHTML»', function () {
                assert.strictEqual( lowBrowser.core, 'EdgeHTML' );
            } );

            it ( 'Core Version should be «13.10586»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '13.10586' );
            } );

            it ( 'OS should be «Windows NT 10.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 10.0' );
            } );

            it ( 'OS Build should be «10586»', function () {
                assert.strictEqual( lowBrowser.osBuild, '10586' );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Mobile] Windows Phone 10.0 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.edge13.mobile.emulator );
            } );

            it ( 'Name should be «Edge»', function () {
                assert.strictEqual( lowBrowser.name, 'Edge' );
            } );

            it ( 'Version should be «13»', function () {
                assert.strictEqual( lowBrowser.version, '13' );
            } );

            it ( 'Core should be «EdgeHTML»', function () {
                assert.strictEqual( lowBrowser.core, 'EdgeHTML' );
            } );

            it ( 'Core Version should be «13.10570»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '13.10570' );
            } );

            it ( 'OS should be «Windows Phone 10.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows Phone 10.0' );
            } );

            it ( 'OS Build should be «10570»', function () {
                assert.strictEqual( lowBrowser.osBuild, '10570' );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

    } );

    /**
     * Edge 12 tests
     */
    describe ( 'Version 12', function () {

        describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.edge12.desktop.defaultWin10 );
            } );

            it ( 'Name should be «Edge»', function () {
                assert.strictEqual( lowBrowser.name, 'Edge' );
            } );

            it ( 'Version should be «12»', function () {
                assert.strictEqual( lowBrowser.version, '12' );
            } );

            it ( 'Core should be «EdgeHTML»', function () {
                assert.strictEqual( lowBrowser.core, 'EdgeHTML' );
            } );

            it ( 'Core Version should be «12.10240»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '12.10240' );
            } );

            it ( 'OS should be «Windows NT 10.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 10.0' );
            } );

            it ( 'OS Build should be «10240»', function () {
                assert.strictEqual( lowBrowser.osBuild, '10240' );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Mobile] Windows Phone 10.0 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.edge12.mobile.emulator );
            } );

            it ( 'Name should be «Edge»', function () {
                assert.strictEqual( lowBrowser.name, 'Edge' );
            } );

            it ( 'Version should be «12»', function () {
                assert.strictEqual( lowBrowser.version, '12' );
            } );

            it ( 'Core should be «EdgeHTML»', function () {
                assert.strictEqual( lowBrowser.core, 'EdgeHTML' );
            } );

            it ( 'Core Version should be «12.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '12.0' );
            } );

            it ( 'OS should be «Windows Phone 10.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows Phone 10.0' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

    } );

} );

/**
 * Check Microsoft Internet Explorer browser
 */
describe ( 'Microsoft Internet Explorer', function () {

    /**
     * Internet Explorer 11 tests
     */
    describe ( 'Version 11', function () {

        describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie11.desktop.defaultWin10 );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «11.0»', function () {
                assert.strictEqual( lowBrowser.version, '11.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «7.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '7.0' );
            } );

            it ( 'OS should be «Windows NT 10.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 10.0' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Desktop] Windows NT 6.3 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie11.desktop.emulator );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «11.0»', function () {
                assert.strictEqual( lowBrowser.version, '11.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «7.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '7.0' );
            } );

            it ( 'OS should be «Windows NT 6.3»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.3' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Mobile] Windows Phone 8.1 Update (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie11.mobile.emulator );
            } );

            it ( 'Name should be «IEMobile»', function () {
                assert.strictEqual( lowBrowser.name, 'IEMobile' );
            } );

            it ( 'Version should be «11.0»', function () {
                assert.strictEqual( lowBrowser.version, '11.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «7.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '7.0' );
            } );

            it ( 'OS should be «Windows Phone 8.1»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows Phone 8.1' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

    } );

    /**
     * Internet Explorer 10 tests
     */
    describe ( 'Version 10', function () {

        describe ( '[Desktop] Windows NT 6.2 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie10.desktop.emulator );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «10.0»', function () {
                assert.strictEqual( lowBrowser.version, '10.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «6.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '6.0' );
            } );

            it ( 'OS should be «Windows NT 6.2»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.2' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Mobile] Windows Phone 8.0 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie10.mobile.emulator );
            } );

            it ( 'Name should be «IEMobile»', function () {
                assert.strictEqual( lowBrowser.name, 'IEMobile' );
            } );

            it ( 'Version should be «10.0»', function () {
                assert.strictEqual( lowBrowser.version, '10.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «6.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '6.0' );
            } );

            it ( 'OS should be «Windows Phone 8.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows Phone 8.0' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Game Platform] Xbox One (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie10.gamePlatforms.emulatorXboxOne );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «10.0»', function () {
                assert.strictEqual( lowBrowser.version, '10.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «6.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '6.0' );
            } );

            it ( 'OS should be «Windows NT 6.2»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.2' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «Xbox One»', function () {
                assert.strictEqual( lowBrowser.gamePlatform, 'Xbox One' );
            } );

        } );


    } );

    /**
     * Internet Explorer 9 tests
     */
    describe ( 'Version 9', function () {

        describe ( '[Desktop] Windows NT 6.1 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie9.desktop.emulator );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «9.0»', function () {
                assert.strictEqual( lowBrowser.version, '9.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «5.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '5.0' );
            } );

            it ( 'OS should be «Windows NT 6.1»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.1' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Mobile] Windows Phone 7.5 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie9.mobile.emulator );
            } );

            it ( 'Name should be «IEMobile»', function () {
                assert.strictEqual( lowBrowser.name, 'IEMobile' );
            } );

            it ( 'Version should be «9.0»', function () {
                assert.strictEqual( lowBrowser.version, '9.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «5.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '5.0' );
            } );

            it ( 'OS should be «Windows Phone OS 7.5»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows Phone OS 7.5' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Game Platform] Xbox 360 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie9.gamePlatforms.emulatorXbox360 );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «9.0»', function () {
                assert.strictEqual( lowBrowser.version, '9.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «5.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '5.0' );
            } );

            it ( 'OS should be «Windows NT 6.1»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.1' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «Xbox 360»', function () {
                assert.strictEqual( lowBrowser.gamePlatform, 'Xbox 360' );
            } );

        } );

    } );

    /**
     * Internet Explorer 8 tests
     */
    describe ( 'Version 8', function () {

        describe ( '[Desktop] Windows NT 6.1 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie8.desktop.emulator );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «8.0»', function () {
                assert.strictEqual( lowBrowser.version, '8.0' );
            } );

            it ( 'Core should be «Trident»', function () {
                assert.strictEqual( lowBrowser.core, 'Trident' );
            } );

            it ( 'Core Version should be «4.0»', function () {
                assert.strictEqual( lowBrowser.coreVersion, '4.0' );
            } );

            it ( 'OS should be «Windows NT 6.1»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.1' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

    } );

    /**
     * Internet Explorer 7 tests
     */
    describe ( 'Version 7', function () {

        describe ( '[Desktop] Windows NT 6.0 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie7.desktop.emulator );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «7.0»', function () {
                assert.strictEqual( lowBrowser.version, '7.0' );
            } );

            it ( 'Core should be «undefined»', function () {
                assert.isUndefined( lowBrowser.core );
            } );

            it ( 'Core Version should be «undefined»', function () {
                assert.isUndefined( lowBrowser.coreVersion );
            } );

            it ( 'OS should be «Windows NT 6.0»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 6.0' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

    } );

    /**
     * Internet Explorer 6 tests
     */
    describe ( 'Version 6', function () {

        describe ( '[Desktop] Windows NT 5.1 (default user agent)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie6.desktop.defaultWin51 );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «6.0»', function () {
                assert.strictEqual( lowBrowser.version, '6.0' );
            } );

            it ( 'Core should be «undefined»', function () {
                assert.isUndefined( lowBrowser.core );
            } );

            it ( 'Core Version should be «undefined»', function () {
                assert.isUndefined( lowBrowser.coreVersion );
            } );

            it ( 'OS should be «Windows NT 5.1»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 5.1' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

        describe ( '[Desktop] Windows NT 5.1 (emulator)', function () {
            before ( function () {
                lowBrowser.parse( userAgents.ie6.desktop.emulator );
            } );

            it ( 'Name should be «IE»', function () {
                assert.strictEqual( lowBrowser.name, 'IE' );
            } );

            it ( 'Version should be «6.0»', function () {
                assert.strictEqual( lowBrowser.version, '6.0' );
            } );

            it ( 'Core should be «undefined»', function () {
                assert.isUndefined( lowBrowser.core );
            } );

            it ( 'Core Version should be «undefined»', function () {
                assert.isUndefined( lowBrowser.coreVersion );
            } );

            it ( 'OS should be «Windows NT 5.1»', function () {
                assert.strictEqual( lowBrowser.os, 'Windows NT 5.1' );
            } );

            it ( 'OS Build should be «undefined»', function () {
                assert.isUndefined( lowBrowser.osBuild );
            } );

            it ( 'Game Platform should be «undefined»', function () {
                assert.isUndefined( lowBrowser.gamePlatform );
            } );

        } );

    } );

} );