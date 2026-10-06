---
id: "js-en-function-web-javascript-reference-global_objects-asyncdisposablestack-asyncdisposablestack"
language: "js"
lang: "en"
category: "function"
name: "AsyncDisposableStack() constructor"
title: "AsyncDisposableStack() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\asyncdisposablestack\\asyncdisposablestack\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncDisposableStack() constructor

The **`AsyncDisposableStack()`** constructor creates `AsyncDisposableStack` objects.

## Syntax

```js-nolint
new AsyncDisposableStack()
```

> [!NOTE]
> `AsyncDisposableStack()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

None.

### Return value

A new `AsyncDisposableStack` object.

## Examples

### Creating an AsyncDisposableStack

```js
const disposer = new AsyncDisposableStack();
disposer.defer(() => console.log("Disposed!"));
await disposer.disposeAsync();
// Logs: Disposed!
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
