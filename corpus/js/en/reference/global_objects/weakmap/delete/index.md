---
id: "js-en-function-web-javascript-reference-global_objects-weakmap-delete"
language: "js"
lang: "en"
category: "function"
name: "WeakMap.prototype.delete"
title: "WeakMap.prototype.delete()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\weakmap\\delete\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakMap.prototype.delete()

The **`delete()`** method of `WeakMap` instances removes the entry specified by the key from this `WeakMap`.

`JavaScript Demo: WeakMap.prototype.delete()`

```js interactive-example
const weakmap = new WeakMap();
const object = {};

weakmap.set(object, 42);

console.log(weakmap.delete(object));
// Expected output: true

console.log(weakmap.has(object));
// Expected output: false
```

## Syntax

```js-nolint
weakMapInstance.delete(key)
```

### Parameters

- `key`
  - : The key of the entry to remove from the `WeakMap` object. Object keys are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

`true` if an entry in the `WeakMap` object has been removed successfully. `false` if the key is not found in the `WeakMap`. Always returns `false` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using delete()

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // Returns true. Successfully removed.

wm.has(window); // Returns false. The window object is no longer in the WeakMap.
```

## Specifications

## Browser compatibility

## See also

- `WeakMap`
- `WeakMap.prototype.get()`
- `WeakMap.prototype.set()`
- `WeakMap.prototype.has()`
