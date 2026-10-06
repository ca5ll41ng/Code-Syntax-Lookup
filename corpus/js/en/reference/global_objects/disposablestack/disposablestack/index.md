---
id: "js-en-function-web-javascript-reference-global_objects-disposablestack-disposablestack"
language: "js"
lang: "en"
category: "function"
name: "DisposableStack() constructor"
title: "DisposableStack() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\disposablestack\\disposablestack\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DisposableStack() constructor

The **`DisposableStack()`** constructor creates `DisposableStack` objects.

## Syntax

```js-nolint
new DisposableStack()
```

> [!NOTE]
> `DisposableStack()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

None.

### Return value

A new `DisposableStack` object.

## Examples

### Creating a DisposableStack

```js
const disposer = new DisposableStack();
disposer.defer(() => console.log("Disposed!"));
disposer.dispose();
// Logs: Disposed!
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
