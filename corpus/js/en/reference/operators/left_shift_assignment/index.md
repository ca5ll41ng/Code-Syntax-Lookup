---
id: "js-en-function-web-javascript-reference-operators-left_shift_assignment"
language: "js"
lang: "en"
category: "function"
name: "Left shift assignment (<<=)"
title: "Left shift assignment (<<=)"
directive: "javascript-operator"
module: "reference\\operators\\left_shift_assignment\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Left shift assignment (<<=)

The **left shift assignment (`<<=`)** operator performs [left shift](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Left shift assignment (<<=) operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntax

```js-nolint
x <<= y
```

## Description

`x <<= y` is equivalent to `x = x << y`, except that the expression `x` is only evaluated once.

## Examples

### Using left shift assignment

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## Specifications

## Browser compatibility

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Left shift (`<<`)](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)
