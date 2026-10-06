---
id: "js-en-function-web-javascript-reference-global_objects-urierror-urierror"
language: "js"
lang: "en"
category: "function"
name: "URIError() constructor"
title: "URIError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\urierror\\urierror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/URIError/URIError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# URIError() constructor

The **`URIError()`** constructor creates `URIError` objects.

## Syntax

```js-nolint
new URIError()
new URIError(message)
new URIError(message, options)
new URIError(message, fileName)
new URIError(message, fileName, lineNumber)

URIError()
URIError(message)
URIError(message, options)
URIError(message, fileName)
URIError(message, fileName, lineNumber)
```

> [!NOTE]
> `URIError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `URIError` instance.

### Parameters

- `message` 
  - : Human-readable description of the error.
- `options` 
  - : An object that has the following properties:
    - `cause` 
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName`  
  - : The name of the file containing the code that caused the exception.
- `lineNumber`  
  - : The line number of the code that caused the exception.

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
