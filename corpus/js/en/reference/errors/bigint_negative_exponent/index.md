---
id: "js-en-function-web-javascript-reference-errors-bigint_negative_exponent"
language: "js"
lang: "en"
category: "function"
name: "RangeError: BigInt negative exponent"
title: "RangeError: BigInt negative exponent"
directive: "javascript-error"
module: "reference\\errors\\bigint_negative_exponent\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/BigInt_negative_exponent"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RangeError: BigInt negative exponent

The JavaScript exception "BigInt negative exponent" occurs when a `BigInt` is raised to the power of a negative BigInt value.

## Message

```plain
RangeError: Exponent must be positive (V8-based)
RangeError: BigInt negative exponent (Firefox)
RangeError: Negative exponent is not allowed (Safari)
```

## Error type

`RangeError`.

## What went wrong?

The exponent of an [exponentiation](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) operation must be positive. Since negative exponents would take the reciprocal of the base, the result will be between -1 and 1 in almost all cases, which gets rounded to `0n`. To catch mistakes, negative exponents are not allowed. Check if the exponent is non-negative before doing exponentiation.

## Examples

### Using a negative BigInt as exponent

```js example-bad
const a = 1n;
const b = -1n;
const c = a ** b;
// RangeError: BigInt negative exponent
```

Instead, check if the exponent is negative first, and either issue an error with a better message, or fall back to a different value, like `0n` or `undefined`.

```js example-good
const a = 1n;
const b = -1n;
const quotient = b >= 0n ? a ** b : 0n;
```

## See also

- [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Exponentiation (`**`)](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
