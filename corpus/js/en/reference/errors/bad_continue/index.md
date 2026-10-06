---
id: "js-en-function-web-javascript-reference-errors-bad_continue"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: continue must be inside loop"
title: "SyntaxError: continue must be inside loop"
directive: "javascript-error"
module: "reference\\errors\\bad_continue\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Bad_continue"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: continue must be inside loop

The JavaScript exception "continue must be inside loop" occurs when a `Statements/continue` statement is not inside a loop statement.

## Message

```plain
SyntaxError: Illegal continue statement: no surrounding iteration statement (V8-based)
SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement (V8-based)
SyntaxError: continue must be inside loop (Firefox)
SyntaxError: 'continue' is only valid inside a loop statement. (Safari)
SyntaxError: Cannot continue to the label 'label' as it is not targeting a loop. (Safari)
```

## Error type

`SyntaxError`.

## What went wrong?

`Statements/continue` statements can be used to continue a loop, and using them elsewhere is a syntax error. Alternatively, you can provide a [label](/en-US/docs/Web/JavaScript/Reference/Statements/label) to the `continue` statement to continue any loop with that label — however, if the label does not reference a containing statement, another error [SyntaxError: label not found](/en-US/docs/Web/JavaScript/Reference/Errors/Label_not_found) will be thrown, and if the label references a statement that is not a loop, a syntax error is still thrown.

## Examples

### Using continue in callbacks

If you want to proceed with the next iteration in a `Array/forEach` loop, use `Statements/return` instead, or convert it to a `Statements/for...of` loop.

```js-nolint example-bad
array.forEach((value) => {
  if (value === 5) {
    continue; // SyntaxError: continue must be inside loop
  }
  // do something with value
});
```

```js example-good
array.forEach((value) => {
  if (value === 5) {
    return;
  }
  // do something with value
});
```

```js example-good
for (const value of array) {
  if (value === 5) {
    continue;
  }
  // do something with value
}
```

## See also

- `Statements/continue`
