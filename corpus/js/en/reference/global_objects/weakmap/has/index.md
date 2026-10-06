---
id: "js-en-function-web-javascript-reference-global_objects-weakmap-has"
language: "js"
lang: "en"
category: "function"
name: "WeakMap.prototype.has"
title: "WeakMap.prototype.has()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\weakmap\\has\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakMap.prototype.has()

The **`has()`** method of `WeakMap` instances returns a boolean indicating whether an entry with the specified key exists in this `WeakMap` or not.

`JavaScript Demo: WeakMap.prototype.has()`

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");

console.log(weakmap.has(object1));
// Expected output: true

console.log(weakmap.has(object2));
// Expected output: false
```

## Syntax

```js-nolint
has(key)
```

### Parameters

- `key`
  - : The key of the entry to test for presence in the `WeakMap` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

Returns `true` if an entry with the specified key exists in the `WeakMap` object; otherwise `false`. Always returns `false` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using has()

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## Specifications

## Browser compatibility

## See also

- `WeakMap`
- `WeakMap.prototype.delete()`
- `WeakMap.prototype.get()`
- `WeakMap.prototype.set()`
