---
id: "js-en-function-web-javascript-reference-operators-remainder_assignment"
language: "js"
lang: "en"
category: "function"
name: "Remainder assignment (%=)"
title: "Remainder assignment (%=)"
directive: "javascript-operator"
module: "reference\\operators\\remainder_assignment\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Remainder_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Remainder assignment (%=)

The **remainder assignment (`%=`)** operator performs [remainder](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) on the two operands and assigns the result to the left operand.

`JavaScript Demo: Remainder assignment (%=) operator`

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x %= y
```

## Description

`x %= y` is equivalent to `x = x % y`, except that the expression `x` is only evaluated once.

## Examples

### Using remainder assignment

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Specifications

## Browser compatibility

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Remainder (`%`)](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
