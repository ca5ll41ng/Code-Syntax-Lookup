---
id: "js-en-function-web-javascript-reference-global_objects-map-get"
language: "js"
lang: "en"
category: "function"
name: "Map.prototype.get"
title: "Map.prototype.get()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\map\\get\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map/get"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.get()

The **`get()`** method of `Map` instances returns the value corresponding to the key in this `Map`, or `undefined` if there is none. Object values are returned as the same reference that was originally stored, not as a copy, so mutations to the returned object will be reflected anywhere that reference is held, including inside the `Map`.

`JavaScript Demo: Map.prototype.get()`

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar"));
// Expected output: "foo"

console.log(map.get("baz"));
// Expected output: undefined
```

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : The key of the value to return from the `Map` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

The value associated with the specified key in the `Map` object. If the key can't be found, `undefined` is returned.

## Examples

### Using get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined
```

### Using get() to retrieve a reference to an object

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

## Specifications

## Browser compatibility

## See also

- `Map`
- `Map.prototype.delete()`
- `Map.prototype.set()`
- `Map.prototype.has()`
