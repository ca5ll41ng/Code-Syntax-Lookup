---
id: "js-en-function-web-javascript-reference-global_objects-bigint-bigint"
language: "js"
lang: "en"
category: "function"
name: "BigInt() constructor"
title: "BigInt() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\bigint\\bigint\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# BigInt() constructor

The **`BigInt()`** function returns primitive values of type BigInt.

## Syntax

```js-nolint
BigInt(value)
```

> [!NOTE]
> `BigInt()` can only be called without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to construct it with `new` throws a `TypeError`.

### Parameters

- `value`
  - : The value to be converted to a BigInt value. It may be a string, an integer, a boolean, or another `BigInt`.

### Return value

A `BigInt` value. Number values must be integers and are converted to BigInts. The boolean value `true` becomes `1n`, and `false` becomes `0n`. Strings are parsed as if they are source text for integer literals, which means they can have leading and trailing whitespaces and can be prefixed with `0b`, `0o`, or `0x`.

### Exceptions

- `RangeError`
  - : Thrown if the parameter is a non-integral number.
- `TypeError`
  - : Thrown in one of the following cases:
    - The parameter cannot be converted to a primitive.
    - After conversion to a primitive, the result is `undefined`, `null`, or `Symbol`.
- `SyntaxError`
  - : Thrown if the parameter is a string that cannot be parsed as a `BigInt`.

## Examples

### Using BigInt() to convert a number to a BigInt

`BigInt()` is the only case where a number can be converted to a BigInt without throwing, because it's very explicit. However, only integers are allowed.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
```

### Using string values

```js
BigInt("123"); // 123n
BigInt("0b10101"); // 21n, which is 10101 in binary
BigInt("0o123"); // 83n, which is 123 in octal
BigInt("0x123"); // 291n, which is 123 in hexadecimal
BigInt("  123  "); // 123n, leading and trailing whitespaces are allowed
```

## Specifications

## Browser compatibility

## See also

- `BigInt`
