---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-buffer"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.buffer"
title: "DataView.prototype.buffer"
module: "reference\\global_objects\\dataview\\buffer\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.buffer

**`buffer`** 属性描述了在构造时被 DataView 引用的 `ArrayBuffer`。

`JavaScript Demo: DataView.buffer`

```js interactive-example
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## 语法

```plain
dataview.buffer
```

## 描述

`buffer` 属性是一个访问器 (accessor) 属性，它的 `set` 属性为 `undefined`，这意味着它是只读的。值在 `DataView` 被创建时就确定了，且不能改变。

## 示例

### 使用 `buffer` 属性

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## 规范

## 浏览器兼容性

## 参见

- `DataView`
- `ArrayBuffer`
