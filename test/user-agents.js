/**
 * List of user agents
 */
var userAgents = {
  "edge14" : {
    "desktop" : {
      "defaultWin10" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393"
    },
    "mobile"  : {
      "emulator" : "Mozilla/5.0 (Windows Phone 10.0;  Android 6.0.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Mobile Safari/537.36 Edge/14.14348"
    }
  },
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
      "emulator"     : "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
    },
    "mobile"  : {
      "emulator" : "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"
    }
  },
  "ie10"   : {
    "desktop"       : {
      "emulator" : "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"
    },
    "mobile"        : {
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
    },
    "mobile"  : {
      "devices" : {
        "nokiaN70" : "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Nokia;N70)",
        "htc"      : "HTC_Touch_3G Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)"
      }
    }
  },
  "ie6"    : {
    "desktop" : {
      "defaultWin51" : "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
      "emulator"     : "Mozilla/4.0(compatible; MSIE 6.0; Windows NT 5.1)"
    }
  },
  "ie5"    : {
    "desktop" : {
      "devices" : {
        "d1"   : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Wanadoo 5.3)",
        "d2"   : "Mozilla/2.0 (compatible; MSIE 5.0; Windows 98)",
        "d3"   : "Mozilla/3.0 (compatible; MSIE 5.0; Windows NT 5.1; Trident/4.0; Media Center PC 3.1; .NET CLR 3.0.04506.30)",
        "d4"   : "Mozilla/4.0 (compatible; MSIE 5.0; Mac OS X)",
        "d5"   : "Mozilla/4.0 (compatible; MSIE 5.0; Mac_PowerPC)",
        "d6"   : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)",
        "d7"   : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 95)",
        "d8"   : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 95; DigExt)",
        "d9"   : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 95; DigExt; YComp 5.0.0.0)",
        "d10"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 95; DigExt; YComp 5.0.2.4)",
        "d11"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 95; DigExt; YComp 5.0.2.5)",
        "d12"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98)",
        "d13"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)",
        "d14"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; (R1 1.1))",
        "d15"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; (R1 1.3))",
        "d16"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; FDM)",
        "d17"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; FunWebProducts)",
        "d18"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 2.0)",
        "d19"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 4.0)",
        "d20"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 4.1.5.0)",
        "d21"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 4.1.8.0)",
        "d22"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 4.2.4.0)",
        "d23"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 4.2.6.0)",
        "d24"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Hotbar 4.3.5.0)",
        "d25"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; Wanadoo 5.1; Wanadoo 5.3)",
        "d26"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.0.0)",
        "d27"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.0.0; YComp 5.0.2.4)",
        "d28"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.0.0; YComp 5.0.2.4; Hotbar 4.1.7.0)",
        "d29"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.2.4)",
        "d30"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.2.5)",
        "d31"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.2.5; YComp 5.0.0.0)",
        "d32"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.2.6)",
        "d33"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt; YComp 5.0.2.6; yplus 1.0)",
        "d34"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; Hotbar 3.0)",
        "d35"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; YComp 5.0.2.4)",
        "d36"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows 98;)",
        "d37"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 5.0)",
        "d38"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 5.2; .NET CLR 1.1.4322)",
        "d39"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 5.9; .NET CLR 1.1.4322)",
        "d40"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 6.0; Trident/4.0; InfoPath.1; SV1; .NET CLR 3.0.04506.648; .NET4.0C; .NET4.0E)",
        "d41"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT)",
        "d42"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)",
        "d43"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt; .NET CLR 1.0.3705)",
        "d44"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt; Hotbar 3.0)",
        "d45"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt; Hotbar 4.1.8.0)",
        "d46"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt; YComp 5.0.0.0)",
        "d47"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt; YComp 5.0.2.5)",
        "d48"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt; YComp 5.0.2.6)",
        "d49"  : "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT;)",
        "d50"  : "Mozilla/4.0(compatible; MSIE 5.0; Windows 98; DigExt)",
        "d51"  : "Mozilla/4.0 (compatible; MSIE 5.0b1; Mac_PowerPC)",
        "d52"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; DigExt; YComp 5.0.0.0)",
        "d53"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.1.7.0)",
        "d54"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 95)",
        "d55"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 95; YComp 5.0.2.5)",
        "d56"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 95; YComp 5.0.2.6)",
        "d57"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98)",
        "d58"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; (R1 1.3))",
        "d59"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; .NET CLR 1.0.3705)",
        "d60"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; DigExt)",
        "d61"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; FunWebProducts)",
        "d62"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Hotbar 4.1.5.0)",
        "d63"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Hotbar 4.1.8.0)",
        "d64"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Hotbar 4.2.11.0)",
        "d65"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Hotbar 4.2.4.0)",
        "d66"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Hotbar 4.2.6.0)",
        "d67"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Hotbar 4.2.8.0)",
        "d68"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; i-NavFourF)",
        "d69"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; MSIECrawler)",
        "d70"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Wanadoo 5.1)",
        "d71"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; Wanadoo 5.3)",
        "d72"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; YComp 5.0.0.0)",
        "d73"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; YComp 5.0.0.0; (R1 1.1))",
        "d74"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; YComp 5.0.2.4)",
        "d75"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; YComp 5.0.2.5)",
        "d76"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows 98; YComp 5.0.2.6)",
        "d77"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)",
        "d78"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; (R1 1.1))",
        "d79"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; (R1 1.5); .NET CLR 1.1.4322)",
        "d80"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 1.0.2914)",
        "d81"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
        "d82"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 1.1.4322)",
        "d83"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
        "d84"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.1)",
        "d85"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 2.0.50727)",
        "d86"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 1.1.4322)",
        "d87"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Alexa Toolbar)",
        "d88"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; DigExt)",
        "d89"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; DigExt; Hotbar 4.1.8.0)",
        "d90"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; DigExt; YComp 5.0.2.4)",
        "d91"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; FunWebProducts)",
        "d92"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; HbTools 4.7.1)",
        "d93"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 2.0)",
        "d94"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 3.0)",
        "d95"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.1.4.0)",
        "d96"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.1.8.0)",
        "d97"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.2.1.1198)",
        "d98"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.2.13.0)",
        "d99"  : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.2.4.0)",
        "d100" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.2.8.0)",
        "d101" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.2.8.0; (R1 1.3))",
        "d102" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.2.9.0)",
        "d103" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.3.2.0)",
        "d104" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Hotbar 4.3.5.0)",
        "d105" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; iebar)",
        "d106" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; iOpus-I-M)",
        "d107" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; MSIECrawler)",
        "d108" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Q312461)",
        "d109" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Q312461; T312461)",
        "d110" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; SV1)",
        "d111" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; SV1; .NET CLR 1.1.4322; .NET CLR 1.0.3705; .NET CLR 2.0.50727)",
        "d112" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Wanadoo 5.1)",
        "d113" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Wanadoo 5.3; Wanadoo 5.5)",
        "d114" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; Wanadoo 5.6)",
        "d115" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.0.0)",
        "d116" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.0.0; Hotbar 4.1.8.0)",
        "d117" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.2.4)",
        "d118" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.2.6)",
        "d119" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.2.6; Hotbar 3.0)",
        "d120" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.2.6; Hotbar 4.2.8.0)",
        "d121" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.2.6; MSIECrawler)",
        "d122" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT)",
        "d123" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT; .NET CLR 1.0.3705)",
        "d124" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT; DigExt)",
        "d125" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT; Hotbar 4.1.8.0)",
        "d126" : "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT; YComp 5.0.0.0)",
        "d127" : "Mozilla/4.0 (compatible; MSIE 5.05; Windows 98; .NET CLR 1.1.4322)",
        "d128" : "Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 3.51)",
        "d129" : "Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 4.0)",
        "d130" : "Mozilla/4.0 (compatible; MSIE 5.12; Mac_PowerPC)",
        "d131" : "Mozilla/4.0 (compatible; MSIE 5.13; Mac_PowerPC)",
        "d132" : "Mozilla/4.0 (compatible; MSIE 5.14; Mac_PowerPC)",
        "d133" : "Mozilla/4.0 (compatible; MSIE 5.15; Mac_PowerPC)",
        "d134" : "Mozilla/4.0 (compatible; MSIE 5.16; Mac_PowerPC)",
        "d135" : "Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC)",
        "d136" : "Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)",
        "d137" : "Mozilla/4.0 (compatible; MSIE 5.2; Mac_PowerPC)",
        "d138" : "Mozilla/4.0 (compatible; MSIE 5.21; Mac_PowerPC)",
        "d139" : "Mozilla/4.0 (compatible; MSIE 5.22; Mac_PowerPC)",
        "d140" : "Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC)",
        "d141" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.5)",
        "d142" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 4.1.5.0)",
        "d143" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; MSIECrawler)",
        "d144" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Q312461)",
        "d145" : "Mozilla/4.0 (compatible; MSIE 5.5)",
        "d146" : "Mozilla/4.0 (compatible; MSIE 5.5; )",
        "d147" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)",
        "d148" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; Hotbar 3.0)",
        "d149" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; Hotbar 4.0)",
        "d150" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; i-NavFourF)",
        "d151" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; T312461)",
        "d152" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; T312461; YComp 5.0.2.6)",
        "d153" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; YComp 5.0.0.0)",
        "d154" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; YComp 5.0.2.6)",
        "d155" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98)",
        "d156" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; (R1 1.1))",
        "d157" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; (R1 1.3))",
        "d158" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; .NET CLR 1.0.3705)",
        "d159" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
        "d160" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; .NET CLR 1.1.4322)",
        "d161" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Alexa Toolbar)",
        "d162" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; DigExt)",
        "d163" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; FunWebProducts)",
        "d164" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 2.0)",
        "d165" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 3.0)",
        "d166" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 4.0)",
        "d167" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 4.0; YComp 5.0.2.6)",
        "d168" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 4.1.8.0)",
        "d169" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 4.2.8.0)",
        "d170" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Hotbar 4.3.5.0)",
        "d171" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; MSIECrawler)",
        "d172" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; T312461; .NET CLR 1.1.4322)",
        "d173" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; T312461; i-NavFourF)",
        "d174" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; T312461; YComp 5.0.0.0; .NET CLR 1.0.3705)",
        "d175" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.1; Wanadoo 5.3; Wanadoo 5.5)",
        "d176" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.2)",
        "d177" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.2; Wanadoo 5.3)",
        "d178" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.2; Wanadoo 5.5)",
        "d179" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.3)",
        "d180" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.3; Wanadoo 5.5)",
        "d181" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.4)",
        "d182" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.5)",
        "d183" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.5; Hotbar 4.2.8.0)",
        "d184" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 5.6)",
        "d185" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 6.1)",
        "d186" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 6.2)",
        "d187" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Wanadoo 6.7)",
        "d188" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)",
        "d189" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; (R1 1.3))",
        "d190" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; (R1 1.3); .NET CLR 1.0.3705)",
        "d191" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; .NET CLR 1.0.3705)",
        "d192" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; .NET CLR 1.1.4322)",
        "d193" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; FunWebProducts)",
        "d194" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; FunWebProducts; SpamBlockerUtility 4.6.1)",
        "d195" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; HbTools 4.7.1)",
        "d196" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 3.0)",
        "d197" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 4.0)",
        "d198" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 4.1.2.0)",
        "d199" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 4.1.8.0)",
        "d200" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 4.2.4.0)",
        "d201" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 4.2.6.0)",
        "d202" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Hotbar 4.2.8.0)",
        "d203" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; iOpus-I-M)",
        "d204" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; MSIECrawler)",
        "d205" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Q312461)",
        "d206" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; T312461)",
        "d207" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.1; Wanadoo 5.3; Wanadoo 5.5)",
        "d208" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.1; Wanadoo 6.1)",
        "d209" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.2; Wanadoo 5.5)",
        "d210" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.3)",
        "d211" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.3; Wanadoo 5.5)",
        "d212" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 5.6)",
        "d213" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 6.7)",
        "d214" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; Wanadoo 7.1; .NET CLR 1.1.4322)",
        "d215" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; YComp 5.0.0.0)",
        "d216" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; YComp 5.0.2.4)",
        "d217" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; YComp 5.0.2.4; Hotbar 4.3.1.0)",
        "d218" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; YComp 5.0.2.5)",
        "d219" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90; YComp 5.0.2.6)",
        "d220" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; YComp 5.0.0.0)",
        "d221" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; YComp 5.0.0.0; Hotbar 4.3.1.0)",
        "d222" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; YComp 5.0.2.4)",
        "d223" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; YComp 5.0.2.5)",
        "d224" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; YComp 5.0.2.6)",
        "d225" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows CE)",
        "d226" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0)",
        "d227" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; (R1 1.3))",
        "d228" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; .NET CLR 1.0.3705)",
        "d229" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; .NET CLR 1.1.4322)",
        "d230" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; DigExt; Hotbar 4.1.8.0)",
        "d231" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; DigExt; T312461)",
        "d232" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; FunWebProducts)",
        "d233" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; Hotbar 2.0)",
        "d234" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; Hotbar 4.1.8.0)",
        "d235" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; Hotbar 4.2.8.0)",
        "d236" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; Hotbar 4.3.1.0)",
        "d237" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; MSIECrawler)",
        "d238" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; Q312461)",
        "d239" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; T312461)",
        "d240" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; T312461; (R1 1.1))",
        "d241" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; T312461; (R1 1.3))",
        "d242" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; T312461; .NET CLR 1.1.4322)",
        "d243" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; T312461; YComp 5.0.0.0)",
        "d244" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; YComp 5.0.0.0)",
        "d245" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; YComp 5.0.0.0; .NET CLR 1.0.3705)",
        "d246" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; YComp 5.0.2.4)",
        "d247" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; YComp 5.0.2.6)",
        "d248" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0 )",
        "d249" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)",
        "d250" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; (R1 1.1))",
        "d251" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; (R1 1.3))",
        "d252" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; (R1 1.5))",
        "d253" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; .NET CLR 1.0.3705)",
        "d254" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; .NET CLR 1.1.4322)",
        "d255" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; .NET CLR 1.1.4322; InfoPath.1)",
        "d256" : "Mozilla/4.0 (Compatible; MSIE 5.5; Windows NT 5.0; .NET CLR 2.0.50727; .NET CLR 1.1.4322; InfoPath.2; .NET CLR 3.0.04506.30; MS-RTC LM 8; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)",
        "d257" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; DigExt)",
        "d258" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 3.0)",
        "d259" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 3.0; T312461)",
        "d260" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 4.1.8.0)",
        "d261" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 4.2.14.0)",
        "d262" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 4.3.1.0)",
        "d263" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Hotbar 4.4.2.0; FunWebProducts; .NET CLR 1.1.4322)",
        "d264" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; InfoPath.1)",
        "d265" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; PPC; 240x320)",
        "d266" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Q312461; T312461)",
        "d267" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461)",
        "d268" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; .NET CLR 1.0.3705)",
        "d269" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; .NET CLR 1.1.4322)",
        "d270" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; .NET CLR 1.1.4322; InfoPath.1)",
        "d271" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; Hotbar 3.0)",
        "d272" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; Hotbar 4.1.8.0)",
        "d273" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; Hotbar 4.2.3.0)",
        "d274" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; InfoPath.1)",
        "d275" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461; YComp 5.0.2.6)",
        "d276" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Wanadoo 5.5)",
        "d277" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; Wanadoo 5.5; .NET CLR 1.0.3705)",
        "d278" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.0.0)",
        "d279" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.0.0; Hotbar 4.1.8.0)",
        "d280" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.2.4)",
        "d281" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.2.4; (R1 1.1))",
        "d282" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.2.5)",
        "d283" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.2.6)",
        "d284" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; YComp 5.0.2.6; .NET CLR 1.0.3705)",
        "d285" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1)",
        "d286" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
        "d287" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; .NET CLR 2.0.50727)",
        "d288" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 1.1.4322)",
        "d289" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; SV1; .NET CLR 1.1.4322)",
        "d290" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)",
        "d291" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)",
        "d292" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.2; .NET CLR 1.1.4322)",
        "d293" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.2; .NET CLR 1.1.4322) (Compatible; ; ; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
        "d294" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.2; .NET CLR 1.1.4322; InfoPath.2; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; FDM)",
        "d295" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.5)",
        "d296" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30618)",
        "d297" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 6.1; chromeframe/12.0.742.100; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)",
        "d298" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 6.1; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)",
        "d299" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)",
        "d300" : "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT5)",
        "d301" : "Mozilla/4.0 (Compatible; MSIE 5.5; Windows NT5.0; Q312461; SV1; .NET CLR 1.1.4322; InfoPath.2)",
        "d302" : "Mozilla/4.0 (compatible; MSIE 5.5;)",
        "d303" : "Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.1)",
        "d304" : "Mozilla/4.0 (compatible;MSIE 5.5; Windows 98)",
        "d305" : "Mozilla/4.0 (compatible; MSIE 5.5b1; Mac_PowerPC)"
      }
    }
  },
  "ie4"    : {
    "desktop" : {
      "devices" : {
        "d1"  : "Mozilla/2.0 (compatible; MSIE 4.0; Windows 98)",
        "d2"  : "Mozilla/4.0 (Compatible; MSIE 4.0)",
        "d3"  : "Mozilla/4.0 (compatible; MSIE 4.0; Windows 95)",
        "d4"  : "Mozilla/4.0 (compatible; MSIE 4.0; Windows 95; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
        "d5"  : "Mozilla/4.0 (compatible; MSIE 4.0; Windows 98 )",
        "d6"  : "Mozilla/4.0 (compatible; MSIE 4.0; Windows NT)",
        "d7"  : "Mozilla/4.0 WebTV/2.6 (compatible; MSIE 4.0)",
        "d8"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows 2000)",
        "d9"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows NT)",
        "d10" : "Mozilla/4.0 (compatible; MSIE 4.01; Mac_PowerPC)",
        "d11" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows 95)",
        "d12" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows 98)",
        "d13" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows 98; DigExt)",
        "d14" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows 98; Hotbar 3.0)",
        "d15" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows NT 5.0)",
        "d16" : "Mozilla/4.0 (compatible; MSIE 4.5; Mac_PowerPC)",
        "d17" : "Mozilla/4.0 (compatible; MSIE 4.5; Windows 98; )",
        "d18" : "Mozilla/4.0 (compatible; MSIE 4.5; Windows NT 5.1; .NET CLR 2.0.40607)"
      }
    },
    "mobile"  : {
      "devices" : {
        "d1"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE)",
        "d2"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC)",
        "d3"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; PPC)",
        "d4"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; 240x320; Sprint:PPC-6700; PPC; 240x320)",
        "d5"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Smartphone; 176x220)",
        "d6"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:PPC-i830; PPC; 240x320)",
        "d7"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:SCH-i320; Smartphone; 176x220)",
        "d8"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:SCH-i830; PPC; 240x320)",
        "d9"  : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:SPH-ip320; Smartphone; 176x220)",
        "d10" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint:SPH-ip830w; PPC; 240x320)",
        "d11" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint; SCH-i830; PPC; 240x320)",
        "d12" : "Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; Sprint;PPC-i830; PPC; 240x320)",
        "d13" : "Mozilla/4.0 PPC (compatible; MSIE 4.01; Windows CE; PPC; 240x320; Sprint:PPC-6700; PPC; 240x320)"
      }
    }
  },
  "ie3"    : {
    "desktop" : {
      "devices" : {
        "d1" : "Mozilla/2.0 (compatible; MSIE 3.0; Windows 3.1)",
        "d2" : "Mozilla/2.0 (compatible; MSIE 3.0; Windows 95)",
        "d3" : "Mozilla/3.0 (compatible; MSIE 3.0; Windows NT 5.0)",
        "d4" : "Mozilla/2.0 (compatible; MSIE 3.0B; Windows NT)",
        "d5" : "Mozilla/2.0 (compatible; MSIE 3.01; Windows 95)",
        "d6" : "Mozilla/2.0 (compatible; MSIE 3.02; Windows 3.1)",
        "d7" : "Mozilla/2.0 (compatible; MSIE 3.03; Windows 3.1)"
      }
    }
  },
  "ie2"    : {
    "desktop" : {
      "devices" : {
        "d1" : "Mozilla/1.22 (compatible; MSIE 2.0; Windows 3.1)",
        "d2" : "Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)",
        "d3" : "Mozilla/4.0 (compatible; MSIE 2.0; Windows NT 5.0; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)"
      }
    }
  }
};

if ( typeof exports === 'object' && module !== 'undefined' ) {
  module.exports = userAgents;
}
