---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-bytes_per_element"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.BYTES_PER_ELEMENT"
title: "TypedArray.BYTES_PER_ELEMENT"
module: "reference\\global_objects\\typedarray\\bytes_per_element\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.BYTES_PER_ELEMENT

**`TypedArray.BYTES_PER_ELEMENT`** 属性代表了强类型数组中每个元素所占用的字节数。

## 语法

```plain
TypedArray.BYTES_PER_ELEMENT;
```

## 描述

强类型数组对象用来解释为单个元素的字节数是不一样的。常量 `BYTES_PER_ELEMENT` 表示了特定强类型数组中每个元素所占用的字节数。

## 示例

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
```

## 规范

## 浏览器兼容性

## 参见

- [JavaScript 强类型数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- `TypedArray`
