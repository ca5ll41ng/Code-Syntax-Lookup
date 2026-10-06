---
id: "js-en-function-web-javascript-reference-global_objects-disposablestack-symbol-dispose"
language: "js"
lang: "en"
category: "function"
name: "DisposableStack.prototype[Symbol.dispose]"
title: "DisposableStack.prototype[Symbol.dispose]()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\disposablestack\\symbol.dispose\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DisposableStack.prototype[Symbol.dispose]()

The **`[Symbol.dispose]()`** method of `DisposableStack` instances implements the _disposable protocol_ and allows it to be disposed when used with `Statements/using` or `Statements/await_using`. It is an alias for the `DisposableStack/dispose` method.

## Syntax

```js-nolint
disposableStack[Symbol.dispose]()
```

### Parameters

None.

### Return value

None (`undefined`).

## Examples

### Declaring a stack with `using`

The `Symbol.dispose` method is intended to be automatically called in a `using` declaration.

```js
{
  using disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // stack is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `DisposableStack`
- `DisposableStack.prototype.dispose()`
