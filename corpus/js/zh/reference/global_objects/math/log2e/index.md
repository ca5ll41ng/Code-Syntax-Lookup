---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-log2e"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.LOG2E"
title: "Math.LOG2E"
module: "reference\\global_objects\\math\\log2e\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.LOG2E

**`Math.LOG2E`** 属性表示以 2 为底数，e 的对数，约为 1.442：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math>

## 描述

由于 `LOG2E` 是 `Math` 的静态属性，所以应该像这样使用：`Math.LOG2E`，而不是作为你创建的 `Math` 对象的属性（`Math` 不是一个构造函数）。

## 示例

### 示例：使用 `Math.LOG2E`

下面的函数返回以 2 为底数，E 的对数：

```js
function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## 规范

## 浏览器兼容性

## 参见

- `Math.exp()`
- `Math.log()`
- `Math.log2()`
