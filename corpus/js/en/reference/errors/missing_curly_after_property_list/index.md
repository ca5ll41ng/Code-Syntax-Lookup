---
id: "js-en-function-web-javascript-reference-errors-missing_curly_after_property_list"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: missing } after property list"
title: "SyntaxError: missing } after property list"
directive: "javascript-error"
module: "reference\\errors\\missing_curly_after_property_list\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_property_list"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: missing } after property list

The JavaScript exception "missing } after property list" occurs when there is a mistake
in the [object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) syntax somewhere.
Might be in fact a missing curly bracket, but could also be a missing comma.

## Message

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## Error type

`SyntaxError`

## What went wrong?

There is a mistake in the [object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
syntax somewhere. Might be in fact a missing curly bracket, but could
also be a missing comma, for example. Also check if any closing curly braces or
parenthesis are in the correct order. Indenting or formatting the code a bit nicer might
also help you to see through the jungle.

## Examples

### Forgotten comma

Oftentimes, there is a missing comma in your object initializer code:

```js-nolint example-bad
const obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

Correct would be:

```js example-good
const obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## See also

- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
