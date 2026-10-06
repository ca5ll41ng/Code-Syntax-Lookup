---
id: "js-zh-syntax-web-javascript-reference-global_objects-math-sinh"
language: "js"
lang: "zh"
category: "syntax"
name: "Math.sinh"
title: "Math.sinh()"
module: "reference\\global_objects\\math\\sinh\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.sinh()

**`Math.sinh()`** 函数返回一个数字 (单位为角度) 的双曲正弦值。

## 语法

```js-nolint
Math.sinh(x)
```

### 参数

- `x`
  - : 任意数字 (单位为度).

## 描述

双曲正弦的图像如下：

![](http://upload.wikimedia.org/wikipedia/commons/1/17/Sinh.png)

## 示例

```js
Math.sinh(-Infinity); // -Infinity
Math.sinh(-0); // -0
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
Math.sinh(Infinity); // Infinity
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Math.sinh` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- `Math.acos()`
- `Math.asin()`
- `Math.atan()`
- `Math.atan2()`
- `Math.cos()`
- `Math.tan()`
