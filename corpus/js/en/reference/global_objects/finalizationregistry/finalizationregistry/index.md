---
id: "js-en-function-web-javascript-reference-global_objects-finalizationregistry-finalizationregistry"
language: "js"
lang: "en"
category: "function"
name: "FinalizationRegistry() constructor"
title: "FinalizationRegistry() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\finalizationregistry\\finalizationregistry\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# FinalizationRegistry() constructor

The **`FinalizationRegistry()`** constructor creates `FinalizationRegistry` objects.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> [!NOTE]
> `FinalizationRegistry()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

- `callback`
  - : A function to be invoked each time a registered target value is garbage collected. Its return value is ignored. The function is called with the following arguments:
    - `heldValue`
      - : The value that was passed to the second parameter of the `FinalizationRegistry/register` method when the `target` object was registered.

## Examples

### Creating a new registry

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

## Specifications

## Browser compatibility

## See also

- `FinalizationRegistry`
