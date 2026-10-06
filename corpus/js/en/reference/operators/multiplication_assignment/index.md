---
id: "js-en-function-web-javascript-reference-operators-multiplication_assignment"
language: "js"
lang: "en"
category: "function"
name: "Multiplication assignment (*=)"
title: "Multiplication assignment (*=)"
directive: "javascript-operator"
module: "reference\\operators\\multiplication_assignment\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Multiplication assignment (*=)

The **multiplication assignment (`*=`)** operator performs [multiplication](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) on the two operands and assigns the result to the left operand.

`JavaScript Demo: Multiplication assignment (*=) operator`

```js interactive-example
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x *= y
```

## Description

`x *= y` is equivalent to `x = x * y`, except that the expression `x` is only evaluated once.

## Examples

### Multiplication assignment using numbers

```js
let bar = 5;
bar *= 2; // 10
```

Other non-BigInt values are coerced to numbers:

```js
let bar = 5;
bar *= "foo"; // NaN
```

### Multiplication assignment using BigInts

```js
let foo = 3n;
foo *= 2n; // 6n
foo *= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

## Browser compatibility

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Multiplication (`*`)](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
