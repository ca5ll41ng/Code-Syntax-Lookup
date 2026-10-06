---
id: "js-en-function-web-javascript-reference-errors-either_be_both_static_or_non-static"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: getter and setter for private name #x should either be both static or non-static"
title: "SyntaxError: getter and setter for private name #x should either be both static or non-static"
directive: "javascript-error"
module: "reference\\errors\\either_be_both_static_or_non-static\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Either_be_both_static_or_non-static"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: getter and setter for private name #x should either be both static or non-static

The JavaScript exception "mismatched placement" occurs when a private [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) are mismatched in whether or not they are `Classes/static`.

## Message

```plain
SyntaxError: Identifier '#x' has already been declared (V8-based)
SyntaxError: getter and setter for private name #x should either be both static or non-static (Firefox)
SyntaxError: Cannot declare a private non-static getter if there is a static private setter with used name. (Safari)
```

## Error type

`SyntaxError`

## What went wrong?

Private [getters](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set) for the same name must either be both `Classes/static`, or both non-static. This limitation does not exist for public methods.

## Examples

### Mismatched placement

```js-nolint example-bad
class Test {
  static set #foo(_) {}
  get #foo() {}
}

// SyntaxError: getter and setter for private name #foo should either be both static or non-static
```

Since `foo` is [private](/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements), the methods must be either both `Classes/static`:

```js example-good
class Test {
  static set #foo(_) {}
  static get #foo() {}
}
```

or non-static:

```js example-good
class Test {
  set #foo(_) {}
  get #foo() {}
}
```

## See also

- `Functions/get`
- `Functions/set`
- `Classes/static`
- [Private elements](/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
