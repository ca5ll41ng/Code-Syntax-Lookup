---
id: "js-en-function-web-javascript-reference-errors-bad_return"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: return not in function"
title: "SyntaxError: return not in function"
directive: "javascript-error"
module: "reference\\errors\\bad_return\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Bad_return"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: return not in function

The JavaScript exception "return not in function" occurs when a [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement is called outside of a [function](/en-US/docs/Web/JavaScript/Guide/Functions).

## Message

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## Error type

`SyntaxError`.

## What went wrong?

A [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement is called outside of a [function](/en-US/docs/Web/JavaScript/Guide/Functions). Maybe there are missing curly braces somewhere? The `return` statement must be in a function, because it ends function execution and specifies a value to be returned to the function caller.

## Examples

### Missing curly braces

```js-nolint example-bad
function cheer(score) {
  if (score === 147)
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

The curly braces look correct at a first glance, but this code snippet is missing a `{` after the first `if` statement. Correct would be:

```js example-good
function cheer(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}
```

## See also

- [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
