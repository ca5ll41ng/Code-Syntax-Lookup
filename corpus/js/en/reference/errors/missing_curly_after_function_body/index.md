---
id: "js-en-function-web-javascript-reference-errors-missing_curly_after_function_body"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: missing } after function body"
title: "SyntaxError: missing } after function body"
directive: "javascript-error"
module: "reference\\errors\\missing_curly_after_function_body\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: missing } after function body

The JavaScript exception "missing } after function body" occurs when there is a syntax
mistake when creating a function somewhere. Check if any closing curly braces or
parenthesis are in the correct order.

## Message

```plain
SyntaxError: missing } after function body (Firefox)
```

## Error type

`SyntaxError`

## What went wrong?

There is a syntax mistake when creating a function somewhere. Also check if any closing
curly braces or parenthesis are in the correct order. Indenting or formatting the code
a bit nicer might also help you to see through the jungle.

## Examples

### Forgotten closing curly bracket

Oftentimes, there is a missing curly bracket in your function code:

```js-nolint example-bad
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
}
```

Correct would be:

```js example-good
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
}
```

It can be more obscure when using [IIFEs](/en-US/docs/Glossary/IIFE) or other constructs that use
a lot of different parenthesis and curly braces, for example.

```js-nolint example-bad
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

Oftentimes, indenting differently or double checking indentation helps to spot these
errors.

```js example-good
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions) guide
