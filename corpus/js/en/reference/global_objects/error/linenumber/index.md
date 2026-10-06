---
id: "js-en-function-web-javascript-reference-global_objects-error-linenumber"
language: "js"
lang: "en"
category: "function"
name: "Error: lineNumber"
title: "Error: lineNumber"
directive: "javascript-instance-data-property"
module: "reference\\global_objects\\error\\linenumber\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error: lineNumber

The **`lineNumber`** data property of an `Error` instance contains the line number in the file that raised this error.

## Value

A positive integer.

## Examples

### Using lineNumber

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### Alternative example using error event

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error("Could not parse input");
throw e;
```

This is not a standard feature and lacks widespread support. See the browser compatibility table below.

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- `Error.prototype.stack`
- `Error.prototype.columnNumber`
- `Error.prototype.fileName`
