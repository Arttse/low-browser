module.exports = [
  {
    name: 'Windows 3.1 (d1)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/1.22 (compatible; MSIE 2.0; Windows 3.1)',
      name: 'IE',
      version: '2.0',
      core: undefined,
      coreVersion: undefined,
      os: 'Windows 3.1',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows 95 (d2)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)',
      name: 'IE',
      version: '2.0',
      core: undefined,
      coreVersion: undefined,
      os: 'Windows 95',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
  {
    name: 'Windows NT 5.0 (d3)',
    device: 'desktop',
    expected: {
      userAgent: 'Mozilla/4.0 (compatible; MSIE 2.0; Windows NT 5.0; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)',
      name: 'IE',
      version: '2.0',
      core: 'Trident',
      coreVersion: '4.0',
      os: 'Windows NT 5.0',
      osBuild: undefined,
      gamePlatform: undefined,
    },
  },
]
