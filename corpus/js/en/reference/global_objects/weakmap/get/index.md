---
id: "js-en-function-web-javascript-reference-global_objects-weakmap-get"
language: "js"
lang: "en"
category: "function"
name: "WeakMap.prototype.get"
title: "WeakMap.prototype.get()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\weakmap\\get\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakMap.prototype.get()

The **`get()`** method of `WeakMap` instances returns the value corresponding to the key in this `WeakMap`, or `undefined` if there is none. Object values are returned as the same reference that was originally stored, not as a copy, so mutations to the returned object will be reflected anywhere that reference is held, including inside the `WeakMap`.

`JavaScript Demo: WeakMap.prototype.get()`

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, 42);

console.log(weakmap.get(object1));
// Expected output: 42

console.log(weakmap.get(object2));
// Expected output: undefined
```

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : The key of the value to return from the `WeakMap` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

The value associated with the specified key in the `WeakMap` object. If the key can't be found, `undefined` is returned. Always returns `undefined` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using get()

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Returns "foo".
wm.get("baz"); // Returns undefined.
```

## Specifications

## Browser compatibility

## See also

- `WeakMap`
- `WeakMap.prototype.delete()`
- `WeakMap.prototype.set()`
- `WeakMap.prototype.has()`
