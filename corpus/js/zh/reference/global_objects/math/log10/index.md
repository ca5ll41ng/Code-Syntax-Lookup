---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-log10"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.log10"
title: "Math.log10()"
module: "reference\\global_objects\\math\\log10\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/log10"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.log10()

**`Math.log10()`** 函数返回一个数字以 10 为底的对数。

## 语法

```js-nolint
Math.log10(x)
```

### 参数

- `x`
  - : 任意数字。

## 描述

如果传入的参数小于 0，则返回 NaN.

## 示例

```js
Math.log10(10); // 1
Math.log10(100); // 2
Math.log10("100"); // 2
Math.log10(1); // 0
Math.log10(0); // -Infinity
Math.log10(-2); // NaN
Math.log10("foo"); // NaN
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Math.log10` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- `Math.exp()`
- `Math.log()`
- `Math.log1p()`
- `Math.log2()`
- `Math.pow()`
