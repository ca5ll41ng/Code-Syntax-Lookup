---
id: "js-en-function-web-javascript-reference-global_objects-asyncdisposablestack-defer"
language: "js"
lang: "en"
category: "function"
name: "AsyncDisposableStack.prototype.defer"
title: "AsyncDisposableStack.prototype.defer()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\asyncdisposablestack\\defer\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncDisposableStack.prototype.defer()

The **`defer()`** method of `AsyncDisposableStack` instances takes a callback function to be called and awaited when the stack is disposed.

See `DisposableStack.prototype.defer()` for general information about the `defer()` method.

## Syntax

```js-nolint
defer(onDispose)
```

### Parameters

- `onDispose`
  - : A function that will be called when the stack is disposed. The function receives no arguments and can return a promise which gets awaited.

### Return value

None (`undefined`).

### Exceptions

- `TypeError`
  - : Thrown if `onDispose` is not a function.
- `ReferenceError`
  - : Thrown if the stack is already disposed.

## Examples

### Using defer()

One use case of `defer()` is to do something unrelated to resource freeing during scope exit, such as logging a message.

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  disposer.defer(async () => {
    await fs.writeFile("log.txt", "All resources freed successfully");
  });
  // Other code that claims and frees more data
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `AsyncDisposableStack`
- `AsyncDisposableStack.prototype.adopt()`
- `AsyncDisposableStack.prototype.use()`
