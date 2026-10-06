---
id: "js-en-function-web-javascript-reference-global_objects-disposablestack-disposed"
language: "js"
lang: "en"
category: "function"
name: "DisposableStack.prototype.disposed"
title: "DisposableStack.prototype.disposed"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\disposablestack\\disposed\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DisposableStack.prototype.disposed

The **`disposed`** accessor property of `DisposableStack` instances returns a boolean indicating whether or not this `DisposableStack` has been disposed or moved by doing any of the following:

- Calling its `DisposableStack/dispose` method
- Calling its `DisposableStack/move` method
- Declaring it with `Statements/using` and letting the variable go out of scope, which automatically calls the [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose) method.

## Examples

### Checking if a stack is disposed

```js
const disposer = new DisposableStack();
console.log(disposer.disposed); // false
disposer.dispose();
console.log(disposer.disposed); // true
```

## Specifications

## Browser compatibility

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
