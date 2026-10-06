---
id: "js-en-function-web-javascript-reference-global_objects-typedarray-reverse"
language: "js"
lang: "en"
category: "function"
name: "TypedArray.prototype.reverse"
title: "TypedArray.prototype.reverse()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\typedarray\\reverse\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.reverse()

The **`reverse()`** method of `TypedArray` instances reverses a typed array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ and returns the reference to the same typed array, the first typed array element now becoming the last, and the last typed array element becoming the first. In other words, elements order in the typed array will be turned towards the direction opposite to that previously stated. This method has the same algorithm as `Array.prototype.reverse()`.

`JavaScript Demo: TypedArray.prototype.reverse()`

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8);
// Expected output: Uint8Array [3, 2, 1]
```

## Syntax

```js-nolint
reverse()
```

### Parameters

None.

### Return value

The reference to the original typed array, now reversed. Note that the typed array is reversed _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_, and no copy is made.

## Description

See `Array.prototype.reverse()` for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using reverse()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `TypedArray.prototype.reverse` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `TypedArray`
- `TypedArray.prototype.join()`
- `TypedArray.prototype.sort()`
- `TypedArray.prototype.toReversed()`
- `Array.prototype.reverse()`
