# Buffer-Horspool

## Note

Node's builtin [`buffer.indexOf()`] and [typed array `.indexOf()`] are way
faster than this nowadays – this was originally written before either of those
existed, so you probably don't want to use this, unless you know you need it.

[`buffer.indexOf()`]: https://nodejs.org/api/buffer.html#buffer_buf_indexof_value_byteoffset_encoding
[typed array `.indexOf()`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf

## What is this?

A simple implementation of the [Boyer-Moore-Horspool string search algorithm] for use with `Buffer`s or `Uint8Array`s.

[Boyer-Moore-Horspool string search algorithm]: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm

## Why is this?

I needed it for one of my projects in the days before `buffer.indexOf()` existed, wrote a [gist](https://gist.github.com/jhermsmeier/2138865),
others kept finding it useful, so now it's on [npm](https://www.npmjs.com/package/buffer-horspool).

Shoutout to [@dubiousjim](https://github.com/dubiousjim) for finding a bug in the original gist!

## Installation

```console
$ npm install --save buffer-horspool
```

## Usage

```js
var horspool = require( 'buffer-horspool' )
```

Just like the native `.indexOf()` methods, given a haystack and a needle,
either the index at which the substring is found is returned, otherwise `-1`:

```js
var index = horspool.indexOf( haystack: Buffer|Uint8Array, needle: Buffer|Uint8Array, startOffset: Number )
```
