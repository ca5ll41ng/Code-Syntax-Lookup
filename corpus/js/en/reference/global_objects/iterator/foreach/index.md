---
id: "js-en-function-web-javascript-reference-global_objects-iterator-foreach"
language: "js"
lang: "en"
category: "function"
name: "Iterator.prototype.forEach"
title: "Iterator.prototype.forEach()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\iterator\\foreach\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Iterator/forEach"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Iterator.prototype.forEach()

The **`forEach()`** method of `Iterator` instances is similar to `Array.prototype.forEach()`: it executes a provided function once for each element produced by the iterator.

## Syntax

```js-nolint
forEach(callbackFn)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element produced by the iterator. Its return value is discarded. The function is called with the following arguments:
    - `element`
      - : The current element being processed.
    - `index`
      - : The index of the current element being processed.

### Return value

`undefined`.

## Description

`forEach()` iterates the iterator and invokes the `callbackFn` function once for each element. Unlike most other iterator helper methods, it does not work with infinite iterators, because it is not lazy.

## Examples

### Using forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

This is equivalent to:

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Iterator.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims polyfill of `Iterator.prototype.forEach`](https://www.npmjs.com/package/es-iterator-helpers)
- `Iterator`
- `Iterator.prototype.find()`
- `Iterator.prototype.map()`
- `Iterator.prototype.filter()`
- `Iterator.prototype.every()`
- `Iterator.prototype.some()`
- `Array.prototype.forEach()`
