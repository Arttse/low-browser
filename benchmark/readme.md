# Low Browser Benchmark
> Using [benchmark](https://www.npmjs.com/package/benchmark) for race.  
> Using [user agents](../test/user-agents.js) only browsers Microsoft.

## List of participating

- [express-useragent](https://www.npmjs.com/package/express-useragent)
- [koopa](https://www.npmjs.com/package/koopa)
- [low-browser](https://www.npmjs.com/package/low-browser)
- [platform](https://www.npmjs.com/package/platform)
- [ua-parser](https://www.npmjs.com/package/ua-parser)
- [ua-parser-js](https://www.npmjs.com/package/ua-parser-js)
- [ua_parser](https://www.npmjs.com/package/ua_parser)
- [useragent](https://www.npmjs.com/package/useragent)
- [useragent-parser](https://www.npmjs.com/package/useragent-parser)
- [useragent_parser](https://www.npmjs.com/package/useragent_parser)


## Prepare

```sh
# Clone repository
$ git clone https://github.com/Arttse/low-browser.git && cd low-browser/benchmark/

# Install all modules
$ npm i
```

## Parse user agent
> The correct parse `user agent` string for other modules is not checked. You can [run tests](../README.md#tests) and check correct parse for `low-browser`.

Run benchmark:
```sh
$ node parse.js
```

Last results:
```sh
User agents count: 367

express-useragent x 115 ops/sec ±1.47% (75 runs sampled)
koopa x 376 ops/sec ±0.97% (87 runs sampled)
low-browser x 769 ops/sec ±0.53% (90 runs sampled)
platform x 12.58 ops/sec ±0.27% (35 runs sampled)
ua-parser x 109 ops/sec ±0.28% (77 runs sampled)
ua-parser-js x 105 ops/sec ±1.41% (75 runs sampled)
ua_parser x 345 ops/sec ±0.44% (88 runs sampled)
useragent x 48.93 ops/sec ±0.24% (63 runs sampled)
useragent-parser x 60.55 ops/sec ±0.96% (62 runs sampled)
useragent_parser x 74.85 ops/sec ±0.57% (74 runs sampled)

Fastest is low-browser
```

## Contribute
Feel free to add new modules for race.