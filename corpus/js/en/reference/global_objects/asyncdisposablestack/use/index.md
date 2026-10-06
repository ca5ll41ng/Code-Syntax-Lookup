---
id: "js-en-function-web-javascript-reference-global_objects-asyncdisposablestack-use"
language: "js"
lang: "en"
category: "function"
name: "AsyncDisposableStack.prototype.use"
title: "AsyncDisposableStack.prototype.use()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\asyncdisposablestack\\use\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncDisposableStack.prototype.use()

The **`use()`** method of `AsyncDisposableStack` instances registers a value that implements the [async disposable protocol](/en-US/docs/Web/JavaScript/Guide/Resource_management) to the stack.

See `DisposableStack.prototype.use()` for general information about the `use()` method.

## Syntax

```js-nolint
use(value)
```

### Parameters

- `value`
  - : The value to register to the stack. Must either contain a `[Symbol.asyncDispose]()` or `[Symbol.dispose]()` method, or be `null` or `undefined`.

### Return value

The same `value` that was passed in.

### Exceptions

- `TypeError`
  - : Thrown if `value` is not `null` or `undefined`, and does not contain a `[Symbol.asyncDispose]()` or `[Symbol.dispose]()` method.
- `ReferenceError`
  - : Thrown if the stack is already disposed.

## Examples

### Using use()

This function reads a file (as a Node.js [`FileHandle`](https://nodejs.org/api/fs.html#class-filehandle)) and returns its contents. The file handle is automatically closed when the function completes, given that the `FileHandle` class implements a `[Symbol.asyncDispose]()` method that asynchronously closes the file.

```js
async function readFileContents(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.use(await fs.open(path));
  const data = await handle.read();
  return data;
  // The disposer is disposed here, which causes handle to be closed too
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `AsyncDisposableStack`
- `AsyncDisposableStack.prototype.adopt()`
- `AsyncDisposableStack.prototype.defer()`
