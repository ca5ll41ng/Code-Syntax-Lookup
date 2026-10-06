---
id: "js-en-function-web-javascript-reference-global_objects-string-trimend"
language: "js"
lang: "en"
category: "function"
name: "String.prototype.trimEnd"
title: "String.prototype.trimEnd()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\string\\trimend\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.trimEnd()

The **`trimEnd()`** method of `String` values removes whitespace from the end of this string and returns a new string, without modifying the original string. `trimRight()` is an alias of this method.

`JavaScript Demo: String.prototype.trimEnd()`

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
```

## Syntax

```js-nolint
trimEnd()

trimRight()
```

### Parameters

None.

### Return value

A new string representing `str` stripped of whitespace from its end (right side). Whitespace is defined as [white space](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) characters plus [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

If the end of `str` has no whitespace, a new string is still returned (essentially a copy of `str`).

### Aliasing

After `String/trim` was standardized, engines also implemented the non-standard method `trimRight`. However, for consistency with `String/padEnd`, when the method got standardized, its name was chosen as `trimEnd`. For web compatibility reasons, `trimRight` remains as an alias to `trimEnd`, and they refer to the exact same function object. In some engines this means:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Examples

### Using trimEnd()

The following example trims whitespace from the end of `str`, but not from its start.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims polyfill of `String.prototype.trimEnd`](https://www.npmjs.com/package/string.prototype.trimend)
- `String.prototype.trim()`
- `String.prototype.trimStart()`
