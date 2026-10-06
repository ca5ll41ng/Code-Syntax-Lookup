---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-expm1"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.expm1"
title: "Math.expm1()"
module: "reference\\global_objects\\math\\expm1\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.expm1()

**`Math.expm1()`** 函数返回 `E^x - 1`, 其中 `x` 是该函数的参数，`E` 是自然对数的底数 `2.718281828459045`。

## 语法

```js-nolint
Math.expm1(x)
```

### 参数

- `x`
  - : 任意数字。

## 描述

参数 `x` 会被自动类型转换成 `number` 类型。

`expm1` 是 "exponent minus 1" 的缩写。

## 示例

```js
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // Infinity
```

## 规范

## 浏览器兼容性

## 参见

- `Global_Objects/Math` 对象。
