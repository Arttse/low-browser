module.exports = [
  {
    name: 'Windows NT 10.0 (default user agent)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
      name: 'Edge',
      version: '15',
      core: 'EdgeHTML',
      coreVersion: '15.15063',
      os: 'Windows NT 10.0',
      osBuild: 15063,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone 10.0 (emulator)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows Phone 10.0;  Android 6.0.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15036',
      name: 'Edge',
      version: '15',
      core: 'EdgeHTML',
      coreVersion: '15.15036',
      os: 'Windows Phone 10.0',
      osBuild: 15036,
      gamePlatform: undefined,
    },
  },
]
