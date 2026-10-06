---
id: "js-en-function-web-javascript-reference-global_objects-set-keys"
language: "js"
lang: "en"
category: "function"
name: "Set.prototype.keys"
title: "Set.prototype.keys()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\set\\keys\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/keys"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.keys()

The **`keys()`** method of `Set` instances is an alias for the [`values()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values) method.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using keys()

The `keys()` method is exactly equivalent to the `Set/values` method.

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Specifications

## Browser compatibility

## See also

- `Set.prototype.entries()`
- `Set.prototype.values()`
