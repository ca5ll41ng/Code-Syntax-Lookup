---
id: "js-en-function-web-javascript-reference-errors-bad_strict_arguments_eval"
language: "js"
lang: "en"
category: "function"
name: "'eval' can't be defined or assigned to in strict mode code"
title: "SyntaxError: 'arguments'/'eval' can't be defined or assigned to in strict mode code"
directive: "javascript-error"
module: "reference\\errors\\bad_strict_arguments_eval\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Bad_strict_arguments_eval"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: 'arguments'/'eval' can't be defined or assigned to in strict mode code

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "'arguments' can't be defined or assigned to in strict mode code" or "'eval' can't be defined or assigned to in strict mode code" occurs when attempting to create a "binding" called `arguments` or `eval`, or assign to such a name.

## Message

```plain
SyntaxError: Unexpected eval or arguments in strict mode (V8-based)
SyntaxError: 'arguments' can't be defined or assigned to in strict mode code (Firefox)
SyntaxError: Cannot modify 'arguments' in strict mode. (Safari)
SyntaxError: Cannot destructure to a parameter name 'arguments' in strict mode. (Safari)
SyntaxError: Cannot declare a variable named arguments in strict mode. (Safari)
SyntaxError: Cannot declare a catch variable named 'arguments' in strict mode. (Safari)
SyntaxError: 'arguments' is not a valid function name in strict mode. (Safari)
```

## Error type

`SyntaxError`

## What went wrong?

In strict mode, the names `Functions/arguments` and `Global_Objects/eval` behave as if they are [reserved words](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words): you cannot make they refer to anything other than the `arguments` object in functions or the global `eval` function.

## Examples

### Invalid cases

```js example-bad
"use strict";

const arguments = [1, 2, 3];
console.log(Math.max(...arguments));

function foo(...arguments) {
  console.log(arguments);
}
```

### Valid cases

```js example-good
"use strict";

const args = [1, 2, 3];
console.log(Math.max(...args));

function foo(...args) {
  console.log(args);
}
```

## See also

- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- `Functions/arguments`
- `Global_Objects/eval`
