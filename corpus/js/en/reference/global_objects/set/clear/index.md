---
id: "js-en-function-web-javascript-reference-global_objects-set-clear"
language: "js"
lang: "en"
category: "function"
name: "Set.prototype.clear"
title: "Set.prototype.clear()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\set\\clear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/clear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.clear()

The **`clear()`** method of `Set` instances removes all elements from this set.

`JavaScript Demo: Set.prototype.clear()`

```js interactive-example
const set = new Set();
set.add(1);
set.add("foo");

console.log(set.size);
// Expected output: 2

set.clear();

console.log(set.size);
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

### Using the clear() method

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## Specifications

## Browser compatibility

## See also

- `Set`
- `Set.prototype.delete()`
