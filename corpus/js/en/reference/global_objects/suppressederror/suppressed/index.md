---
id: "js-en-function-web-javascript-reference-global_objects-suppressederror-suppressed"
language: "js"
lang: "en"
category: "function"
name: "SuppressedError: suppressed"
title: "SuppressedError: suppressed"
directive: "javascript-instance-data-property"
module: "reference\\global_objects\\suppressederror\\suppressed\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/SuppressedError/suppressed"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SuppressedError: suppressed

The **`suppressed`** data property of a `SuppressedError` instance contains a reference to the original error that got suppressed because a new error was generated while handling it.

## Value

Any value. Like `Error/cause`, you cannot assume it's an `Error` instance, although it usually is the case.

## Examples

### Using suppressed

```js
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.suppressed); // Error: "Original error"
}
```

## Specifications

## Browser compatibility

## See also

- [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) guide
- `SuppressedError`
- [`Error`: `cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
