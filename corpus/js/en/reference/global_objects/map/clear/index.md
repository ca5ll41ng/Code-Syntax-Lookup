---
id: "js-en-function-web-javascript-reference-global_objects-map-clear"
language: "js"
lang: "en"
category: "function"
name: "Map.prototype.clear"
title: "Map.prototype.clear()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\map\\clear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map/clear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.clear()

The **`clear()`** method of `Map` instances removes all elements from this map.

`JavaScript Demo: Map.prototype.clear()`

```js interactive-example
const map = new Map();

map.set("bar", "baz");
map.set(1, "foo");

console.log(map.size);
// Expected output: 2

map.clear();

console.log(map.size);
// Expected output: 0
```

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None (`undefined`).

## Examples

### Using clear()

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## Specifications

## Browser compatibility

## See also

- `Map`
