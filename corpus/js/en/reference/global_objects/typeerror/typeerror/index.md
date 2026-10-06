---
id: "js-en-function-web-javascript-reference-global_objects-typeerror-typeerror"
language: "js"
lang: "en"
category: "function"
name: "TypeError() constructor"
title: "TypeError() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\typeerror\\typeerror\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/TypeError/TypeError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypeError() constructor

The **`TypeError()`** constructor creates `TypeError` objects.

## Syntax

```js-nolint
new TypeError()
new TypeError(message)
new TypeError(message, options)
new TypeError(message, fileName)
new TypeError(message, fileName, lineNumber)

TypeError()
TypeError(message)
TypeError(message, options)
TypeError(message, fileName)
TypeError(message, fileName, lineNumber)
```

> [!NOTE]
> `TypeError()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `TypeError` instance.

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

### Catching a TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a TypeError

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- `Error`
