---
id: "js-en-function-web-javascript-reference-errors-no_non-null_object"
language: "js"
lang: "en"
category: "function"
name: "'TypeError: \"x\" is not a non-null object'"
title: "'TypeError: \"x\" is not a non-null object'"
directive: "javascript-error"
module: "reference\\errors\\no_non-null_object\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/No_non-null_object"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 'TypeError: "x" is not a non-null object'

The JavaScript exception "is not a non-null object" occurs when an object is expected
somewhere and wasn't provided. [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is not an object and won't work.

## Message

```plain
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## Error type

`TypeError`

## What went wrong?

An object is expected somewhere and wasn't provided. [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) is not an
object and won't work. You must provide a proper object in the given situation.

## Examples

### Property descriptor expected

When methods like `Object.create()` or
`Object.defineProperty()` and `Object.defineProperties()` are
used, the optional descriptor parameter expects a property descriptor object. Providing
no object (like just a number), will throw an error:

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

A valid property descriptor object might look like this:

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## See also

- `Object.create()`
- `Object.defineProperty()`
- `Object.defineProperties()`
