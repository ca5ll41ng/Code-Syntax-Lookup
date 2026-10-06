---
id: "js-en-function-web-javascript-reference-global_objects-typedarray-tosorted"
language: "js"
lang: "en"
category: "function"
name: "TypedArray.prototype.toSorted"
title: "TypedArray.prototype.toSorted()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\typedarray\\tosorted\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.toSorted()

The **`toSorted()`** method of `TypedArray` instances is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) version of the `TypedArray/sort` method. It returns a new typed array with the elements sorted in ascending order. This method has the same algorithm as `Array.prototype.toSorted()`, except that it sorts the values numerically instead of as strings by default.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameters

- `compareFn` 
  - : A function that determines the order of the elements. If omitted, the typed array elements are sorted according to numeric value. See `TypedArray/sort` for more information.

### Return value

A new typed array with the elements sorted in ascending order.

## Description

See `Array.prototype.toSorted()` for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Sorting an array

For more examples, see also the `Array.prototype.sort()` method.

```js
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `TypedArray.prototype.toSorted` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `TypedArray.prototype.sort()`
- `TypedArray.prototype.toReversed()`
- `TypedArray.prototype.with()`
- `Array.prototype.toSorted()`
