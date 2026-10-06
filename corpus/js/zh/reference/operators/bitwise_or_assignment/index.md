---
id: "js-zh-syntax-web-javascript-reference-operators-bitwise_or_assignment"
language: "js"
lang: "zh"
category: "syntax"
name: "按位或赋值（|=）"
title: "按位或赋值（|=）"
module: "reference\\operators\\bitwise_or_assignment\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 按位或赋值（|=）

**按位或赋值**（**`|=`**) 运算符使用两个操作数的二进制表示，对它们执行按位或运算并将结果分配给变量。

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise OR assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// Expected output: 7
```

## 语法

```js-nolint
x |= y // x = x | y
```

## 示例

### 使用按位或赋值

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111
```

## 规范

## 浏览器兼容性

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [按位或运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [逻辑或赋值（`||=`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
