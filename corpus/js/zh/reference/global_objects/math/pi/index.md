---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-pi"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.PI"
title: "Math.PI"
module: "reference\\global_objects\\math\\pi\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/PI"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.PI

**`Math.PI`** 静态数据属性表示圆的周长与直径的比例，其值约为 3.14159。

`JavaScript Demo: Math.PI`

```js interactive-example
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// Expected output: 3.141592653589793

console.log(calculateCircumference(10));
// Expected output: 62.83185307179586
```

## 值

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{Math.PI} = \pi \approx 3.14159</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## 描述

由于 `PI` 是 `Math` 的静态属性，因此应始终使用 `Math.PI`，而不是作为你创建的 `Math` 对象的属性（`Math` 不是构造函数）。

## 示例

### 使用 Math.PI

以下函数使用 `Math.PI` 来计算给定半径的圆周长。

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1); // 6.283185307179586
```

## 规范

## 浏览器兼容性

## 参见

- `Math`
