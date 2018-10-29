module.exports = [
  {
    name: 'Windows NT 10.0 (default user agent)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
      name: 'Edge',
      version: '14',
      core: 'EdgeHTML',
      coreVersion: '14.14393',
      os: 'Windows NT 10.0',
      osBuild: 14393,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows Phone 10.0 (emulator)',
    device: 'mobile',
    expected: {
      userAgent: 'Mozilla/5.0 (Windows Phone 10.0;  Android 6.0.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Mobile Safari/537.36 Edge/14.14348',
      name: 'Edge',
      version: '14',
      core: 'EdgeHTML',
      coreVersion: '14.14348',
      os: 'Windows Phone 10.0',
      osBuild: 14348,
      gamePlatform: undefined,
    },
  },
]
