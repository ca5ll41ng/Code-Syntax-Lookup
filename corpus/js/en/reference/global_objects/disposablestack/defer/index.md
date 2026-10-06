---
id: "js-en-function-web-javascript-reference-global_objects-disposablestack-defer"
language: "js"
lang: "en"
category: "function"
name: "DisposableStack.prototype.defer"
title: "DisposableStack.prototype.defer()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\disposablestack\\defer\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/defer"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DisposableStack.prototype.defer()

The **`defer()`** method of `DisposableStack` instances takes a callback function to be called when the stack is disposed.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameters

- `onDispose`
  - : A function that will be called when the stack is disposed. The function receives no arguments.

### Return value

None (`undefined`).

### Exceptions

- `TypeError`
  - : Thrown if `onDispose` is not a function.
- `ReferenceError`
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `defer()` is to register a cleanup callback that's not specific to the disposal of a particular resource. If the callback is specific to a resource, you should use `DisposableStack/use` or `DisposableStack/adopt` instead. You can also use `defer` when the resource is not claimed within your code:

```js
function consumeReader(reader) {
  using disposer = new DisposableStack();
  disposer.defer(() => reader.releaseLock());
  // Do something with reader
}
```

## Examples

### Using defer()

This function sets a simple lock to prevent multiple async operations from running at the same time. The lock is released when the function completes.

```js
let isLocked = false;

async function requestWithLock(url, options) {
  if (isLocked) {
    return undefined;
  }
  using disposer = new DisposableStack();
  isLocked = true;
  disposer.defer(() => (isLocked = false));
  const data = await fetch(url, options).then((res) => res.json());
  return data;
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `DisposableStack`
- `DisposableStack.prototype.adopt()`
- `DisposableStack.prototype.use()`
