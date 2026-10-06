---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-log2"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.log2"
title: "Math.log2()"
module: "reference\\global_objects\\math\\log2\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/log2"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.log2()

**`Math.log2()`** 函数返回一个数字以 2 为底的对数。

## 语法

```js-nolint
Math.log2(x)
```

### 参数

- `x`
  - : 任意数字。

## 描述

如果传入的参数小于 0，则返回 `NaN`.

## 示例

```js
Math.log2(2); // 1
Math.log2(1024); // 10
Math.log2(1); // 0
Math.log2(0); // -Infinity
Math.log2(-2); // NaN
Math.log2("1024"); // 10
Math.log2("foo"); // NaN
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Math.log2` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- `Math.exp()`
- `Math.log()`
- `Math.log10()`
- `Math.log1p()`
- `Math.pow()`
