---
id: "js-en-function-web-javascript-reference-global_objects-error-columnnumber"
language: "js"
lang: "en"
category: "function"
name: "Error: columnNumber"
title: "Error: columnNumber"
directive: "javascript-instance-data-property"
module: "reference\\global_objects\\error\\columnnumber\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error: columnNumber

The **`columnNumber`** data property of an `Error` instance contains the column number in the line of the file that raised this error.

## Value

A positive integer.

## Examples

### Using columnNumber

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- `Error.prototype.stack`
- `Error.prototype.lineNumber`
- `Error.prototype.fileName`
