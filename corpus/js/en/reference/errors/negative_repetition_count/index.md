---
id: "js-en-function-web-javascript-reference-errors-negative_repetition_count"
language: "js"
lang: "en"
category: "function"
name: "RangeError: repeat count must be non-negative"
title: "RangeError: repeat count must be non-negative"
directive: "javascript-error"
module: "reference\\errors\\negative_repetition_count\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Negative_repetition_count"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RangeError: repeat count must be non-negative

The JavaScript exception "repeat count must be non-negative" occurs when the
`String.prototype.repeat()` method is used with a `count`
argument that is a negative number.

## Message

```plain
RangeError: Invalid count value: -1 (V8-based)
RangeError: repeat count must be non-negative (Firefox)
RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity (Safari)
```

## Error type

`RangeError`

## What went wrong?

The `String.prototype.repeat()` method has been used. It has a
`count` parameter indicating the number of times to repeat the string. It
must be between 0 and less than positive `Infinity` and cannot be a negative
number. The range of allowed values can be described like this: \[0, +∞).

## Examples

### Invalid cases

```js example-bad
"abc".repeat(-1); // RangeError
```

### Valid cases

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
```

## See also

- `String.prototype.repeat()`
