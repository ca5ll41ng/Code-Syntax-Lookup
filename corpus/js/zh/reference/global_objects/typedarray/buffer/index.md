---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-buffer"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.buffer"
title: "TypedArray.prototype.buffer"
module: "reference\\global_objects\\typedarray\\buffer\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.buffer

**`buffer`** 访问器属性表示由 _TypedArray_ 在构造期间引用的 `ArrayBuffer`。

## 语法

```plain
typedArray.buffer
```

## 描述

`buffer` 属性是一个访问器属性，它的 set 访问器函数是 `undefined`，意思是你只能够读取这个属性。它的值在 _TypedArray_ 构造时建立，不能被修改。_TypedArray_ 是这里的[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)之一。

## 示例

### 使用 `buffer` 属性

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## 规范

## 浏览器兼容性

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- `TypedArray`
