---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-setfloat64"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.setFloat64"
title: "DataView.prototype.setFloat64()"
module: "reference\\global_objects\\dataview\\setfloat64\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setFloat64()

**`setFloat64()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 64-bit 数 (双精度浮点型)。

`JavaScript Demo: DataView.setFloat64()`

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
dataview.setFloat64(byteOffset, value [, littleEndian])
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节。
- value
  - : 设置的数值。
- littleEndian
  - :  Indicates whether the 64-bit float is stored in "Endianness", "little- or big-endian" format. If false or undefined, a big-endian value is written.

### 返回

`undefined`.

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat64(0, 3);
dataview.getFloat64(0); // 3
```

## 规范

## 浏览器兼容性

## 相关内容

- `DataView`
- `ArrayBuffer`
