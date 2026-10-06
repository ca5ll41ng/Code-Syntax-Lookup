---
id: "js-en-function-web-javascript-reference-global_objects-aggregateerror-errors"
language: "js"
lang: "en"
category: "function"
name: "AggregateError: errors"
title: "AggregateError: errors"
directive: "javascript-instance-data-property"
module: "reference\\global_objects\\aggregateerror\\errors\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/errors"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AggregateError: errors

The **`errors`** data property of an `AggregateError` instance contains an array representing the errors that were aggregated.

## Value

An `Array` containing values in the same order as the iterable passed as the first argument of the `AggregateError/AggregateError` constructor.

## Examples

### Using errors

```js
try {
  throw new AggregateError(
    // An iterable of errors
    new Set([new Error("some error"), new Error("another error")]),
    "Multiple errors thrown",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: some error,
  //   Error: another error
  // ]
}
```

## Specifications

## Browser compatibility

## See also

- [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) guide
- `AggregateError`
- [`Error`: `cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
