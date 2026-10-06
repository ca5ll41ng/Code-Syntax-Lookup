---
id: "js-en-function-web-javascript-reference-global_objects-map-values"
language: "js"
lang: "en"
category: "function"
name: "Map.prototype.values"
title: "Map.prototype.values()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\map\\values\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map/values"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.values()

The **`values()`** method of `Map` instances returns a new _[map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains the values for each element in this map in insertion order.

`JavaScript Demo: Map.prototype.values()`

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.values();

console.log(iterator.next().value);
// Expected output: "foo"

console.log(iterator.next().value);
// Expected output: "bar"
```

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using values()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Specifications

## Browser compatibility

## See also

- `Map.prototype.entries()`
- `Map.prototype.keys()`
