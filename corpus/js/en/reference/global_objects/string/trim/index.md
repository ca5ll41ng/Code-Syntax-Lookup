---
id: "js-en-function-web-javascript-reference-global_objects-string-trim"
language: "js"
lang: "en"
category: "function"
name: "String.prototype.trim"
title: "String.prototype.trim()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\string\\trim\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/trim"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.trim()

The **`trim()`** method of `String` values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use `String/trimStart` or `String/trimEnd`.

`JavaScript Demo: String.prototype.trim()`

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

## Syntax

```js-nolint
trim()
```

### Parameters

None.

### Return value

A new string representing `str` stripped of whitespace from both its beginning and end. Whitespace is defined as [white space](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) characters plus [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

If neither the beginning nor the end of `str` has any whitespace, a new string is still returned (essentially a copy of `str`).

## Examples

### Using trim()

The following example trims whitespace from both ends of `str`.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Specifications

## Browser compatibility

## See also

- `String.prototype.trimStart()`
- `String.prototype.trimEnd()`
