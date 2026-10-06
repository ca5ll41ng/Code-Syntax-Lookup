---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-cos"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.cos"
title: "Math.cos()"
module: "reference\\global_objects\\math\\cos\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/cos"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.cos()

**`Math.cos()`** 函数返回一个数值的余弦值。

## 语法

```js-nolint
Math.cos(x)
```

### 参数

- `x`
  - : 一个以弧度为单位的数值。

## 描述

`cos` 方法返回一个 -1 到 1 之间的数值，表示角度（单位：弧度）的余弦值。

由于 `cos` 是 `Math` 的静态方法，所以应该像这样使用：`Math.cos()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.cos`

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
```

## 规范

## 浏览器兼容性

## 参见

- `Math.acos()`
- `Math.asin()`
- `Math.atan()`
- `Math.atan2()`
- `Math.sin()`
- `Math.tan()`
