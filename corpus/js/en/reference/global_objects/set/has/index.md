---
id: "js-en-function-web-javascript-reference-global_objects-set-has"
language: "js"
lang: "en"
category: "function"
name: "Set.prototype.has"
title: "Set.prototype.has()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\set\\has\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/has"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.has()

The **`has()`** method of `Set` instances returns a boolean indicating whether the specified value exists in this `Set` or not.

`JavaScript Demo: Set.prototype.has()`

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
has(value)
```

### Parameters

- `value`
  - : The value to test for presence in the `Set` object.

### Return value

Returns `true` if the specified value exists in the `Set` object; otherwise `false`.

## Examples

### Using has()

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set = new Set();
const obj = { key1: 1 };
set.add(obj);

console.log(set.has(obj)); // true
console.log(set.has({ key1: 1 })); // false, because they are different object references
console.log(set.add({ key1: 1 })); // now set contains 2 entries
```

## Specifications

## Browser compatibility

## See also

- `Set`
- `Set.prototype.add()`
- `Set.prototype.delete()`
