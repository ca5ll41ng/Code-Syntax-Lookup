---
id: "js-en-function-web-javascript-reference-global_objects-weakref-deref"
language: "js"
lang: "en"
category: "function"
name: "WeakRef.prototype.deref"
title: "WeakRef.prototype.deref()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\weakref\\deref\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakRef.prototype.deref()

The **`deref()`** method of `WeakRef` instances returns this `WeakRef`'s target value, or `undefined` if the target value has been garbage-collected.

## Syntax

```js-nolint
deref()
```

### Parameters

None.

### Return value

The target value of the WeakRef, which is either an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Returns `undefined` if the value has been garbage-collected.

## Description

See the [Notes on WeakRefs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) section of the `WeakRef` page for some important notes.

## Examples

### Using deref()

See the [Examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples)
section of the `WeakRef` page for the complete example.

```js
const tick = () => {
  // Get the element from the weak reference, if it still exists
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // The element doesn't exist anymore
    console.log("The element is gone.");
    this.stop();
    this.ref = null;
  }
};
```

## Specifications

## Browser compatibility

## See also

- `WeakRef`
