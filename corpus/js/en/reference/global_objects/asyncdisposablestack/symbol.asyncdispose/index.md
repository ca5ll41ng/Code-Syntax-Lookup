---
id: "js-en-function-web-javascript-reference-global_objects-asyncdisposablestack-symbol-asyncdispose"
language: "js"
lang: "en"
category: "function"
name: "AsyncDisposableStack.prototype[Symbol.asyncDispose]"
title: "AsyncDisposableStack.prototype[Symbol.asyncDispose]()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\asyncdisposablestack\\symbol.asyncdispose\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncDisposableStack.prototype[Symbol.asyncDispose]()

The **`[Symbol.asyncDispose]()`** method of `AsyncDisposableStack` instances implements the _async disposable protocol_ and allows it to be disposed when used with `Statements/await_using`. It is an alias for the `AsyncDisposableStack/disposeAsync` method.

## Syntax

```js-nolint
asyncDisposableStack[Symbol.asyncDispose]()
```

### Parameters

None.

### Return value

None (`undefined`).

## Examples

### Declaring a stack with `await using`

The `Symbol.asyncDispose` method is intended to be automatically called in an `await using` declaration.

```js
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // disposer is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `AsyncDisposableStack`
- `AsyncDisposableStack.prototype.disposeAsync()`
