---
id: "js-en-function-web-javascript-reference-global_objects-typedarray-keys"
language: "js"
lang: "en"
category: "function"
name: "TypedArray.prototype.keys"
title: "TypedArray.prototype.keys()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\typedarray\\keys\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.keys()

The **`keys()`** method of `TypedArray` instances returns a new _[array iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the keys for each index in the typed array. This method has the same algorithm as `Array.prototype.keys()`.

`JavaScript Demo: TypedArray.prototype.keys()`

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const keys = uint8.keys();

keys.next();
keys.next();

console.log(keys.next().value);
// Expected output: 2
```

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Description

See `Array.prototype.keys()` for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Iteration using for...of loop

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
for (const n of arrKeys) {
  console.log(n);
}
```

### Alternative iteration

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
console.log(arrKeys.next().value); // 0
console.log(arrKeys.next().value); // 1
console.log(arrKeys.next().value); // 2
console.log(arrKeys.next().value); // 3
console.log(arrKeys.next().value); // 4
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `TypedArray.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `TypedArray`
- `TypedArray.prototype.entries()`
- `TypedArray.prototype.values()`
- [`TypedArray.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- `Array.prototype.keys()`
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
