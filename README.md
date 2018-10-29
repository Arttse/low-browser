# Low Browser
> Internet Explorer and Microsoft Edge browsers definition on JavaScript


## Why?
Sometimes need to define only browsers from Microsoft. Other tools on JavaScript is bloated and slower. Because they seek to support most browsers.


## Features

- Pure, small (about 600 bytes gzip) and [fast](benchmark/).
- Has no dependencies.
- Focused only on Microsoft browsers.
- Exports as [UMD](#umd): Browser (global), AMD, CommonJS.
- Exports as [ES Module](#es-module).
- Has [types](#types) for TypeScript.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [ES Module](#es-module)
  - [UMD](#umd)
    - [Browser (global)](#browser-global)
    - [AMD](#amd)
    - [CommonJS](#commonjs)
  - [Types](#types)
- [Data object](#data-object)
  - [userAgent](#useragent)
  - [name](#name)
  - [version](#version)
  - [core](#core)
  - [coreVersion](#coreversion)
  - [os](#os)
  - [osBuild](#osbuild)
  - [gamePlatform](#gameplatform)
- [Tests](#tests)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Install

```sh
$ yarn add low-browser
```

OR get it in https://unpkg.com/low-browser@0.3/dist/


## Usage
> Function parses given user agent string and returns data object

### ES Module
> Can be downloaded from https://unpkg.com/low-browser@0.3/dist/low-browser.esm.min.js

```javascript
import lowBrowser from './low-browser.esm.min.js'
//...
const {name, version} = lowBrowser('some user agent string')

if (name === 'IE' && version === '8.0') {
  // do something
}
```

### UMD
> Can be downloaded from https://unpkg.com/low-browser@0.3/dist/low-browser.umd.min.js

#### Browser (global)
```javascript
var data = lowBrowser('some user agent string')

if (data.name === 'IE' && data.version === '8.0') {
  // do something
}
```

#### AMD
```javascript
define('your-module', ['low-browser'], function (lowBrowser) {
  var data = lowBrowser('some user agent string')

  if (data.name === 'IE' && data.version === '8.0') {
    // do something
  }
})
```

#### CommonJS
```javascript
const lowBrowser = require('low-browser')
//...
const {name, version} = lowBrowser('some user agent string')

if (name === 'IE' && version === '8.0') {
  // do something
}
```

### Types
> For TypeScript. Included in package. Can be downloaded from https://unpkg.com/low-browser@0.3/dist/low-browser.d.ts


## Data object
> Returns data object after parsing given user agent string

### userAgent
> Input user agent string

Type: `string`

### name
> Browser name

Type: `string`  
May be `Edge`, `IE`, `IEMobile`

### version
> Browser version

Type: `string`  
Example: `5.5b1`

### core
> Browser core name

Type: `string`  
May be `EdgeHTML` or `Trident`.

### coreVersion
> Browser core version

Type: `string`  
Example: `4.0b1`

### os
> Operating System

Type: `string`  
Example: `Windows NT 10.0`

### osBuild
> Operating System Build Number  
> Only for Microsoft Edge browser

Type: `number`  
Example: `16299`

### gamePlatform
> Game Platform

Type: `string`  
May be `Xbox 360` or `Xbox One`


## Tests
```sh
# Clone repository
$ git clone https://github.com/Arttse/low-browser.git && cd low-browser/

# Install all dependencies
$ yarn

# Run tests
$ yarn run test
```

## License
[MIT](LICENSE) &copy; 2015-2018 Nikita Bystrov (Arttse)
