---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-getfloat64"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.getFloat64"
title: "DataView.prototype.getFloat64()"
module: "reference\\global_objects\\dataview\\getfloat64\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.getFloat64()

**`getFloat64()`** 方法从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)相对于起始位置偏移 n 个字节处开始，获取一个 64-bit 数 (双精度浮点型，8 个字节)。

`JavaScript Demo: DataView.getFloat64()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat64(1, Math.PI);

console.log(view.getFloat64(1));
// Expected output: 3.141592653589793
```

## 语法

```plain
dataview.getFloat64(byteOffset [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，单位为字节，从头开始计算。
- littleEndian
  - :  Indicates whether the 64-bit float is stored in "Endianness", "little- or big-endian" format. If false or undefined, a big-endian value is read.

### 返回

一个双精度浮点型 64 位数。

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 描述

没有对齐约束; 多字节值可以从任何偏移量获取。

## 示例

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat64(1)); // 8.20788039913184e-304
```

## 规范

## 浏览器兼容性

## 参见

- `DataView`
- `ArrayBuffer`
