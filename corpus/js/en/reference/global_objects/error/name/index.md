---
id: "js-en-function-web-javascript-reference-global_objects-error-name"
language: "js"
lang: "en"
category: "function"
name: "Error.prototype.name"
title: "Error.prototype.name"
directive: "javascript-instance-data-property"
module: "reference\\global_objects\\error\\name\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error/name"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error.prototype.name

The **`name`** data property of `Error.prototype` is shared by all `Error` instances. It represents the name for the type of error. For `Error.prototype.name`, the initial value is `"Error"`. Subclasses like `TypeError` and `SyntaxError` provide their own `name` properties.

## Value

A string. For `Error.prototype.name`, the initial value is `"Error"`.

## Description

By default, `Error` instances are given the name "Error". The `name` property, in addition to the `Error/message` property, is used by the `Error.prototype.toString()` method to create a string representation of the error.

## Examples

### Throwing a custom error

```js
const e = new Error("Malformed input"); // e.name is 'Error'

e.name = "ParseError";
throw e;
// e.toString() would return 'ParseError: Malformed input'
```

## Specifications

## Browser compatibility

## See also

- `Error.prototype.message`
- `Error.prototype.toString()`
