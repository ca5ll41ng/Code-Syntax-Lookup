---
id: "js-en-function-web-javascript-reference-global_objects-regexp-source"
language: "js"
lang: "en"
category: "function"
name: "RegExp.prototype.source"
title: "RegExp.prototype.source"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\regexp\\source\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.source

The **`source`** accessor property of `RegExp` instances returns a string containing the source text of this regular expression, without the two forward slashes on both sides or any flags.

`JavaScript Demo: RegExp.prototype.source`

```js interactive-example
const regex = /fooBar/gi;

console.log(regex.source);
// Expected output: "fooBar"

console.log(new RegExp().source);
// Expected output: "(?:)"

console.log(new RegExp("\n").source === "\\n");
// Expected output: true (starting with ES5)
// Due to escaping
```

## Description

Conceptually, the `source` property is the text between the two forward slashes in the regular expression literal. The language requires the returned string to be properly escaped, so that when the `source` is concatenated with a forward slash on both ends, it would form a parsable regex literal. For example, for `new RegExp("/")`, the `source` is `\\/`, because if it generates `/`, the resulting literal becomes `///`, which is a line comment. Similarly, all [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) will be escaped because line terminator _characters_ would break up the regex literal. There's no requirement for other characters, as long as the result is parsable. For empty regular expressions, the string `(?:)` is returned.

## Examples

### Using source

```js
const regex = /fooBar/gi;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "gi".
```

### Empty regular expressions and escaping

```js
new RegExp().source; // "(?:)"

new RegExp("\n").source === "\\n"; // true, starting with ES5
```

## Specifications

## Browser compatibility

## See also

- `RegExp.prototype.flags`
