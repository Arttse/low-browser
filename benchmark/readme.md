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
User agents count: 370

express-useragent x 334 ops/sec ±0.56% (88 runs sampled)
koopa x 1,171 ops/sec ±1.31% (93 runs sampled)
low-browser x 1,623 ops/sec ±0.36% (94 runs sampled)
platform x 18.04 ops/sec ±1.58% (49 runs sampled)
ua-parser x 175 ops/sec ±0.59% (88 runs sampled)
ua-parser-js x 163 ops/sec ±0.44% (83 runs sampled)
ua_parser x 790 ops/sec ±1.15% (92 runs sampled)
useragent x 48.85 ops/sec ±0.80% (64 runs sampled)
useragent-parser x 85.31 ops/sec ±0.57% (73 runs sampled)
useragent_parser x 165 ops/sec ±1.19% (84 runs sampled)

Fastest is low-browser
```

## Contribute
Feel free to add new modules for race.