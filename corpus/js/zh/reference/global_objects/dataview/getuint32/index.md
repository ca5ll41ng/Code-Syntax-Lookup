---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-getuint32"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.getUint32"
title: "DataView.prototype.getUint32()"
module: "reference\\global_objects\\dataview\\getuint32\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.getUint32()

**`getUint32()`** 方法从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 相对于起始位置偏移 n 个字节处开始，获取一个 32-bit 数 (无符号长整型，4 个字节)。

`JavaScript Demo: DataView.getUint32()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint32(1, 4294967295); // Max unsigned 32-bit integer

console.log(view.getUint32(1));
// Expected output: 4294967295
```

## 语法

```plain
dataview.getUint32(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，从头开始计算。
- littleEndian
  - :  Indicates whether the 32-bit int is stored in "Endianness", "little- or big-endian" format. If false or undefined, a big-endian value is read.

### 返回

一个无符号长整型 32 位数。

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getUint32(1); // 0
```

## 规范

## 浏览器兼容性

## 参见

- `DataView`
- `ArrayBuffer`
