---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-atan"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.atan"
title: "Math.atan()"
module: "reference\\global_objects\\math\\atan\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/atan"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.atan()

**`Math.atan()`** 函数返回一个数值的反正切（以弧度为单位），即：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \tan(y) = x</annotation></semantics></math>

## 语法

```js-nolint
Math.atan(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

`atan` 返回一个 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> 到 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> 弧度之间的数值。

由于 `atan` 是 `Math` 的静态方法，所以应该像这样使用：`Math.atan()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.atan`

```js
Math.atan(1); // 0.7853981633974483
Math.atan(0); // 0
```

## 规范

## 浏览器兼容性

## 参见

- `Math.acos()`
- `Math.asin()`
- `Math.atan2()`
- `Math.cos()`
- `Math.sin()`
- `Math.tan()`
