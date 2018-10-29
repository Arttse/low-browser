module.exports = [
  {
    name: 'Windows NT 5.1 (default)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
      name: 'IE',
      version: '6.0',
      core: undefined,
      coreVersion: undefined,
      os: 'Windows NT 5.1',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows NT 5.1 (emulator)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/4.0(compatible; MSIE 6.0; Windows NT 5.1)',
      name: 'IE',
      version: '6.0',
      core: undefined,
      coreVersion: undefined,
      os: 'Windows NT 5.1',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
]
