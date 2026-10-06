---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-setuint32"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.setUint32"
title: "DataView.prototype.setUint32()"
module: "reference\\global_objects\\dataview\\setuint32\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setUint32()

**`setUint32()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 32-bit 数 (无符号长整型)。

`JavaScript Demo: DataView.setUint32()`

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
dataview.setUint32(byteOffset, value [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节。
- value
  - : 设置的数值。
- littleEndian
  - :  Indicates whether the 32-bit int is stored in "Endianness", "little- or big-endian" format. If false or undefined, a big-endian value is written.

### 返回

`undefined`.

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint32(1, 3);
dataview.getUint32(1); // 3
```

## 规范

## 浏览器兼容性

## 相关内容

- `DataView`
- `ArrayBuffer`
