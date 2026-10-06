---
id: "js-en-function-web-javascript-reference-global_objects-string-touppercase"
language: "js"
lang: "en"
category: "function"
name: "String.prototype.toUpperCase"
title: "String.prototype.toUpperCase()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\string\\touppercase\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.toUpperCase()

The **`toUpperCase()`** method of `String` values returns this string converted to uppercase.

`JavaScript Demo: String.prototype.toUpperCase()`

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## Syntax

```js-nolint
toUpperCase()
```

### Parameters

None.

### Return value

A new string representing the calling string converted to upper case.

## Description

The `toUpperCase()` method returns the value of the string converted to
uppercase. This method does not affect the value of the string itself since JavaScript
strings are immutable.

## Examples

### Basic usage

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Conversion of non-string `this` values to strings

This method will convert any non-string value to a string, when you set its
`this` to a value that is not a string:

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## Specifications

## Browser compatibility

## See also

- `String.prototype.toLocaleLowerCase()`
- `String.prototype.toLocaleUpperCase()`
- `String.prototype.toLowerCase()`
