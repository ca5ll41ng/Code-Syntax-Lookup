---
id: "js-en-function-web-javascript-reference-global_objects-asyncdisposablestack-disposed"
language: "js"
lang: "en"
category: "function"
name: "AsyncDisposableStack.prototype.disposed"
title: "AsyncDisposableStack.prototype.disposed"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\asyncdisposablestack\\disposed\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposed"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncDisposableStack.prototype.disposed

The **`disposed`** accessor property of `AsyncDisposableStack` instances returns a boolean indicating whether or not this `AsyncDisposableStack` has been disposed or moved by doing any of the following:

- Calling its `AsyncDisposableStack/disposeAsync` method
- Calling its `AsyncDisposableStack/move` method
- Declaring it with `Statements/await_using` and letting the variable go out of scope, which automatically calls the [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose) method.

## Examples

### Checking if a stack is disposed

```js
const disposer = new AsyncDisposableStack();
console.log(disposer.disposed); // false
await disposer.disposeAsync();
console.log(disposer.disposed); // true
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
