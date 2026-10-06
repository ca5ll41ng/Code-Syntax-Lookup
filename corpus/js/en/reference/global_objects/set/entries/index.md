---
id: "js-en-function-web-javascript-reference-global_objects-set-entries"
language: "js"
lang: "en"
category: "function"
name: "Set.prototype.entries"
title: "Set.prototype.entries()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\set\\entries\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/entries"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.entries()

The **`entries()`** method of `Set` instances returns a new _[set iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that contains **an array of `[value, value]`** for each element in this set, in insertion order. For `Set` objects there is no `key` like in `Map` objects. However, to keep the API similar to the `Map` object, each _entry_ has the same value for its _key_ and _value_ here, so that an array `[value, value]` is returned.

`JavaScript Demo: Set.prototype.entries()`

```js interactive-example
const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.entries();

for (const entry of iterator) {
  console.log(entry);
  // Expected output: Array [42, 42]
  // Expected output: Array ["forty two", "forty two"]
}
```

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using entries()

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Specifications

## Browser compatibility

## See also

- `Set.prototype.keys()`
- `Set.prototype.values()`
