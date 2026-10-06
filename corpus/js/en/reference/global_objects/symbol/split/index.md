---
id: "js-en-function-web-javascript-reference-global_objects-symbol-split"
language: "js"
lang: "en"
category: "function"
name: "Symbol.split"
title: "Symbol.split"
directive: "javascript-static-data-property"
module: "reference\\global_objects\\symbol\\split\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.split

The **`Symbol.split`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.split`. The `String.prototype.split()` method looks up this symbol on its first argument for the method that splits a string at the indices that match the current object.

For more information, see [`RegExp.prototype[Symbol.split]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) and `String.prototype.split()`.

`JavaScript Demo: Symbol.split`

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

## Value

The well-known symbol `Symbol.split`.

## Examples

### Custom reverse split

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// [ "dust", "the", "bites", "one", "Another" ]
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Symbol.split` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- `Symbol.match`
- `Symbol.matchAll`
- `Symbol.replace`
- `Symbol.search`
- `String.prototype.split()`
- [`RegExp.prototype[Symbol.split]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
