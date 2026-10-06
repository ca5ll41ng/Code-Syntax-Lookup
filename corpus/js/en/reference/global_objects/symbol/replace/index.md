---
id: "js-en-function-web-javascript-reference-global_objects-symbol-replace"
language: "js"
lang: "en"
category: "function"
name: "Symbol.replace"
title: "Symbol.replace"
directive: "javascript-static-data-property"
module: "reference\\global_objects\\symbol\\replace\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.replace

The **`Symbol.replace`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.replace`. The `String.prototype.replace()` and `String.prototype.replaceAll()` methods look up this symbol on their first argument for the method that replaces substrings matched by the current object.

For more information, see [`RegExp.prototype[Symbol.replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), `String.prototype.replace()`, and `String.prototype.replaceAll()`.

`JavaScript Demo: Symbol.replace`

```js interactive-example
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// Expected output: "s/foo/bar/g"
```

## Value

The well-known symbol `Symbol.replace`.

## Examples

### Using Symbol.replace

<!-- cSpell:ignore tball -->

```js
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo"))); // "#!@?tball"
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Symbol.replace` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- `Symbol.match`
- `Symbol.matchAll`
- `Symbol.search`
- `Symbol.split`
- `String.prototype.replace()`
- `String.prototype.replaceAll()`
- [`RegExp.prototype[Symbol.replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
