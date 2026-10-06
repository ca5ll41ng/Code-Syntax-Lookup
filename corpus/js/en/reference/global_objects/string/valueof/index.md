---
id: "js-en-function-web-javascript-reference-global_objects-string-valueof"
language: "js"
lang: "en"
category: "function"
name: "String.prototype.valueOf"
title: "String.prototype.valueOf()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\string\\valueof\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.valueOf()

The **`valueOf()`** method of `String` values returns this string value.

`JavaScript Demo: String.prototype.valueOf()`

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

A string representing the primitive value of a given `String` object.

## Description

The `valueOf()` method of `String` returns the primitive value
of a `String` object as a string data type. This value is equivalent to
`String.prototype.toString()`.

This method is usually called internally by JavaScript and not explicitly in code.

## Examples

### Using `valueOf()`

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## Specifications

## Browser compatibility

## See also

- `String.prototype.toString()`
- `Object.prototype.valueOf()`
