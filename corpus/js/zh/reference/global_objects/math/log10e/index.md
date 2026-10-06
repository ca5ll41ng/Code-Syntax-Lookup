---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-log10e"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.LOG10E"
title: "Math.LOG10E"
module: "reference\\global_objects\\math\\log10e\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.LOG10E

**`Math.LOG10E`** 属性表示以 10 为底数，e 的对数，约为 0.434：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

## 描述

由于 `LOG10E` 是 `Math` 的静态属性，所以应该像这样使用：`Math.LOG10E`，而不是作为你创建的 `Math` 实例的属性（`Math` 不是一个构造函数）。

## 示例

### 示例：使用 `Math.LOG10E`

下面的函数返回以 10 为底数，E 的对数：

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## 规范

## 浏览器兼容性

## 参见

- `Math.exp()`
- `Math.log()`
- `Math.log10()`
