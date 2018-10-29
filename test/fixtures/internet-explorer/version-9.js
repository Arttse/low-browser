module.exports = [
  {
    name: 'Windows NT 6.1 (emulator)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
      name: 'IE',
      version: '9.0',
      core: 'Trident',
      coreVersion: '5.0',
      os: 'Windows NT 6.1',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone OS 7.5 (emulator)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
      name: 'IEMobile',
      version: '9.0',
      core: 'Trident',
      coreVersion: '5.0',
      os: 'Windows Phone OS 7.5',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows NT 6.1 (emulator Xbox 360)',
    device: 'game-platform',
    expected: {
      userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)',
      name: 'IE',
      version: '9.0',
      core: 'Trident',
      coreVersion: '5.0',
      os: 'Windows NT 6.1',
      osBuild: undefined,
      gamePlatform: 'Xbox 360',
    },
  },
]
