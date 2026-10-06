---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-getint32"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.getInt32"
title: "DataView.prototype.getInt32()"
module: "reference\\global_objects\\dataview\\getint32\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.getInt32()

**`getInt32()`** 方法从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 相对于起始位置偏移 n 个字节处开始，获取一个 32-bit 数 (长整型，4 个字节)。

`JavaScript Demo: DataView.getInt32()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## 语法

```plain
dataview.getInt32(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，从头开始计算。
- littleEndian
  - :  Indicates whether the 32-bit int is stored in "Endianness", "little- or big-endian" format. If false or undefined, a big-endian value is read.

### 返回

一个长整型 32 位数。

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt32(1); // 0
```

## 规范

## 浏览器兼容性

## 参见

- `DataView`
- `ArrayBuffer`
