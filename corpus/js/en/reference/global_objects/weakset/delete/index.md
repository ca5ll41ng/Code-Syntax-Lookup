---
id: "js-en-function-web-javascript-reference-global_objects-weakset-delete"
language: "js"
lang: "en"
category: "function"
name: "WeakSet.prototype.delete"
title: "WeakSet.prototype.delete()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\weakset\\delete\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakSet.prototype.delete()

The **`delete()`** method of `WeakSet` instances removes the specified value from this set, if it is in the set.

`JavaScript Demo: WeakSet.prototype.delete()`

```js interactive-example
const weakset = new WeakSet();
const object = {};

weakset.add(object);

console.log(weakset.has(object));
// Expected output: true

weakset.delete(object);

console.log(weakset.has(object));
// Expected output: false
```

## Syntax

```js-nolint
weakSetInstance.delete(value)
```

### Parameters

- `value`
  - : The value to remove from the `WeakSet` object. Objects are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

`true` if a value in the `WeakSet` object has been removed successfully. `false` if the value is not found in the `WeakSet`. Always returns `false` if `value` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using delete()

```js
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj); // Returns false. No obj found to be deleted.
ws.delete(window); // Returns true. Successfully removed.

ws.has(window); // Returns false. The window is no longer present in the WeakSet.
```

## Specifications

## Browser compatibility

## See also

- `WeakSet`
- `WeakSet.prototype.add()`
- `WeakSet.prototype.has()`
