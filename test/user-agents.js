/**
 * List of user agents
 */
var userAgents = {
    "edge13" : {
        "desktop" : {
            "defaultWin10" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"
        },
        "mobile"  : {
            "emulator" : "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10570"
        }
    },
    "edge12" : {
        "desktop" : {
            "defaultWin10" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240"
        },
        "mobile"  : {
            "emulator" : "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0"
        }
    },
    "ie11"   : {
        "desktop" : {
            "defaultWin10" : "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko",
            "emulator" : "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
        },
        "mobile"  : {
            "emulator" : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"
        }
    },
    "ie10"   : {
        "desktop" : {
            "emulator" : "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"
        },
        "mobile"  : {
            "emulator" : "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch)"
        },
        "gamePlatforms" : {
            "emulatorXboxOne" : "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)"
        }
    },
    "ie9"    : {
        "desktop"       : {
            "emulator" : "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
        },
        "mobile"        : {
            "emulator" : "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)"
        },
        "gamePlatforms" : {
            "emulatorXbox360" : "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)"
        }
    },
    "ie8"    : {
        "desktop" : {
            "emulator" : "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)"
        }
    },
    "ie7"    : {
        "desktop" : {
            "emulator" : "Mozilla/4.0(compatible; MSIE 7.0; Windows NT 6.0)"
        }
    },
    "ie6"    : {
        "desktop" : {
            "defaultWin51" : "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
            "emulator"     : "Mozilla/4.0(compatible; MSIE 6.0; Windows NT 5.1)"
        }
    }
};

if ( typeof exports === 'object' && module !== 'undefined' ) {
    module.exports = userAgents;
}