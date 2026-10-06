---
id: "js-en-function-web-javascript-reference-operators-right_shift_assignment"
language: "js"
lang: "en"
category: "function"
name: "Right shift assignment (>>=)"
title: "Right shift assignment (>>=)"
directive: "javascript-operator"
module: "reference\\operators\\right_shift_assignment\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Right shift assignment (>>=)

The **right shift assignment (`>>=`)** operator performs [right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift) on the two operands and assigns the result to the left operand.

`JavaScript Demo: Right shift assignment (>>=) operator`

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; //  11111111111111111111111111111011

b >>= 2; //  11111111111111111111111111111110
console.log(b);
// Expected output: -2
```

## Syntax

```js-nolint
x >>= y
```

## Description

`x >>= y` is equivalent to `x = x >> y`, except that the expression `x` is only evaluated once.

## Examples

### Using right shift assignment

```js
let a = 5; //   (00000000000000000000000000000101)
a >>= 2; //   1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2; //  -2 (-00000000000000000000000000000010)

let c = 5n;
c >>= 2n; // 1n
```

## Specifications

## Browser compatibility

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Right shift (`>>`)](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)
