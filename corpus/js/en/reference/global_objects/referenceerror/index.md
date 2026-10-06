---
id: "js-en-function-web-javascript-reference-global_objects-referenceerror"
language: "js"
lang: "en"
category: "function"
name: "ReferenceError"
title: "ReferenceError"
directive: "javascript-class"
module: "reference\\global_objects\\referenceerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ReferenceError

The **`ReferenceError`** object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

`ReferenceError` is a "serializable object", so it can be cloned with `Window.structuredClone` or copied between [Workers](/en-US/docs/Web/API/Worker) using `Worker/postMessage()`.

`ReferenceError` is a subclass of `Error`.

## Constructor

- `ReferenceError/ReferenceError`
  - : Creates a new `ReferenceError` object.

## Instance properties

_Also inherits instance properties from its parent `Error`_.

These properties are defined on `ReferenceError.prototype` and shared by all `ReferenceError` instances.

- `Object/constructor`
  - : The constructor function that created the instance object. For `ReferenceError` instances, the initial value is the `ReferenceError/ReferenceError` constructor.
- `Error/name`
  - : Represents the name for the type of error. For `ReferenceError.prototype.name`, the initial value is `"ReferenceError"`.

## Instance methods

_Inherits instance methods from its parent `Error`_.

## Examples

### Catching a ReferenceError

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a ReferenceError

```js
try {
  throw new ReferenceError("Hello");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
