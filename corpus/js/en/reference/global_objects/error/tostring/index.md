---
id: "js-en-function-web-javascript-reference-global_objects-error-tostring"
language: "js"
lang: "en"
category: "function"
name: "Error.prototype.toString"
title: "Error.prototype.toString()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\error\\tostring\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error.prototype.toString()

The **`toString()`** method of `Error` instances returns a string representing this error.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the specified `Error` object.

## Description

The `Error` object overrides the `Object.prototype.toString()`
method inherited by all objects. Its semantics are as follows:

```js
Error.prototype.toString = function () {
  if (
    this === null ||
    (typeof this !== "object" && typeof this !== "function")
  ) {
    throw new TypeError();
  }
  let name = this.name;
  name = name === undefined ? "Error" : `${name}`;
  let msg = this.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name}: ${msg}`;
};
```

## Examples

### Using toString()

```js
const e1 = new Error("fatal error");
console.log(e1.toString()); // "Error: fatal error"

const e2 = new Error("fatal error");
e2.name = undefined;
console.log(e2.toString()); // "Error: fatal error"

const e3 = new Error("fatal error");
e3.name = "";
console.log(e3.toString()); // "fatal error"

const e4 = new Error("fatal error");
e4.name = "";
e4.message = undefined;
console.log(e4.toString()); // ""

const e5 = new Error("fatal error");
e5.name = "hello";
e5.message = undefined;
console.log(e5.toString()); // "hello"
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Error.prototype.toString` with many bug fixes in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
