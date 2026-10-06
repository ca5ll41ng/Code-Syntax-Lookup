---
id: "js-en-function-web-javascript-reference-errors-invalid_bigint_syntax"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: invalid BigInt syntax"
title: "SyntaxError: invalid BigInt syntax"
directive: "javascript-error"
module: "reference\\errors\\invalid_bigint_syntax\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: invalid BigInt syntax

The JavaScript exception "invalid BigInt syntax" occurs when a string value is being coerced to a `BigInt` but it failed to be parsed as an integer.

## Message

```plain
SyntaxError: Cannot convert x to a BigInt (V8-based)
SyntaxError: invalid BigInt syntax (Firefox)
SyntaxError: Failed to parse String to BigInt (Safari)
```

## Error type

`SyntaxError`.

## What went wrong?

When using the [`BigInt()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) function to convert a string to a BigInt, the string will be parsed in the same way as source code, and the resulting value must be an integer value.

## Examples

### Invalid cases

```js example-bad
const a = BigInt("1.5");
const b = BigInt("1n");
const c = BigInt.asIntN(4, "8n");
// SyntaxError: invalid BigInt syntax
```

### Valid cases

```js example-good
const a = BigInt("1");
const b = BigInt("  1   ");
const c = BigInt.asIntN(4, "8");
```

## See also

- [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
