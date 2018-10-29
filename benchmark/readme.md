# Low Browser Benchmark
> Using [benchmark](https://www.npmjs.com/package/benchmark) for race.  
> Using user agents only Microsoft Edge and Internet Explorer browsers.

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
$ npm start
```

Last results:
```sh
User agents count: 83

express-useragent x 916 ops/sec ±3.46% (91 runs sampled)
koopa x 2,600 ops/sec ±1.37% (94 runs sampled)
low-browser x 6,002 ops/sec ±0.99% (92 runs sampled)
platform x 44.96 ops/sec ±1.48% (59 runs sampled)
ua-parser x 648 ops/sec ±0.20% (94 runs sampled)
ua-parser-js x 562 ops/sec ±0.96% (93 runs sampled)
ua_parser x 1,854 ops/sec ±0.49% (95 runs sampled)
useragent x 173 ops/sec ±0.13% (86 runs sampled)
useragent-parser x 331 ops/sec ±0.68% (91 runs sampled)
useragent_parser x 537 ops/sec ±0.39% (91 runs sampled)

Fastest is low-browser
```
