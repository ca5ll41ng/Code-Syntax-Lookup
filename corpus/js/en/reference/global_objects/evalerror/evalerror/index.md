---
id: "js-en-function-web-javascript-reference-global_objects-evalerror-evalerror"
language: "js"
lang: "en"
category: "function"
name: "EvalError() constructor"
title: "EvalError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\evalerror\\evalerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/EvalError/EvalError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# EvalError() constructor

The **`EvalError()`** constructor creates `EvalError` objects.

## Syntax

```js-nolint
new EvalError()
new EvalError(message)
new EvalError(message, options)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)

EvalError()
EvalError(message)
EvalError(message, options)
EvalError(message, fileName)
EvalError(message, fileName, lineNumber)
```

> [!NOTE]
> `EvalError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `EvalError` instance.

### Parameters

- `message` 
  - : Human-readable description of the error.
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

`EvalError` is not used in the current ECMAScript specification and will
thus not be thrown by the runtime. However, the object itself remains for backwards
compatibility with earlier versions of the specification.

### Creating an EvalError

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
- `Global_Objects/eval`
