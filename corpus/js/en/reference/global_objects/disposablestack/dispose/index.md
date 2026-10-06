---
id: "js-en-function-web-javascript-reference-global_objects-disposablestack-dispose"
language: "js"
lang: "en"
category: "function"
name: "DisposableStack.prototype.dispose"
title: "DisposableStack.prototype.dispose()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\disposablestack\\dispose\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/dispose"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DisposableStack.prototype.dispose()

The **`dispose()`** method of `DisposableStack` instances disposes this stack by calling all disposers registered to it in reverse order of registration. If the stack is already disposed, this method does nothing.

It performs the same action as `using disposer = new DisposableStack()` at scope exit. It can be used if you need to clean up at a point other than scope exit.

## Syntax

```js-nolint
dispose()
```

### Parameters

None.

### Return value

None (`undefined`).

### Exceptions

- `SuppressedError`
  - : Thrown if multiple disposers in the stack threw an error. If only one error is thrown, it is rethrown as-is. Otherwise, for each additional error, a new `SuppressedError` is created, with the original error as the `suppressed` property, and the new error as the `error` property.

## Examples

### Disposing a stack

Here we push three disposers to the stack, using the `DisposableStack/use`, `DisposableStack/adopt`, and `DisposableStack/defer` methods. When `dispose()` is called, the disposers are called in reverse order of registration.

Note that usually you don't need to call `dispose()` manually. Declare the stack with `Statements/using`, and its [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) method will be automatically called when the stack goes out of scope.

```js
class Resource {
  dispose() {
    console.log("Resource disposed");
  }
  [Symbol.dispose]() {
    console.log("Resource disposed via Symbol.dispose");
  }
}

{
  const disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  const resource2 = disposer.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  disposer.defer(() => console.log("Deferred disposer"));
  disposer.dispose();
  // Logs in order:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `DisposableStack`
- `DisposableStack.prototype.adopt()`
- `DisposableStack.prototype.defer()`
- `DisposableStack.prototype.use()`
- [`DisposableStack.prototype[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
