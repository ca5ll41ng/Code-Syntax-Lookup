---
id: "js-zh-syntax-web-javascript-reference-operators-remainder_assignment"
language: "js"
lang: "zh"
category: "syntax"
name: "取余赋值（%=）"
title: "取余赋值（%=）"
module: "reference\\operators\\remainder_assignment\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Operators/Remainder_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 取余赋值（%=）

**取余赋值**（**`%=`**）运算符将变量除以右操作数的值，并将余数赋值给该变量。

{{InteractiveExample("JavaScript Demo: Expressions - Remainder assignment operator")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## 语法

```js-nolint
x %= y // x = x % y
```

## 示例

### 使用取余赋值

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN
```

## 规范

## 浏览器兼容性

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
