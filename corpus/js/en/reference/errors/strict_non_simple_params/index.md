---
id: "js-en-function-web-javascript-reference-errors-strict_non_simple_params"
language: "js"
lang: "en"
category: "function"
name: "'SyntaxError: \"use strict\" not allowed in function with non-simple parameters'"
title: "'SyntaxError: \"use strict\" not allowed in function with non-simple parameters'"
directive: "javascript-error"
module: "reference\\errors\\strict_non_simple_params\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 'SyntaxError: "use strict" not allowed in function with non-simple parameters'

The JavaScript exception "`"use strict"` not allowed in function" occurs
when a `"use strict"` directive is used at the top of a function with
`Functions/Default_parameters`,
`Functions/rest_parameters`, or
`Operators/Destructuring`.

## Message

```plain
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list (V8-based)
SyntaxError: "use strict" not allowed in function with default parameter (Firefox)
SyntaxError: "use strict" not allowed in function with rest parameter (Firefox)
SyntaxError: "use strict" not allowed in function with destructuring parameter (Firefox)
SyntaxError: 'use strict' directive not allowed inside a function with a non-simple parameter list. (Safari)
```

## Error type

`SyntaxError`.

## What went wrong?

A `"use strict"` directive is written at the top of a function that has one
of the following parameters:

- `Functions/Default_parameters`
- `Functions/rest_parameters`
- `Operators/Destructuring`

A `"use strict"` directive is not allowed at the top of such functions per
the ECMAScript specification.

## Examples

### Function statement

In this case, the function `sum` has default parameters `a=1` and
`b=2`:

```js-nolint example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

If the function should be in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), and the
entire script or enclosing function is also okay to be in strict mode, you can move the
`"use strict"` directive outside of the function:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Function expression

A function expression can use yet another workaround:

```js-nolint example-bad
const sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

This can be converted to the following expression:

```js example-good
const sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Arrow function

If an arrow function needs to access the `this` variable, you can use the
arrow function as the enclosing function:

```js-nolint example-bad
const callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

This can be converted to the following expression:

```js example-good
const callback = (() => {
  "use strict";
  return (...args) => this.run(args);
})();
```

## See also

- `Strict_mode`
- `Statements/function`
- `Operators/function`
- `Functions/Default_parameters`
- `Functions/rest_parameters`
- `Operators/Destructuring`
