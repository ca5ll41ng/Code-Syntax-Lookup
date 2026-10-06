---
id: "js-en-function-web-javascript-reference-global_objects-symbol-description"
language: "js"
lang: "en"
category: "function"
name: "Symbol.prototype.description"
title: "Symbol.prototype.description"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\symbol\\description\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.prototype.description

The **`description`** accessor property of `Symbol` values returns a string containing the description of this symbol, or `undefined` if the symbol has no description.

`JavaScript Demo: Symbol.prototype.description`

```js interactive-example
console.log(Symbol("desc").description);
// Expected output: "desc"

console.log(Symbol.iterator.description);
// Expected output: "Symbol.iterator"

console.log(Symbol.for("foo").description);
// Expected output: "foo"

console.log(`${Symbol("foo").description}bar`);
// Expected output: "foobar"
```

## Description

`Symbol` objects can be created with an optional description which can be used for debugging but not to access the symbol itself. The `Symbol.prototype.description` property can be used to read that description. It is different to `Symbol.prototype.toString()` as it does not contain the enclosing `"Symbol()"` string. See the examples.

## Examples

### Using description

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Symbol.prototype.description` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [es-shims polyfill of `Symbol.prototype.description`](https://www.npmjs.com/package/symbol.prototype.description)
- `Symbol.prototype.toString()`
