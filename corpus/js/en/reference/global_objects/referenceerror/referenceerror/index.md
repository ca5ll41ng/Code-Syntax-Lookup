---
id: "js-en-function-web-javascript-reference-global_objects-referenceerror-referenceerror"
language: "js"
lang: "en"
category: "function"
name: "ReferenceError() constructor"
title: "ReferenceError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\referenceerror\\referenceerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ReferenceError() constructor

The **`ReferenceError()`** constructor creates `ReferenceError` objects.

## Syntax

```js-nolint
new ReferenceError()
new ReferenceError(message)
new ReferenceError(message, options)
new ReferenceError(message, fileName)
new ReferenceError(message, fileName, lineNumber)

ReferenceError()
ReferenceError(message)
ReferenceError(message, options)
ReferenceError(message, fileName)
ReferenceError(message, fileName, lineNumber)
```

> [!NOTE]
> `ReferenceError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `ReferenceError` instance.

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
  - : The line number of the code that caused the exception

## Examples

### Catching a ReferenceError

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a ReferenceError

```js
try {
  throw new ReferenceError("Hello");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
