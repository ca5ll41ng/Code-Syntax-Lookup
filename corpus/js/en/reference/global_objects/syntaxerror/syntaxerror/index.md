---
id: "js-en-function-web-javascript-reference-global_objects-syntaxerror-syntaxerror"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError() constructor"
title: "SyntaxError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\syntaxerror\\syntaxerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError() constructor

The **`SyntaxError()`** constructor creates `SyntaxError` objects.

## Syntax

```js-nolint
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, options)
new SyntaxError(message, fileName)
new SyntaxError(message, fileName, lineNumber)

SyntaxError()
SyntaxError(message)
SyntaxError(message, options)
SyntaxError(message, fileName)
SyntaxError(message, fileName, lineNumber)
```

> [!NOTE]
> `SyntaxError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `SyntaxError` instance.

### Parameters

- `message` 
  - : Human-readable description of the error
- `options` 
  - : An object that has the following properties:
    - `cause` 
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName`  
  - : The name of the file containing the code that caused the exception
- `lineNumber`  
  - : The line number of the code that caused the exception

## Examples

### Catching a SyntaxError

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a SyntaxError

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
