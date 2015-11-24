# Low Browser

> Low Browser it is a small tool to check Microsoft browsers (IE and EDGE) on JavaScript

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

For All.

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

### init
You can initialize script with your userAgent string.
This function runs automatically for current browser.

```javascript
lowBrowser.init( userAgent );
```