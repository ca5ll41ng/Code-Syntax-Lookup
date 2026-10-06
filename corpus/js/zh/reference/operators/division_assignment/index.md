---
id: "js-zh-syntax-web-javascript-reference-operators-division_assignment"
language: "js"
lang: "zh"
category: "syntax"
name: "=）"
title: "除法赋值（/=）"
module: "reference\\operators\\division_assignment\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Operators/Division_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 除法赋值（/=）

**除法赋值**（**`/=`**）运算符将变量除以右操作数的值，并将结果赋值给该变量。

`JavaScript Demo: Expressions - Division assignment operator`

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## 语法

```js-nolint
x /= y // x = x / y
```

## 示例

### 使用除法赋值

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
bar /= "foo"; // NaN
```

## 规范

## 浏览器兼容性

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
