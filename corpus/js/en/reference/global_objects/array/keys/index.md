---
id: "js-en-function-web-javascript-reference-global_objects-array-keys"
language: "js"
lang: "en"
category: "function"
name: "Array.prototype.keys"
title: "Array.prototype.keys()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\array\\keys\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Array.prototype.keys()

The **`keys()`** method of `Array` instances returns a new _[array iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the keys for each index in the array.

`JavaScript Demo: Array.prototype.keys()`

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
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

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `keys()` method iterates empty slots as if they have the value `undefined`.

The `keys()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Using keys() on sparse arrays

Unlike `Object.keys()`, which only includes keys that actually exist in the array, the `keys()` iterator doesn't ignore holes representing missing properties.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Calling keys() on non-array objects

The `keys()` method reads the `length` property of `this` and then yields all integer indices between 0 and `length - 1`. No index access actually happens.

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Array.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims polyfill of `Array.prototype.keys`](https://www.npmjs.com/package/array.prototype.keys)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- `Array`
- `Array.prototype.entries()`
- `Array.prototype.values()`
- [`Array.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- `TypedArray.prototype.keys()`
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
