---
id: "js-en-function-web-javascript-reference-global_objects-map-size"
language: "js"
lang: "en"
category: "function"
name: "Map.prototype.size"
title: "Map.prototype.size"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\map\\size\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map/size"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.size

The **`size`** accessor property of `Map` instances returns the number of elements in this map.

`JavaScript Demo: Map.prototype.size`

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// Expected output: 3
```

## Description

The value of `size` is an integer representing how many entries the `Map` object
has. A set accessor function for `size` is `undefined`; you cannot change this
property.

## Examples

### Using size

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## Specifications

## Browser compatibility

## See also

- `Map`
