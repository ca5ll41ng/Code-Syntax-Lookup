---
id: "js-en-function-web-javascript-reference-global_objects-escape"
language: "js"
lang: "en"
category: "function"
name: "escape"
title: "escape()"
directive: "javascript-function"
module: "reference\\global_objects\\escape\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/escape"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# escape()

> [!NOTE]
> `escape()` is a non-standard function implemented by browsers and was only standardized for cross-engine compatibility. It is not required to be implemented by all JavaScript engines and may not work everywhere. Use `encodeURIComponent()` or `encodeURI()` if possible.

The **`escape()`** function computes a new string in which certain characters have been replaced by hexadecimal escape sequences.

## Syntax

```js-nolint
escape(str)
```

### Parameters

- `str`
  - : A string to be encoded.

### Return value

A new string in which certain characters have been escaped.

## Description

`escape()` is a function property of the global object.

The `escape()` function replaces all characters with escape sequences, with the exception of "ASCII" word characters (A–Z, a–z, 0–9, \_) and `@\*_+-./`. Characters are escaped by UTF-16 code units. If the code unit's value is less than 256, it is represented by a two-digit hexadecimal number in the format `%XX`, left-padded with 0 if necessary. Otherwise, it is represented by a four-digit hexadecimal number in the format `%uXXXX`, left-padded with 0 if necessary.

> [!NOTE]
> This function was used mostly for "Percent-encoding", "percent-encoding" and is partly based on the escape format in . The escape format is _not_ an [escape sequence](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in string literals. You can replace `%XX` with `\xXX` and `%uXXXX` with `\uXXXX` to get a string containing actual string-literal escape sequences.

## Examples

### Using escape()

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// special characters
escape("@*_+-./"); // "@*_+-./"
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `escape` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- `encodeURI`
- `encodeURIComponent`
- `unescape`
