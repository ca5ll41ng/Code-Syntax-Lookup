---
id: "js-en-function-web-javascript-reference-global_objects-urierror"
language: "js"
lang: "en"
category: "function"
name: "URIError"
title: "URIError"
directive: "javascript-class"
module: "reference\\global_objects\\urierror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/URIError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# URIError

The **`URIError`** object represents an error when a global URI handling function was used in a wrong way.

`URIError` is a "serializable object", so it can be cloned with `Window.structuredClone` or copied between [Workers](/en-US/docs/Web/API/Worker) using `Worker/postMessage()`.

`URIError` is a subclass of `Error`.

## Constructor

- `URIError/URIError`
  - : Creates a new `URIError` object.

## Instance properties

_Also inherits instance properties from its parent `Error`_.

These properties are defined on `URIError.prototype` and shared by all `URIError` instances.

- `Object/constructor`
  - : The constructor function that created the instance object. For `URIError` instances, the initial value is the `URIError/URIError` constructor.
- `Error/name`
  - : Represents the name for the type of error. For `URIError.prototype.name`, the initial value is `"URIError"`.

## Instance methods

_Inherits instance methods from its parent `Error`_.

## Examples

### Catching a URIError

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a URIError

```js
try {
  throw new URIError("Hello");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
- `decodeURI()`
- `decodeURIComponent()`
- `encodeURI()`
- `encodeURIComponent()`
