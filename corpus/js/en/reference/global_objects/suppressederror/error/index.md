---
id: "js-en-function-web-javascript-reference-global_objects-suppressederror-error"
language: "js"
lang: "en"
category: "function"
name: "SuppressedError: error"
title: "SuppressedError: error"
directive: "javascript-instance-data-property"
module: "reference\\global_objects\\suppressederror\\error\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/SuppressedError/error"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SuppressedError: error

The **`error`** data property of a `SuppressedError` instance contains a reference to the error that results in the suppression.

## Value

Any value. Like `Error/cause`, you cannot assume it's an `Error` instance, although it usually is the case.

## Examples

### Using error

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.error); // Error: "New error"
}
```

## Specifications

## Browser compatibility

## See also

- [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) guide
- `SuppressedError`
- [`Error`: `cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
