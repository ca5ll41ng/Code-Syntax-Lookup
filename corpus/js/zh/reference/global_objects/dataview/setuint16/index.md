---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-setuint16"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.setUint16"
title: "DataView.prototype.setUint16()"
module: "reference\\global_objects\\dataview\\setuint16\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setUint16()

**`setUint16()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 16-bit 数 (无符号短整型)。

`JavaScript Demo: DataView.setUint16()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // Max unsigned 16-bit integer

console.log(view.getUint16(1));
// Expected output: 65535
```

## 语法

```plain
dataview.setUint16(byteOffset, value [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节。
- value
  - : 设置的数值。
- littleEndian
  - :  Indicates whether the 16-bit int is stored in "Endianness", "little- or big-endian" format. If false or undefined, a big-endian value is written.

### 返回

`undefined`.

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint16(1, 3);
dataview.getUint16(1); // 3
```

## 规范

## 浏览器兼容性

## 相关内容

- `DataView`
- `ArrayBuffer`
