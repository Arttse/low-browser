module.exports = [
  {
    name: 'Windows NT 6.2 (emulator)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)',
      name: 'IE',
      version: '10.0',
      core: 'Trident',
      coreVersion: '6.0',
      os: 'Windows NT 6.2',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone 8.0 (emulator)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch)',
      name: 'IEMobile',
      version: '10.0',
      core: 'Trident',
      coreVersion: '6.0',
      os: 'Windows Phone 8.0',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows NT 6.2 (emulator Xbox One)',
    device: 'game-platform',
    expected: {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)',
      name: 'IE',
      version: '10.0',
      core: 'Trident',
      coreVersion: '6.0',
      os: 'Windows NT 6.2',
      osBuild: undefined,
      gamePlatform: 'Xbox One',
    },
  },
]
