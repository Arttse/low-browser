# Low Browser

[![GitHub version](https://badge.fury.io/gh/Arttse%2Flow-browser.svg)](https://github.com/Arttse/low-browser/releases/latest)
[![npm version](https://badge.fury.io/js/low-browser.svg)](https://www.npmjs.com/package/low-browser)
[![Bower version](https://badge.fury.io/bo/low-browser.svg)](http://bower.io/search/?q=low-browser)
[![Build Status](https://travis-ci.org/Arttse/low-browser.svg)](https://travis-ci.org/Arttse/low-browser)
[![Coverage Status](https://coveralls.io/repos/github/Arttse/low-browser/badge.svg?branch=master)](https://coveralls.io/github/Arttse/low-browser?branch=master)

> Low Browser it is a small tool to definition Microsoft browsers (IE and EDGE) on JavaScript


## Why?
Sometimes need to define only browsers from Microsoft. Other tools on JavaScript is bloated and slower. Because they seek to support most browsers.


## Features

- Pure, small and [fast](https://github.com/Arttse/low-browser/tree/master/benchmark).
- Anything extra.
- Has no dependencies.
- Focused only on Microsoft browsers.
- Supports [UMD](https://github.com/umdjs/umd): Browser (globals), AMD, CommonJS.
- Written around 3000 tests. Coverage up to 100%.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Install](#install)
  - [NPM](#npm)
  - [Bower](#bower)
- [Usage](#usage)
  - [Browser (globals)](#browser-globals)
  - [AMD](#amd)
  - [CommonJS](#commonjs)
- [What you get](#what-you-get)
  - [Browser Name](#browser-name)
  - [Browser Version](#browser-version)
  - [Browser Core](#browser-core)
  - [Browser Core Version](#browser-core-version)
  - [Operating System](#operating-system)
  - [Operating System Build Number](#operating-system-build-number)
  - [Game Platforms](#game-platforms)
- [Functions](#functions)
  - [parse](#parse)
- [Tests](#tests)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Install

### NPM
```bash
npm install low-browser --save
```

### Bower
```bash
bower install low-browser --save
```


## Usage

### Browser (globals)

- Include script
  ```html
  <script src="low-browser.min.js"></script>
  ```
  OR with a fast CDN
  ```html
  <script src="https://unpkg.com/low-browser/low-browser.min.js"></script>
  ```

- Work with script
  ```javascript
  //...
  // If IE version 8.0
  if ( lowBrowser.version === '8.0' ) {
    // Do something
  }
  //...
  ```

### AMD
> In [Asynchronous Module Definition](https://github.com/amdjs/amdjs-api) need to use function [parse](#parse)

```javascript
define ( 'your-module', ['low-browser'], function ( lowBrowser ) {
  // Parse user agent string
  lowBrowser.parse ( navigator.userAgent );

  // If IE version 8.0
  if ( lowBrowser.version === '8.0' ) {
    // Do something
  }
} );
```

### CommonJS
> Low browser can be used as CommonJS module

```javascript
var lowBrowser = require ( 'low-browser' ).parse ( userAgent );

// If IE version 8.0
if ( lowBrowser.version === '8.0' ) {
  // Do something
}
```


## What you get

### Browser Name

May be `IE` or `Edge`.

```javascript
lowBrowser.name
```

### Browser Version

```javascript
lowBrowser.version
```

### Browser Core

May be `Trident` or `EdgeHTML`.

```javascript
lowBrowser.core
```

### Browser Core Version

```javascript
lowBrowser.coreVersion
```

### Operating System

```javascript
lowBrowser.os
```

### Operating System Build Number

Only for `Edge`.

```javascript
lowBrowser.osBuild
```

### Game Platforms

May be `Xbox 360` or `Xbox One`.

```javascript
lowBrowser.gamePlatform
```

## Functions

### parse

Parses a string of user browser. After that, you can get the information of browser.
This function runs automatically if you want use this script on client side (not AMD).

```javascript
lowBrowser.parse ( userAgent );
```

Where `userAgent` — string of user agent browser

## Tests

- Prepare
  ```sh
  # Clone repository
  $ git clone https://github.com/Arttse/low-browser.git && cd low-browser/
  
  # Install gulp globally
  $ npm i -g gulp
  
  # Install all dependencies for tests
  $ npm i
  ```
  
- Run tests for node.js
  ```sh
  $ gulp test.node
  ```
  
- Run tests for browser
  ```sh
  $ gulp test.browser
  ```
  
- Run all tests
  ```sh
  $ gulp tests
  ```

## License
[MIT](http://www.opensource.org/licenses/mit-license.php) &copy; 2015-2016 Nikita «Arttse» Bystrov