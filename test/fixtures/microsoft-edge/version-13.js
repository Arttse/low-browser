module.exports = [
  {
    name: 'Windows NT 10.0 (default user agent)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
      name: 'Edge',
      version: '13',
      core: 'EdgeHTML',
      coreVersion: '13.10586',
      os: 'Windows NT 10.0',
      osBuild: 10586,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone 10.0 (emulator)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10570',
      name: 'Edge',
      version: '13',
      core: 'EdgeHTML',
      coreVersion: '13.10570',
      os: 'Windows Phone 10.0',
      osBuild: 10570,
      gamePlatform: undefined,
    },
  },
]
