---
id: "js-en-function-web-javascript-reference-errors-invalid_derived_return"
language: "js"
lang: "en"
category: "function"
name: "TypeError: derived class constructor returned invalid value x"
title: "TypeError: derived class constructor returned invalid value x"
directive: "javascript-error"
module: "reference\\errors\\invalid_derived_return\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Invalid_derived_return"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypeError: derived class constructor returned invalid value x

The JavaScript exception "derived class constructor returned invalid value x" occurs when a derived class constructor returns a value that is not an object or `undefined`.

## Message

```plain
TypeError: Derived constructors may only return object or undefined (V8-based)
TypeError: derived class constructor returned invalid value 1 (Firefox)
TypeError: Cannot return a non-object type in the constructor of a derived class. (Safari)
```

## Error type

`TypeError`

## What went wrong?

Typically, a constructor does not need to return anything—the value of `this` is automatically returned when the class is constructed. A constructor can also return an object, and this object will override `this` as the newly constructed instance. However, returning something that's neither an object nor `undefined` is usually a mistake, because that value is ignored. In base classes and function constructors (using the `function` syntax), returning such a value is silently ignored, while in derived classes, it throws an error.

## Examples

### Invalid cases

```js example-bad
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor() {
    return 2;
  }
}

new Derived(); // TypeError: derived class constructor returned invalid value 2
```

### Valid cases

```js example-good
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor() {
    return { x: 1 };
  }
}

new Derived(); // { x: 1 }
```

## See also

- [Classes](/en-US/docs/Web/JavaScript/Reference/Classes)
- `Classes/extends`
- `new`
