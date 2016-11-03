# Low Browser Benchmark
> Using [benchmark](https://www.npmjs.com/package/benchmark) for race.  
> Using [user agents](../test/user-agents.js) only browsers Microsoft.

## List of participating

- [express-useragent](https://www.npmjs.com/package/express-useragent)
- [koopa](https://www.npmjs.com/package/koopa)
- [low-browser](https://www.npmjs.com/package/low-browser)
- [platform](https://www.npmjs.com/package/platform)
- [ua-parser](https://www.npmjs.com/package/ua-parser)
- [ua_parser](https://www.npmjs.com/package/ua_parser)
- [user-agent-parser](https://www.npmjs.com/package/user-agent-parser)
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
> Run `node parse.js` for start test.
>
> The correct parse `user agent` string for other modules is not checked. You can [run tests](../README.md#tests) and check correct parse for `low-browser`.

Last results:
```sh
User agents count: 367

express-useragent x 114 ops/sec ±1.46% (73 runs sampled)
koopa x 379 ops/sec ±0.82% (88 runs sampled)
low-browser x 729 ops/sec ±0.54% (90 runs sampled)
platform x 12.31 ops/sec ±0.74% (34 runs sampled)
ua-parser x 107 ops/sec ±0.42% (76 runs sampled)
ua_parser x 337 ops/sec ±0.84% (86 runs sampled)
user-agent-parser x 139 ops/sec ±1.74% (76 runs sampled)
useragent x 48.69 ops/sec ±0.51% (62 runs sampled)
useragent-parser x 59.22 ops/sec ±0.33% (60 runs sampled)
useragent_parser x 73.60 ops/sec ±1.23% (73 runs sampled)

Fastest is low-browser
```

## Contribute
Feel free to add new modules for race.