---
id: "js-en-function-web-javascript-reference-global_objects-internalerror-internalerror"
language: "js"
lang: "en"
category: "function"
name: "InternalError() constructor"
title: "InternalError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\internalerror\\internalerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/InternalError/InternalError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# InternalError() constructor

The **`InternalError()`** constructor creates `InternalError` objects.

## Syntax

```js-nolint
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> [!NOTE]
> `InternalError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `InternalError` instance.

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

### Creating a new InternalError

```js
new InternalError("Engine failure");
```

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- `Error`
