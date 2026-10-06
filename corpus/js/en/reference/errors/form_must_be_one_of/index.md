---
id: "js-en-function-web-javascript-reference-errors-form_must_be_one_of"
language: "js"
lang: "en"
category: "function"
name: "RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'"
title: "RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'"
directive: "javascript-error"
module: "reference\\errors\\form_must_be_one_of\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Form_must_be_one_of"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'

The JavaScript exception "form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'" occurs when an unrecognized string is passed to the `String.prototype.normalize()` method.

## Message

```plain
RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD. (V8-based)
RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD' (Firefox)
RangeError: argument does not match any normalization form (Safari)
```

## Error type

`RangeError`

## What went wrong?

The `String.prototype.normalize()` method only accepts the following four values as its `form` argument: `"NFC"`, `"NFD"`, `"NFKC"`, or `"NFKD"`. If you pass any other value, an error will be thrown. Read the reference of `normalize()` to learn about different normalization forms.

## Examples

### Invalid cases

```js example-bad
"foo".normalize("nfc"); // RangeError
"foo".normalize(" NFC "); // RangeError
```

### Valid cases

```js example-good
"foo".normalize("NFC"); // 'foo'
```

## See also

- `String.prototype.normalize()`
