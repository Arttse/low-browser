module.exports = [
  {
    name: 'Windows NT 10.0 (default)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko',
      name: 'IE',
      version: '11.0',
      core: 'Trident',
      coreVersion: '7.0',
      os: 'Windows NT 10.0',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows NT 6.3 (emulator)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
      name: 'IE',
      version: '11.0',
      core: 'Trident',
      coreVersion: '7.0',
      os: 'Windows NT 6.3',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone 8.1 (emulator Nokia Lumia 520)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537',
      name: 'IEMobile',
      version: '11.0',
      core: 'Trident',
      coreVersion: '7.0',
      os: 'Windows Phone 8.1',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
]
