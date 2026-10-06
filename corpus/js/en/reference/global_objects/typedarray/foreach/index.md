---
id: "js-en-function-web-javascript-reference-global_objects-typedarray-foreach"
language: "js"
lang: "en"
category: "function"
name: "TypedArray.prototype.forEach"
title: "TypedArray.prototype.forEach()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\typedarray\\foreach\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.forEach()

The **`forEach()`** method of `TypedArray` instances executes a provided function once for each typed array element. This method has the same algorithm as `Array.prototype.forEach()`.

`JavaScript Demo: TypedArray.prototype.forEach()`

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);

uint8.forEach((element) => console.log(element));

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. Its return value is discarded. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `forEach()` was called upon.
- `thisArg` 
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

None (`undefined`).

## Description

See `Array.prototype.forEach()` for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Logging the contents of a typed array

The following code logs a line for each element in a typed array:

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// Logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `TypedArray.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `TypedArray`
- `TypedArray.prototype.find()`
- `TypedArray.prototype.map()`
- `TypedArray.prototype.filter()`
- `TypedArray.prototype.every()`
- `TypedArray.prototype.some()`
- `Array.prototype.forEach()`
- `Map.prototype.forEach()`
- `Set.prototype.forEach()`
