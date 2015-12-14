# Low Browser

[![GitHub version](https://badge.fury.io/gh/Arttse%2Flow-browser.svg)](https://github.com/Arttse/low-browser/releases/latest)
[![npm version](https://badge.fury.io/js/low-browser.svg)](https://www.npmjs.com/package/low-browser)
[![Bower version](https://badge.fury.io/bo/low-browser.svg)](http://bower.io/search/?q=low-browser)
[![Build Status](https://travis-ci.org/Arttse/low-browser.svg)](https://travis-ci.org/Arttse/low-browser)
[![devDependency Status](https://david-dm.org/Arttse/low-browser/dev-status.svg)](https://david-dm.org/Arttse/low-browser#info=devDependencies)

> Low Browser it is a small tool to check Microsoft browsers (IE and EDGE) on JavaScript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

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
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
lowBrowser.parse( userAgent );
```

Where `userAgent` — string of user agent browser

## License
[MIT](http://www.opensource.org/licenses/mit-license.php) &copy; 2015 Nikita «Arttse» Bystrov