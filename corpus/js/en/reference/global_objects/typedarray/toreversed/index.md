---
id: "js-en-function-web-javascript-reference-global_objects-typedarray-toreversed"
language: "js"
lang: "en"
category: "function"
name: "TypedArray.prototype.toReversed"
title: "TypedArray.prototype.toReversed()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\typedarray\\toreversed\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.toReversed()

The **`toReversed()`** method of `TypedArray` instances is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) counterpart of the `TypedArray/reverse` method. It returns a new typed array with the elements in reversed order. This method has the same algorithm as `Array.prototype.toReversed()`.

## Syntax

```js-nolint
toReversed()
```

### Parameters

None.

### Return value

A new typed array containing the elements in reversed order.

## Description

See `Array.prototype.toReversed()` for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using toReversed()

```js
const uint8 = new Uint8Array([1, 2, 3]);
const reversedUint8 = uint8.toReversed();
console.log(reversedUint8); // Uint8Array [3, 2, 1]
console.log(uint8); // Uint8Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `TypedArray.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `TypedArray.prototype.reverse()`
- `TypedArray.prototype.toSorted()`
- `TypedArray.prototype.with()`
- `Array.prototype.toReversed()`
