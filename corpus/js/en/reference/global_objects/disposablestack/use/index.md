---
id: "js-en-function-web-javascript-reference-global_objects-disposablestack-use"
language: "js"
lang: "en"
category: "function"
name: "DisposableStack.prototype.use"
title: "DisposableStack.prototype.use()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\disposablestack\\use\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/use"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DisposableStack.prototype.use()

The **`use()`** method of `DisposableStack` instances registers a value that implements the [disposable protocol](/en-US/docs/Web/JavaScript/Guide/Resource_management) to the stack.

## Syntax

```js-nolint
use(value)
```

### Parameters

- `value`
  - : The value to register to the stack. Must either contain a `[Symbol.dispose]()` method, or be `null` or `undefined`.

### Return value

The same `value` that was passed in.

### Exceptions

- `TypeError`
  - : Thrown if `value` is not `null` or `undefined`, and does not contain a `[Symbol.dispose]()` method.
- `ReferenceError`
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `use()` is to register a value that implements the disposable protocol to the stack, as the equivalent of the `Statements/using` declaration. If the value does not implement the disposable protocol (it doesn't have the `[Symbol.dispose]()` method), use `DisposableStack/adopt` instead, passing a callback that calls the resource's cleanup method.

You should make your resource registered as soon as it's declared. This means you should always wrap your resource acquisition expression in `use()`, instead of extracting it to a separate statement.

```js example-bad
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

## Examples

### Using use()

This code consumes a `ReadableStream` via a `ReadableStreamDefaultReader`. The reader is automatically closed when the function completes, assuming it implements a `[Symbol.dispose]()` method that synchronously releases the lock on the stream.

```js
{
  using disposer = new DisposableStack();
  const reader = disposer.use(stream.getReader());
  const { value, done } = reader.read();
  if (!done) {
    // Process the value
  }
  // The reader.releaseLock() method is called here before exiting
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `DisposableStack`
- `DisposableStack.prototype.adopt()`
- `DisposableStack.prototype.defer()`
