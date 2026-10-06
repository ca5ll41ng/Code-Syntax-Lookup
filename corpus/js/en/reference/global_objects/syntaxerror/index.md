---
id: "js-en-function-web-javascript-reference-global_objects-syntaxerror"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError"
title: "SyntaxError"
directive: "javascript-class"
module: "reference\\global_objects\\syntaxerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError

The **`SyntaxError`** object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

`SyntaxError` is a "serializable object", so it can be cloned with `Window.structuredClone` or copied between [Workers](/en-US/docs/Web/API/Worker) using `Worker/postMessage()`.

`SyntaxError` is a subclass of `Error`.

## Constructor

- `SyntaxError/SyntaxError`
  - : Creates a new `SyntaxError` object.

## Instance properties

_Also inherits instance properties from its parent `Error`_.

These properties are defined on `SyntaxError.prototype` and shared by all `SyntaxError` instances.

- `Object/constructor`
  - : The constructor function that created the instance object. For `SyntaxError` instances, the initial value is the `SyntaxError/SyntaxError` constructor.
- `Error/name`
  - : Represents the name for the type of error. For `SyntaxError.prototype.name`, the initial value is `"SyntaxError"`.

## Instance methods

_Inherits instance methods from its parent `Error`_.

## Examples

### Catching a SyntaxError

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a SyntaxError

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
