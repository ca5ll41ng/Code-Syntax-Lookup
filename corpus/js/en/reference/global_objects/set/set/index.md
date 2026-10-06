---
id: "js-en-function-web-javascript-reference-global_objects-set-set"
language: "js"
lang: "en"
category: "function"
name: "Set() constructor"
title: "Set() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\set\\set\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/Set"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set() constructor

The **`Set()`** constructor creates `Set` objects.

`JavaScript Demo: Set() constructor`

```js interactive-example
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// Expected output: true

console.log(set.has(5));
// Expected output: true

console.log(set.has(6));
// Expected output: false
```

## Syntax

```js-nolint
new Set()
new Set(iterable)
```

> [!NOTE]
> `Set()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

- `iterable` 
  - : If an [iterable object](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) (such as an array) is passed, all of its elements will be added to the new `Set`. If you don't specify this parameter, or its value is `null` or `undefined`, the new `Set` is empty.

### Return value

A new `Set` object.

## Examples

### Using the `Set` object

```js
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Set` in `core-js`](https://github.com/zloirock/core-js#set)
- [es-shims polyfill of `Set`](https://www.npmjs.com/package/es-set)
- `Set`
