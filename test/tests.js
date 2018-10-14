if ( typeof require === 'function' ) {
  var chai       = require ( 'chai' ),
      assert     = chai.assert,
      userAgents = require ( './user-agents' ),
      lowBrowser = require ( '../dist/low-browser.umd' );
}

var data;

/**
 * Check Microsoft Edge browser
 */
describe ( 'Microsoft Edge', function () {

  /**
   * Edge 16 tests
   */
  describe ( 'Version 16', function () {

    describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge16.desktop.defaultWin10 );
      } );

      it ( 'User Agent should be «' + userAgents.edge16.desktop.defaultWin10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge16.desktop.defaultWin10 );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «16»', function () {
        assert.strictEqual ( data.version, '16' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «16.16299»', function () {
        assert.strictEqual ( data.coreVersion, '16.16299' );
      } );

      it ( 'OS should be «Windows NT 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 10.0' );
      } );

      it ( 'OS Build should be «16299»', function () {
        assert.strictEqual ( data.osBuild, '16299' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Edge 15 tests
   */
  describe ( 'Version 15', function () {

    describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge15.desktop.defaultWin10 );
      } );

      it ( 'User Agent should be «' + userAgents.edge15.desktop.defaultWin10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge15.desktop.defaultWin10 );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «15»', function () {
        assert.strictEqual ( data.version, '15' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «15.15063»', function () {
        assert.strictEqual ( data.coreVersion, '15.15063' );
      } );

      it ( 'OS should be «Windows NT 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 10.0' );
      } );

      it ( 'OS Build should be «15063»', function () {
        assert.strictEqual ( data.osBuild, '15063' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 10.0 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge15.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.edge15.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge15.mobile.emulator );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «15»', function () {
        assert.strictEqual ( data.version, '15' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «15.15036»', function () {
        assert.strictEqual ( data.coreVersion, '15.15036' );
      } );

      it ( 'OS should be «Windows Phone 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows Phone 10.0' );
      } );

      it ( 'OS Build should be «15036»', function () {
        assert.strictEqual ( data.osBuild, '15036' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Edge 14 tests
   */
  describe ( 'Version 14', function () {

    describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge14.desktop.defaultWin10 );
      } );

      it ( 'User Agent should be «' + userAgents.edge14.desktop.defaultWin10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge14.desktop.defaultWin10 );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «14»', function () {
        assert.strictEqual ( data.version, '14' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «14.14393»', function () {
        assert.strictEqual ( data.coreVersion, '14.14393' );
      } );

      it ( 'OS should be «Windows NT 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 10.0' );
      } );

      it ( 'OS Build should be «14393»', function () {
        assert.strictEqual ( data.osBuild, '14393' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 10.0 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge14.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.edge14.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge14.mobile.emulator );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «14»', function () {
        assert.strictEqual ( data.version, '14' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «14.14348»', function () {
        assert.strictEqual ( data.coreVersion, '14.14348' );
      } );

      it ( 'OS should be «Windows Phone 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows Phone 10.0' );
      } );

      it ( 'OS Build should be «14348»', function () {
        assert.strictEqual ( data.osBuild, '14348' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Edge 13 tests
   */
  describe ( 'Version 13', function () {

    describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge13.desktop.defaultWin10 );
      } );

      it ( 'User Agent should be «' + userAgents.edge13.desktop.defaultWin10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge13.desktop.defaultWin10 );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «13»', function () {
        assert.strictEqual ( data.version, '13' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «13.10586»', function () {
        assert.strictEqual ( data.coreVersion, '13.10586' );
      } );

      it ( 'OS should be «Windows NT 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 10.0' );
      } );

      it ( 'OS Build should be «10586»', function () {
        assert.strictEqual ( data.osBuild, '10586' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 10.0 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge13.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.edge13.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge13.mobile.emulator );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «13»', function () {
        assert.strictEqual ( data.version, '13' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «13.10570»', function () {
        assert.strictEqual ( data.coreVersion, '13.10570' );
      } );

      it ( 'OS should be «Windows Phone 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows Phone 10.0' );
      } );

      it ( 'OS Build should be «10570»', function () {
        assert.strictEqual ( data.osBuild, '10570' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Edge 12 tests
   */
  describe ( 'Version 12', function () {

    describe ( '[Desktop] Windows NT 10.0 (default user agent)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge12.desktop.defaultWin10 );
      } );

      it ( 'User Agent should be «' + userAgents.edge12.desktop.defaultWin10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge12.desktop.defaultWin10 );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «12»', function () {
        assert.strictEqual ( data.version, '12' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «12.10240»', function () {
        assert.strictEqual ( data.coreVersion, '12.10240' );
      } );

      it ( 'OS should be «Windows NT 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 10.0' );
      } );

      it ( 'OS Build should be «10240»', function () {
        assert.strictEqual ( data.osBuild, '10240' );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 10.0 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.edge12.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.edge12.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.edge12.mobile.emulator );
      } );

      it ( 'Name should be «Edge»', function () {
        assert.strictEqual ( data.name, 'Edge' );
      } );

      it ( 'Version should be «12»', function () {
        assert.strictEqual ( data.version, '12' );
      } );

      it ( 'Core should be «EdgeHTML»', function () {
        assert.strictEqual ( data.core, 'EdgeHTML' );
      } );

      it ( 'Core Version should be «12.0»', function () {
        assert.strictEqual ( data.coreVersion, '12.0' );
      } );

      it ( 'OS should be «Windows Phone 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows Phone 10.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
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
        data = lowBrowser ( userAgents.ie11.desktop.defaultWin10 );
      } );

      it ( 'User Agent should be «' + userAgents.ie11.desktop.defaultWin10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie11.desktop.defaultWin10 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «11.0»', function () {
        assert.strictEqual ( data.version, '11.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «7.0»', function () {
        assert.strictEqual ( data.coreVersion, '7.0' );
      } );

      it ( 'OS should be «Windows NT 10.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 10.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 6.3 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie11.desktop.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie11.desktop.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie11.desktop.emulator );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «11.0»', function () {
        assert.strictEqual ( data.version, '11.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «7.0»', function () {
        assert.strictEqual ( data.coreVersion, '7.0' );
      } );

      it ( 'OS should be «Windows NT 6.3»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.3' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 8.1 Update (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie11.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie11.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie11.mobile.emulator );
      } );

      it ( 'Name should be «IEMobile»', function () {
        assert.strictEqual ( data.name, 'IEMobile' );
      } );

      it ( 'Version should be «11.0»', function () {
        assert.strictEqual ( data.version, '11.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «7.0»', function () {
        assert.strictEqual ( data.coreVersion, '7.0' );
      } );

      it ( 'OS should be «Windows Phone 8.1»', function () {
        assert.strictEqual ( data.os, 'Windows Phone 8.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 10 tests
   */
  describe ( 'Version 10', function () {

    describe ( '[Desktop] Windows NT 6.2 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie10.desktop.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie10.desktop.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie10.desktop.emulator );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «10.0»', function () {
        assert.strictEqual ( data.version, '10.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «6.0»', function () {
        assert.strictEqual ( data.coreVersion, '6.0' );
      } );

      it ( 'OS should be «Windows NT 6.2»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.2' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 8.0 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie10.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie10.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie10.mobile.emulator );
      } );

      it ( 'Name should be «IEMobile»', function () {
        assert.strictEqual ( data.name, 'IEMobile' );
      } );

      it ( 'Version should be «10.0»', function () {
        assert.strictEqual ( data.version, '10.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «6.0»', function () {
        assert.strictEqual ( data.coreVersion, '6.0' );
      } );

      it ( 'OS should be «Windows Phone 8.0»', function () {
        assert.strictEqual ( data.os, 'Windows Phone 8.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Game Platform] Xbox One (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie10.gamePlatforms.emulatorXboxOne );
      } );

      it ( 'User Agent should be «' + userAgents.ie10.gamePlatforms.emulatorXboxOne + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie10.gamePlatforms.emulatorXboxOne );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «10.0»', function () {
        assert.strictEqual ( data.version, '10.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «6.0»', function () {
        assert.strictEqual ( data.coreVersion, '6.0' );
      } );

      it ( 'OS should be «Windows NT 6.2»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.2' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «Xbox One»', function () {
        assert.strictEqual ( data.gamePlatform, 'Xbox One' );
      } );

    } );

  } );

  /**
   * Internet Explorer 9 tests
   */
  describe ( 'Version 9', function () {

    describe ( '[Desktop] Windows NT 6.1 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie9.desktop.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie9.desktop.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie9.desktop.emulator );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «9.0»', function () {
        assert.strictEqual ( data.version, '9.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «5.0»', function () {
        assert.strictEqual ( data.coreVersion, '5.0' );
      } );

      it ( 'OS should be «Windows NT 6.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone 7.5 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie9.mobile.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie9.mobile.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie9.mobile.emulator );
      } );

      it ( 'Name should be «IEMobile»', function () {
        assert.strictEqual ( data.name, 'IEMobile' );
      } );

      it ( 'Version should be «9.0»', function () {
        assert.strictEqual ( data.version, '9.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «5.0»', function () {
        assert.strictEqual ( data.coreVersion, '5.0' );
      } );

      it ( 'OS should be «Windows Phone OS 7.5»', function () {
        assert.strictEqual ( data.os, 'Windows Phone OS 7.5' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Game Platform] Xbox 360 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie9.gamePlatforms.emulatorXbox360 );
      } );

      it ( 'User Agent should be «' + userAgents.ie9.gamePlatforms.emulatorXbox360 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie9.gamePlatforms.emulatorXbox360 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «9.0»', function () {
        assert.strictEqual ( data.version, '9.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «5.0»', function () {
        assert.strictEqual ( data.coreVersion, '5.0' );
      } );

      it ( 'OS should be «Windows NT 6.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «Xbox 360»', function () {
        assert.strictEqual ( data.gamePlatform, 'Xbox 360' );
      } );

    } );

  } );

  /**
   * Internet Explorer 8 tests
   */
  describe ( 'Version 8', function () {

    describe ( '[Desktop] Windows NT 6.1 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie8.desktop.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie8.desktop.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie8.desktop.emulator );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «8.0»', function () {
        assert.strictEqual ( data.version, '8.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «4.0»', function () {
        assert.strictEqual ( data.coreVersion, '4.0' );
      } );

      it ( 'OS should be «Windows NT 6.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 7 tests
   */
  describe ( 'Version 7', function () {

    describe ( '[Desktop] Windows NT 6.0 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie7.desktop.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie7.desktop.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie7.desktop.emulator );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «7.0»', function () {
        assert.strictEqual ( data.version, '7.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 6.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows Phone OS 7.0 (Nokia N70)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie7.mobile.devices.nokiaN70 );
      } );

      it ( 'User Agent should be «' + userAgents.ie7.mobile.devices.nokiaN70 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie7.mobile.devices.nokiaN70 );
      } );

      it ( 'Name should be «IEMobile»', function () {
        assert.strictEqual ( data.name, 'IEMobile' );
      } );

      it ( 'Version should be «7.0»', function () {
        assert.strictEqual ( data.version, '7.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «3.1»', function () {
        assert.strictEqual ( data.coreVersion, '3.1' );
      } );

      it ( 'OS should be «Windows Phone OS 7.0»', function () {
        assert.strictEqual ( data.os, 'Windows Phone OS 7.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE (HTC)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie7.mobile.devices.htc );
      } );

      it ( 'User Agent should be «' + userAgents.ie7.mobile.devices.htc + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie7.mobile.devices.htc );
      } );

      it ( 'Name should be «IEMobile»', function () {
        assert.strictEqual ( data.name, 'IEMobile' );
      } );

      it ( 'Version should be «7.11»', function () {
        assert.strictEqual ( data.version, '7.11' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 6 tests
   */
  describe ( 'Version 6', function () {

    describe ( '[Desktop] Windows NT 5.1 (default user agent)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie6.desktop.defaultWin51 );
      } );

      it ( 'User Agent should be «' + userAgents.ie6.desktop.defaultWin51 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie6.desktop.defaultWin51 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «6.0»', function () {
        assert.strictEqual ( data.version, '6.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (emulator)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie6.desktop.emulator );
      } );

      it ( 'User Agent should be «' + userAgents.ie6.desktop.emulator + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie6.desktop.emulator );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «6.0»', function () {
        assert.strictEqual ( data.version, '6.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 5 tests
   */
  describe ( 'Version 5', function () {

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d1 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d1 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d1 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d2 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d2 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d2 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d3 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d3 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d3 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «4.0»', function () {
        assert.strictEqual ( data.coreVersion, '4.0' );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac OS X (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d4 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d4 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d4 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac OS X»', function () {
        assert.strictEqual ( data.os, 'Mac OS X' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d5 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d5 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d5 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 3.1 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d6 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d6 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d6 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 3.1»', function () {
        assert.strictEqual ( data.os, 'Windows 3.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d7 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d7 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d7 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d8 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d8 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d8 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d9 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d9 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d9 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d10 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d10 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d11 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d11 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d11 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d12 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d12 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d12 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d13 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d13 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d13 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d14 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d14 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d14 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d15 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d15 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d15 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d16 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d16 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d16 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d17 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d17 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d17 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d18 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d18 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d18 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d19 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d19 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d19 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d20 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d20 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d20 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d21 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d21 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d21 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d22 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d22 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d22 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d23 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d23 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d23 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d24 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d24 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d24 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d25 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d25 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d25 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d26 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d26 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d26 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d27 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d27 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d27 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d28 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d28 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d28 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d29 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d29 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d29 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d30 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d30 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d30 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d31 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d31 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d31 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d32 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d32 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d32 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d33 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d33 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d33 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d34 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d34 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d34 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d35 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d35 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d35 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d36 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d36 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d36 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d37 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d37 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d37 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.2 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d38 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d38 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d38 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.2»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.2' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.9 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d39 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d39 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d39 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.9»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.9' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 6.0 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d40 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d40 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d40 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «4.0»', function () {
        assert.strictEqual ( data.coreVersion, '4.0' );
      } );

      it ( 'OS should be «Windows NT 6.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d41 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d41 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d41 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d42 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d42 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d42 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d43 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d43 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d43 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d44 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d44 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d44 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d45 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d45 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d45 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d46 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d46 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d46 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d47 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d47 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d47 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d48 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d48 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d48 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d49 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d49 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d49 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d50 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d50 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d50 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0»', function () {
        assert.strictEqual ( data.version, '5.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.0b1)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d51 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d51 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d51 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.0b1»', function () {
        assert.strictEqual ( data.version, '5.0b1' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d52 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d52 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d52 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d53 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d53 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d53 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d54 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d54 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d54 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d55 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d55 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d55 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d56 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d56 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d56 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d57 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d57 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d57 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d58 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d58 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d58 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d59 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d59 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d59 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d60 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d60 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d60 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d61 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d61 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d61 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d62 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d62 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d62 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d63 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d63 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d63 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d64 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d64 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d64 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d65 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d65 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d65 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d66 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d66 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d66 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d67 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d67 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d67 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d68 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d68 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d68 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d69 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d69 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d69 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d70 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d70 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d70 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d71 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d71 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d71 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d72 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d72 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d72 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d73 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d73 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d73 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d74 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d74 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d74 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d75 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d75 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d75 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d76 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d76 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d76 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d77 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d77 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d77 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d78 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d78 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d78 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d79 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d79 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d79 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d80 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d80 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d80 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d81 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d81 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d81 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d82 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d82 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d82 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d83 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d83 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d83 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d84 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d84 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d84 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d85 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d85 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d85 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d86 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d86 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d86 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d87 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d87 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d87 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d88 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d88 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d88 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d89 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d89 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d89 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d90 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d90 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d90 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d91 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d91 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d91 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d92 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d92 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d92 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d93 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d93 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d93 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d94 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d94 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d94 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d95 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d95 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d95 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d96 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d96 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d96 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d97 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d97 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d97 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d98 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d98 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d98 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d99 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d99 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d99 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d100 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d100 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d100 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d101 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d101 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d101 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d102 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d102 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d102 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d103 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d103 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d103 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d104 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d104 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d104 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d105 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d105 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d105 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d106 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d106 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d106 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d107 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d107 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d107 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d108 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d108 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d108 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d109 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d109 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d109 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d110 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d110 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d110 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d111 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d111 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d111 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d112 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d112 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d112 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d113 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d113 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d113 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d114 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d114 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d114 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d115 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d115 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d115 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d116 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d116 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d116 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d117 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d117 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d117 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d118 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d118 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d118 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d119 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d119 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d119 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d120 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d120 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d120 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d121 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d121 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d121 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d122 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d122 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d122 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d123 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d123 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d123 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d124 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d124 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d124 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d125 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d125 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d125 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d126 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d126 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d126 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.01»', function () {
        assert.strictEqual ( data.version, '5.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.05)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d127 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d127 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d127 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.05»', function () {
        assert.strictEqual ( data.version, '5.05' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 3.51 (IE 5.05)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d128 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d128 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d128 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.05»', function () {
        assert.strictEqual ( data.version, '5.05' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 3.51»', function () {
        assert.strictEqual ( data.os, 'Windows NT 3.51' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.05)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d129 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d129 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d129 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.05»', function () {
        assert.strictEqual ( data.version, '5.05' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.12)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d130 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d130 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d130 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.12»', function () {
        assert.strictEqual ( data.version, '5.12' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.13)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d131 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d131 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d131 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.13»', function () {
        assert.strictEqual ( data.version, '5.13' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.14)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d132 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d132 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d132 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.14»', function () {
        assert.strictEqual ( data.version, '5.14' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.15)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d133 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d133 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d133 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.15»', function () {
        assert.strictEqual ( data.version, '5.15' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.16)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d134 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d134 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d134 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.16»', function () {
        assert.strictEqual ( data.version, '5.16' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.17)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d135 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d135 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d135 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.17»', function () {
        assert.strictEqual ( data.version, '5.17' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.17) En', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d136 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d136 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d136 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.17»', function () {
        assert.strictEqual ( data.version, '5.17' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.2)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d137 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d137 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d137 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.2»', function () {
        assert.strictEqual ( data.version, '5.2' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.21)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d138 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d138 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d138 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.21»', function () {
        assert.strictEqual ( data.version, '5.21' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.22)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d139 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d139 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d139 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.22»', function () {
        assert.strictEqual ( data.version, '5.22' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.23)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d140 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d140 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d140 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.23»', function () {
        assert.strictEqual ( data.version, '5.23' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d141 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d141 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d141 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d142 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d142 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d142 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d143 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d143 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d143 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d144 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d144 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d144 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Without Windows (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d145 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d145 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d145 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «undefined»', function () {
        assert.isUndefined ( data.os );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Without Windows With space (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d146 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d146 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d146 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «undefined»', function () {
        assert.isUndefined ( data.os );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d147 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d147 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d147 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d148 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d148 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d148 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d149 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d149 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d149 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d150 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d150 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d150 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d151 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d151 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d151 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d152 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d152 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d152 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d153 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d153 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d153 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d154 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d154 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d154 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d155 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d155 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d155 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d156 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d156 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d156 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d157 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d157 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d157 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d158 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d158 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d158 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d159 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d159 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d159 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d160 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d160 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d160 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d161 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d161 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d161 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d162 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d162 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d162 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d163 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d163 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d163 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d164 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d164 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d164 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d165 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d165 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d165 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d166 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d166 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d166 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d167 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d167 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d167 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d168 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d168 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d168 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d169 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d169 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d169 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d170 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d170 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d170 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d171 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d171 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d171 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d172 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d172 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d172 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d173 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d173 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d173 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d174 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d174 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d174 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d175 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d175 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d175 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d176 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d176 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d176 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d177 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d177 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d177 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d178 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d178 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d178 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d179 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d179 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d179 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d180 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d180 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d180 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d181 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d181 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d181 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d182 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d182 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d182 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d183 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d183 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d183 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d184 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d184 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d184 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d185 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d185 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d185 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d186 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d186 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d186 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d187 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d187 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d187 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d188 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d188 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d188 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d189 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d189 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d189 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d190 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d190 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d190 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d191 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d191 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d191 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d192 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d192 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d192 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d193 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d193 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d193 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d194 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d194 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d194 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d195 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d195 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d195 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d196 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d196 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d196 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d197 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d197 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d197 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d198 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d198 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d198 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d199 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d199 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d199 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d200 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d200 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d200 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d201 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d201 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d201 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d202 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d202 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d202 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d203 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d203 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d203 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d204 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d204 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d204 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d205 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d205 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d205 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d206 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d206 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d206 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d207 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d207 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d207 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d208 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d208 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d208 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d209 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d209 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d209 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d210 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d210 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d210 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d211 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d211 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d211 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d212 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d212 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d212 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d213 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d213 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d213 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d214 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d214 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d214 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d215 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d215 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d215 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d216 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d216 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d216 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d217 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d217 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d217 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d218 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d218 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d218 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d219 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d219 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d219 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d220 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d220 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d220 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d221 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d221 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d221 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d222 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d222 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d222 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d223 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d223 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d223 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d224 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d224 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d224 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows CE (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d225 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d225 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d225 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d226 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d226 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d226 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d227 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d227 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d227 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d228 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d228 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d228 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d229 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d229 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d229 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d230 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d230 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d230 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d231 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d231 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d231 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d232 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d232 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d232 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d233 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d233 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d233 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d234 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d234 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d234 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d235 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d235 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d235 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d236 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d236 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d236 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d237 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d237 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d237 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d238 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d238 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d238 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d239 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d239 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d239 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d240 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d240 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d240 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d241 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d241 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d241 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d242 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d242 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d242 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d243 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d243 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d243 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d244 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d244 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d244 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d245 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d245 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d245 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d246 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d246 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d246 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 4.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d247 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d247 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d247 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 4.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 4.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d248 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d248 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d248 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d249 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d249 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d249 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d250 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d250 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d250 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d251 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d251 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d251 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d252 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d252 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d252 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d253 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d253 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d253 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d254 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d254 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d254 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d255 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d255 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d255 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d256 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d256 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d256 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d257 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d257 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d257 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d258 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d258 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d258 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d259 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d259 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d259 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d260 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d260 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d260 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d261 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d261 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d261 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d262 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d262 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d262 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d263 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d263 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d263 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d264 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d264 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d264 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d265 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d265 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d265 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d266 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d266 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d266 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d267 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d267 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d267 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d268 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d268 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d268 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d269 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d269 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d269 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d270 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d270 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d270 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d271 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d271 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d271 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d272 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d272 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d272 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d273 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d273 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d273 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d274 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d274 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d274 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d275 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d275 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d275 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d276 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d276 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d276 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d277 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d277 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d277 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d278 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d278 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d278 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d279 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d279 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d279 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d280 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d280 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d280 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d281 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d281 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d281 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d282 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d282 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d282 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d283 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d283 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d283 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d284 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d284 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d284 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d285 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d285 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d285 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d286 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d286 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d286 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d287 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d287 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d287 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d288 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d288 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d288 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d289 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d289 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d289 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d290 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d290 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d290 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d291 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d291 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d291 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «4.0»', function () {
        assert.strictEqual ( data.coreVersion, '4.0' );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.2 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d292 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d292 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d292 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.2»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.2' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.2 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d293 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d293 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d293 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «4.0»', function () {
        assert.strictEqual ( data.coreVersion, '4.0' );
      } );

      it ( 'OS should be «Windows NT 5.2»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.2' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.2 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d294 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d294 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d294 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.2»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.2' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.5 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d295 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d295 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d295 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.5»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.5' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 6.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d296 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d296 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d296 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 6.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 6.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d297 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d297 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d297 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 6.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 6.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d298 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d298 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d298 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 6.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 6.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d299 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d299 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d299 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d300 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d300 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d300 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d301 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d301 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d301 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] OS undefined (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d302 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d302 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d302 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «undefined»', function () {
        assert.isUndefined ( data.os );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d303 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d303 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d303 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 5.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d304 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d304 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d304 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5»', function () {
        assert.strictEqual ( data.version, '5.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 5.5b1)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie5.desktop.devices.d305 );
      } );

      it ( 'User Agent should be «' + userAgents.ie5.desktop.devices.d305 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie5.desktop.devices.d305 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «5.5b1»', function () {
        assert.strictEqual ( data.version, '5.5b1' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 4 tests
   */
  describe ( 'Version 4', function () {

    describe ( '[Desktop] Windows 98 (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d1 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d1 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d1 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d2 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d2 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d2 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «undefined»', function () {
        assert.isUndefined ( data.os );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d3 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d3 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d3 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 with .NET (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d4 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d4 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d4 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d5 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d5 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d5 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d6 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d6 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d6 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] WebTV (IE 4.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d7 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d7 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d7 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.0»', function () {
        assert.strictEqual ( data.version, '4.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «undefined»', function () {
        assert.isUndefined ( data.os );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 2000 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d8 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d8 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d8 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 2000»', function () {
        assert.strictEqual ( data.os, 'Windows 2000' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d9 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d9 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d9 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d10 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d10 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d11 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d11 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d11 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d12 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d12 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d12 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98. DigExt (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d13 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d13 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d13 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98. Hotbar 3.0 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d14 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d14 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d14 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d15 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d15 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d15 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Mac_PowerPC (IE 4.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d16 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d16 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d16 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.5»', function () {
        assert.strictEqual ( data.version, '4.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Mac_PowerPC»', function () {
        assert.strictEqual ( data.os, 'Mac_PowerPC' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 98 (IE 4.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d17 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d17 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d17 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.5»', function () {
        assert.strictEqual ( data.version, '4.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 98»', function () {
        assert.strictEqual ( data.os, 'Windows 98' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.1 with .NET (IE 4.5)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.desktop.devices.d18 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.desktop.devices.d18 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.desktop.devices.d18 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.5»', function () {
        assert.strictEqual ( data.version, '4.5' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.1»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d1 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d1 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d1 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. PPC (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d2 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d2 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d2 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. PPC. 240x320 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d3 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d3 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d3 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. PPC-6700 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d4 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d4 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d4 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. Smartphone. 176x220 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d5 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d5 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d5 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. PPC-i830 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d6 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d6 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d6 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. SCH-i320 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d6 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d6 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d6 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. SCH-i830 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d7 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d7 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d7 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. SPH-ip320 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d8 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d8 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d8 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. SPH-ip320 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d9 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d9 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d9 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. SPH-ip830w (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d10 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d10 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d10 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. SCH-i830 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d11 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d11 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d11 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. PPC-i830 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d12 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d12 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d12 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Mobile] Windows CE. Another PPC-i830 (IE 4.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie4.mobile.devices.d13 );
      } );

      it ( 'User Agent should be «' + userAgents.ie4.mobile.devices.d13 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie4.mobile.devices.d13 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «4.01»', function () {
        assert.strictEqual ( data.version, '4.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows CE»', function () {
        assert.strictEqual ( data.os, 'Windows CE' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 3 tests
   */
  describe ( 'Version 3', function () {

    describe ( '[Desktop] Windows 3.1 (IE 3.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d1 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d1 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d1 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.0»', function () {
        assert.strictEqual ( data.version, '3.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 3.1»', function () {
        assert.strictEqual ( data.os, 'Windows 3.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 3.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d2 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d2 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d2 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.0»', function () {
        assert.strictEqual ( data.version, '3.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0 (IE 3.0)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d3 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d3 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d3 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.0»', function () {
        assert.strictEqual ( data.version, '3.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT (IE 3.0B)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d4 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d4 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d4 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.0B»', function () {
        assert.strictEqual ( data.version, '3.0B' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows NT»', function () {
        assert.strictEqual ( data.os, 'Windows NT' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95 (IE 3.01)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d5 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d5 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d5 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.01»', function () {
        assert.strictEqual ( data.version, '3.01' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 3.1 (IE 3.02)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d6 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d6 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d6 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.02»', function () {
        assert.strictEqual ( data.version, '3.02' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 3.1»', function () {
        assert.strictEqual ( data.os, 'Windows 3.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 3.1 (IE 3.03)', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie3.desktop.devices.d7 );
      } );

      it ( 'User Agent should be «' + userAgents.ie3.desktop.devices.d7 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie3.desktop.devices.d7 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «3.03»', function () {
        assert.strictEqual ( data.version, '3.03' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 3.1»', function () {
        assert.strictEqual ( data.os, 'Windows 3.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

  /**
   * Internet Explorer 2 tests
   */
  describe ( 'Version 2', function () {

    describe ( '[Desktop] Windows 3.1', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie2.desktop.devices.d1 );
      } );

      it ( 'User Agent should be «' + userAgents.ie2.desktop.devices.d1 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie2.desktop.devices.d1 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «2.0»', function () {
        assert.strictEqual ( data.version, '2.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 3.1»', function () {
        assert.strictEqual ( data.os, 'Windows 3.1' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows 95', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie2.desktop.devices.d2 );
      } );

      it ( 'User Agent should be «' + userAgents.ie2.desktop.devices.d2 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie2.desktop.devices.d2 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «2.0»', function () {
        assert.strictEqual ( data.version, '2.0' );
      } );

      it ( 'Core should be «undefined»', function () {
        assert.isUndefined ( data.core );
      } );

      it ( 'Core Version should be «undefined»', function () {
        assert.isUndefined ( data.coreVersion );
      } );

      it ( 'OS should be «Windows 95»', function () {
        assert.strictEqual ( data.os, 'Windows 95' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

    describe ( '[Desktop] Windows NT 5.0', function () {
      before ( function () {
        data = lowBrowser ( userAgents.ie2.desktop.devices.d3 );
      } );

      it ( 'User Agent should be «' + userAgents.ie2.desktop.devices.d3 + '»', function () {
        assert.strictEqual ( data.userAgent, userAgents.ie2.desktop.devices.d3 );
      } );

      it ( 'Name should be «IE»', function () {
        assert.strictEqual ( data.name, 'IE' );
      } );

      it ( 'Version should be «2.0»', function () {
        assert.strictEqual ( data.version, '2.0' );
      } );

      it ( 'Core should be «Trident»', function () {
        assert.strictEqual ( data.core, 'Trident' );
      } );

      it ( 'Core Version should be «4.0»', function () {
        assert.strictEqual ( data.coreVersion, '4.0' );
      } );

      it ( 'OS should be «Windows NT 5.0»', function () {
        assert.strictEqual ( data.os, 'Windows NT 5.0' );
      } );

      it ( 'OS Build should be «undefined»', function () {
        assert.isUndefined ( data.osBuild );
      } );

      it ( 'Game Platform should be «undefined»', function () {
        assert.isUndefined ( data.gamePlatform );
      } );

    } );

  } );

} );

describe ( 'Other', function () {

  describe ( 'User Agent is empty', function () {
    before ( function () {
      data = lowBrowser ( '' );
    } );

    it ( 'User Agent should be empty', function () {
      assert.strictEqual ( data.userAgent, '' );
    } );

    it ( 'Name should be «undefined»', function () {
      assert.isUndefined ( data.name );
    } );

    it ( 'Version should be «undefined»', function () {
      assert.isUndefined ( data.version );
    } );

    it ( 'Core should be «undefined»', function () {
      assert.isUndefined ( data.core );
    } );

    it ( 'Core Version should be «undefined»', function () {
      assert.isUndefined ( data.coreVersion );
    } );

    it ( 'OS should be «undefined»', function () {
      assert.isUndefined ( data.os );
    } );

    it ( 'OS Build should be «undefined»', function () {
      assert.isUndefined ( data.osBuild );
    } );

    it ( 'Game Platform should be «undefined»', function () {
      assert.isUndefined ( data.gamePlatform );
    } );

  } );

  describe ( 'Check userAgent argument', function () {

    it ( 'string', function () {
      assert.doesNotThrow ( function () { return lowBrowser ( '' ); } );
    } );

    it ( 'undefined', function () {
      assert.throws ( function () { return lowBrowser ( undefined ); }, TypeError );
    } );

    it ( 'null', function () {
      assert.throws ( function () { return lowBrowser ( null ); }, TypeError );
    } );

    it ( 'boolean', function () {
      assert.throws ( function () { return lowBrowser ( false ); }, TypeError );
    } );

    it ( 'number', function () {
      assert.throws ( function () { return lowBrowser ( 123 ); }, TypeError );
    } );

    it ( 'object#array', function () {
      assert.throws ( function () { return lowBrowser ( [] ); }, TypeError );
    } );

    it ( 'object#object', function () {
      assert.throws ( function () { return lowBrowser ( {} ); }, TypeError );
    } );

  } );

} );
