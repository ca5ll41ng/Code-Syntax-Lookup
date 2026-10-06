---
id: "js-en-function-web-javascript-reference-global_objects-aggregateerror-aggregateerror"
language: "js"
lang: "en"
category: "function"
name: "AggregateError() constructor"
title: "AggregateError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\aggregateerror\\aggregateerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AggregateError() constructor

The **`AggregateError()`** constructor creates `AggregateError` objects.

## Syntax

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> [!NOTE]
> `AggregateError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `AggregateError` instance.

### Parameters

- `errors`
  - : An iterable of errors, may not actually be `Error` instances.
- `message` 
  - : An optional human-readable description of the aggregate error.
- `options` 
  - : An object that has the following properties:
    - `cause` 
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.

## Examples

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

- [Polyfill of `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- [es-shims polyfill of `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- `Promise.any`
