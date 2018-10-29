module.exports = [
  {
    name: 'Windows NT 6.0 (emulator)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/4.0(compatible; MSIE 7.0; Windows NT 6.0)',
      name: 'IE',
      version: '7.0',
      core: undefined,
      coreVersion: undefined,
      os: 'Windows NT 6.0',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone OS 7.0 (Nokia N70)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Nokia;N70)',
      name: 'IEMobile',
      version: '7.0',
      core: 'Trident',
      coreVersion: '3.1',
      os: 'Windows Phone OS 7.0',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows CE (htc)',
    device: 'mobile',
    expected: {
      userAgent: 'HTC_Touch_3G Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)',
      name: 'IEMobile',
      version: '7.11',
      core: undefined,
      coreVersion: undefined,
      os: 'Windows CE',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
]
