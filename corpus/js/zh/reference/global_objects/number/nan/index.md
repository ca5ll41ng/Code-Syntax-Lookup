---
id: "js-zh-syntax-web-javascript-reference-global_objects-number-nan"
language: "js"
lang: "zh"
category: "syntax"
name: "Number.NaN"
title: "Number.NaN"
module: "reference\\global_objects\\number\\nan\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Number.NaN

**`Number.NaN`** 静态数据属性表示非数字值，等同于 `NaN`。有关 `NaN` 的行为的更多信息，请参阅[全局属性的描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

`JavaScript Demo: Number.NaN`

```js interactive-example
function clean(x) {
  // eslint-disable-next-line use-isnan
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

## 值

数字值 `NaN`。

## 描述

由于 `NaN` 是 `Number` 的静态属性，你应该始终将其用作 `Number.NaN`，而不是作为一个数字值的属性。

## 示例

### 检查值是否为数字

```js
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## 规范

## 浏览器兼容性

## 参见

- `NaN`
- `Number.isNaN()`
