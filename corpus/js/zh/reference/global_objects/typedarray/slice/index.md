---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-slice"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.slice"
title: "TypedArray.prototype.slice()"
module: "reference\\global_objects\\typedarray\\slice\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.slice()

`TypedArray` 实例的 **`slice()`** 方法返回一个新的类型化数组对象，包含原类型化数组中从 `start` 到 `end`（不包括 `end`）索引位置的一部分拷贝。`start` 和 `end` 参数表示要提取的项的索引。原始类型化数组不会被修改。此方法的算法与 `Array.prototype.slice()` 相同。

`JavaScript 演示：TypedArray.prototype.slice()`

```js interactive-example
const bytes = new Uint8Array([10, 20, 30, 40, 50]);
const byteSlice = bytes.slice(1, 3);

console.log(byteSlice);
// 预期输出：Uint8Array [20, 30]
```

## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 参数

- `start` 
  - : 要开始提取的位置（从 0 开始计数），会被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
- `end` 
  - : 要结束提取的位置（从 0 开始计数），会被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。`slice()` 会提取到（但不包括）`end` 为止的位置。

### 返回值

一个包含提取元素的新类型化数组。

## 描述

更多详细信息请参见 `Array.prototype.slice()`。此方法不是通用方法，只能在类型化数组实例上调用。

## 示例

### 返回现有类型化数组的一部分

```js
const bytes = new Uint8Array([1, 2, 3]);
bytes.slice(1); // Uint8Array [ 2, 3 ]
bytes.slice(2); // Uint8Array [ 3 ]
bytes.slice(-2); // Uint8Array [ 2, 3 ]
bytes.slice(0, 1); // Uint8Array [ 1 ]
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `TypedArray.prototype.slice` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [`TypedArray.prototype.slice` 的 es-shims polyfill](https://www.npmjs.com/package/typedarray.prototype.slice)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- `TypedArray`
- `Array.prototype.slice()`
- `String.prototype.slice()`
