---
id: "js-en-function-web-javascript-reference-errors-missing_bracket_after_list"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: missing ] after element list"
title: "SyntaxError: missing ] after element list"
directive: "javascript-error"
module: "reference\\errors\\missing_bracket_after_list\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Missing_bracket_after_list"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: missing ] after element list

The JavaScript exception "missing ] after element list" occurs when there is an error
with the array initializer syntax somewhere. Likely there is a closing square bracket
(`]`) or a comma (`,`) missing.

## Message

```plain
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## Error type

`SyntaxError`.

## What went wrong?

There is an error with the array initializer syntax somewhere. Likely there is a
closing square bracket (`]`) or a comma (`,`) missing.

## Examples

### Incomplete array initializer

```js-nolint example-bad
const list = [1, 2,

const instruments = [
  "Ukulele",
  "Guitar",
  "Piano",
};

const data = [{ foo: "bar" } { bar: "foo" }];
```

Correct would be:

```js example-good
const list = [1, 2];

const instruments = ["Ukulele", "Guitar", "Piano"];

const data = [{ foo: "bar" }, { bar: "foo" }];
```

## See also

- `Array`
