---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-tostring"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.toString"
title: "TypedArray.prototype.toString()"
module: "reference\\global_objects\\typedarray\\tostring\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.toString()

`TypedArray` 实例的 **`toString()`** 方法返回一个字符串，用于表示指定的类型化数组及其元素。该方法的算法与 `Array.prototype.toString()` 相同。

`JavaScript 演示：TypedArray.prototype.toString()`

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

const uint8String = uint8.toString();

console.log(uint8String.startsWith("10"));
// 期望输出：true
```

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

一个表示类型化数组中的各个元素的字符串。

## 描述

更多详细信息请参见 `Array.prototype.toString()`。此方法不是通用方法，只能在类型化数组实例上调用。

## 示例

### 将类型化数组转换为字符串

```js
const uint8 = new Uint8Array([1, 2, 3]);
// 显式转换
console.log(uint8.toString()); // 1,2,3
// 隐式转换
console.log(`${uint8}`); // 1,2,3
```

## 规范

## 浏览器兼容性

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- `TypedArray`
- `TypedArray.prototype.join()`
- `TypedArray.prototype.toLocaleString()`
- `Array.prototype.toString()`
- `String.prototype.toString()`
