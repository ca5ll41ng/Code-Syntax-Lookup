---
id: "js-en-function-web-javascript-reference-global_objects-aggregateerror"
language: "js"
lang: "en"
category: "function"
name: "AggregateError"
title: "AggregateError"
directive: "javascript-class"
module: "reference\\global_objects\\aggregateerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AggregateError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AggregateError

The **`AggregateError`** object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by `Promise.any()`, when all promises passed to it reject.

Compared to `SuppressedError`, `AggregateError` represents a list of unrelated errors, while `SuppressedError` represents an error that happened during the handling of another error.

`AggregateError` is a subclass of `Error`.

## Constructor

- `AggregateError/AggregateError`
  - : Creates a new `AggregateError` object.

## Instance properties

_Also inherits instance properties from its parent `Error`_.

These properties are defined on `AggregateError.prototype` and shared by all `AggregateError` instances.

- `Object/constructor`
  - : The constructor function that created the instance object. For `AggregateError` instances, the initial value is the `AggregateError/AggregateError` constructor.
- `Error/name`
  - : Represents the name for the type of error. For `AggregateError.prototype.name`, the initial value is `"AggregateError"`.

These properties are own properties of each `AggregateError` instance.

- `AggregateError/errors`
  - : An array representing the errors that were aggregated.

## Instance methods

_Inherits instance methods from its parent `Error`_.

## Examples

### Catching an AggregateError

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### Creating an AggregateError

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims polyfill of `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- `Error`
- `Promise.any`
