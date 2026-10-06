---
id: "js-en-function-web-javascript-reference-errors-undeclared_var"
language: "js"
lang: "en"
category: "function"
name: "'ReferenceError: assignment to undeclared variable \"x\"'"
title: "'ReferenceError: assignment to undeclared variable \"x\"'"
directive: "javascript-error"
module: "reference\\errors\\undeclared_var\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Undeclared_var"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 'ReferenceError: assignment to undeclared variable "x"'

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "Assignment to undeclared variable" occurs when the value has been assigned to an undeclared variable.

## Message

```plain
ReferenceError: x is not defined (V8-based)
ReferenceError: assignment to undeclared variable x (Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Error type

`ReferenceError` in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

You have an assignment of the form `x = ...`, but `x` has not been previously declared with the `var`, `let`, or `const` keyword.
This error occurs in [strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.
In non-strict code, assignment to an undeclared variable implicitly creates a property on the global scope.

## Examples

### Invalid cases

In this case, the variable "bar" is an undeclared variable.

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Valid cases

To make "bar" a declared variable, you can add a [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/var), or [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) keyword in front of it.

```js example-good
function foo() {
  "use strict";
  const bar = true;
}
foo();
```

## See also

- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
