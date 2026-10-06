---
id: "js-en-function-web-javascript-reference-errors-builtin_ctor_no_new"
language: "js"
lang: "en"
category: "function"
name: "TypeError: calling a builtin X constructor without new is forbidden"
title: "TypeError: calling a builtin X constructor without new is forbidden"
directive: "javascript-error"
module: "reference\\errors\\builtin_ctor_no_new\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Builtin_ctor_no_new"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypeError: calling a builtin X constructor without new is forbidden

The JavaScript exception "calling a builtin X constructor without new is forbidden" occurs when you try to call a builtin constructor without using the `new` keyword. All modern constructors, such as `Promise` and `Map`, must be called with `new`.

## Message

```plain
TypeError: Constructor X requires 'new' (V8-based)
TypeError: Promise constructor cannot be invoked without 'new' (V8-based)
TypeError: calling a builtin X constructor without new is forbidden (Firefox)
TypeError: calling X constructor without new is invalid (Safari)
```

## Error type

`TypeError`

## What went wrong?

In JavaScript, _calling_ a function without `new` and _constructing_ a function with `new` are two distinct operations, and functions can behave differently depending on how they are called.

Apart from the following legacy constructors, all modern constructors must be called with `new`:

- `Object/Object`
- `Function/Function` (and its subclasses)
- `Error/Error` (and its subclasses)
- `RegExp/RegExp`
- `Array/Array`

Some other constructors, such as `Date/Date`, and primitive wrappers, such as `String/String`, `Number/Number`, and `Boolean/Boolean`, can also be called with or without `new`, but the return types differ in the two cases.

On every constructor page, you can find information about whether the constructor must be called with `new`.

## Examples

### Invalid cases

```js example-bad
const m = Map(); // TypeError: calling a builtin Map constructor without new is forbidden
```

### Valid cases

```js example-good
const m = new Map();
```

## See also

- `new`
