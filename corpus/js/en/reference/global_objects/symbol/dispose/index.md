---
id: "js-en-function-web-javascript-reference-global_objects-symbol-dispose"
language: "js"
lang: "en"
category: "function"
name: "Symbol.dispose"
title: "Symbol.dispose"
directive: "javascript-static-data-property"
module: "reference\\global_objects\\symbol\\dispose\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.dispose

The **`Symbol.dispose`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.dispose`. The `Statements/using` declaration looks up this symbol on the variable initializer for the method to call when the variable goes out of scope.

## Value

The well-known symbol `Symbol.dispose`.

## Description

An object is disposable if it has the `[Symbol.dispose]()` method. The method is expected to have the following semantics:

- Invoking this method notifies the Disposable object that the caller does not intend to continue to use this object. This method should perform any necessary logic to explicit clean up the resource including, but not limited to, file system handles, streams, host objects, etc.
- When an exception is thrown from this method, it typically means that the resource could not be explicitly freed.
- If called more than once on the same object, the function should not throw an exception. However, this requirement is not enforced.

This method should not return a promise, as promises returned by `[Symbol.dispose]()` are not awaited by `Statements/await_using`. To declare async disposables, use `Symbol.asyncDispose`.

## Examples

### User defined disposables

`[Symbol.dispose]` allows the creation of custom disposables. See the `Statements/using` reference for more information.

```js
class Disposable {
  constructor() {
    this.disposed = false;
  }

  [Symbol.dispose]() {
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable();
{
  using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}
console.log(resource.isDisposed); // true
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Symbol.dispose` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- `Symbol.asyncDispose`
- `Statements/using`
- [`DisposableStack.prototype[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
- [`Iterator.prototype[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose)
