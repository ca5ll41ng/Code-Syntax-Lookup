---
id: "js-en-function-web-javascript-reference-operators-bitwise_and_assignment"
language: "js"
lang: "en"
category: "function"
name: "Bitwise AND assignment (&=)"
title: "Bitwise AND assignment (&=)"
directive: "javascript-operator"
module: "reference\\operators\\bitwise_and_assignment\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Bitwise AND assignment (&=)

The **bitwise AND assignment (`&=`)** operator performs [bitwise AND](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Bitwise AND assignment (&=) operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x &= y
```

## Description

`x &= y` is equivalent to `x = x & y`, except that the expression `x` is only evaluated once.

## Examples

### Using bitwise AND assignment

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## Specifications

## Browser compatibility

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitwise AND (`&`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
