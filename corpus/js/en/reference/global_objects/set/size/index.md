---
id: "js-en-function-web-javascript-reference-global_objects-set-size"
language: "js"
lang: "en"
category: "function"
name: "Set.prototype.size"
title: "Set.prototype.size"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\set\\size\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/size"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.size

The **`size`** accessor property of `Set` instances returns the number of (unique) elements in this set.

`JavaScript Demo: Set.prototype.size`

```js interactive-example
const set = new Set();
const object = {};

set.add(42);
set.add("forty two");
set.add("forty two");
set.add(object);

console.log(set.size);
// Expected output: 3
```

## Description

The value of `size` is an integer representing how many entries the `Set` object has. A set accessor function for `size` is `undefined`; you cannot change this property.

## Examples

### Using size

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## Specifications

## Browser compatibility

## See also

- `Set`
