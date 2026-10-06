---
id: "js-en-function-web-javascript-reference-global_objects-string-tolowercase"
language: "js"
lang: "en"
category: "function"
name: "String.prototype.toLowerCase"
title: "String.prototype.toLowerCase()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\string\\tolowercase\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.toLowerCase()

The **`toLowerCase()`** method of `String` values returns this string converted to lower case.

`JavaScript Demo: String.prototype.toLowerCase()`

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## Syntax

```js-nolint
toLowerCase()
```

### Parameters

None.

### Return value

A new string representing the calling string converted to lower case.

## Description

The `toLowerCase()` method returns the value of the string converted to
lower case. `toLowerCase()` does not affect the value of the string
`str` itself.

## Examples

### Using `toLowerCase()`

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## Specifications

## Browser compatibility

## See also

- `String.prototype.toLocaleLowerCase()`
- `String.prototype.toLocaleUpperCase()`
- `String.prototype.toUpperCase()`
