module.exports = [
  {
    name: 'Windows NT 10.0 (default user agent)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240',
      name: 'Edge',
      version: '12',
      core: 'EdgeHTML',
      coreVersion: '12.10240',
      os: 'Windows NT 10.0',
      osBuild: 10240,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone 10.0 (emulator)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0',
      name: 'Edge',
      version: '12',
      core: 'EdgeHTML',
      coreVersion: '12.0',
      os: 'Windows Phone 10.0',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
]
