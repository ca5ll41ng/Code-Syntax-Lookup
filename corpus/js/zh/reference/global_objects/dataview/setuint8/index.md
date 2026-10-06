---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-setuint8"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.setUint8"
title: "DataView.prototype.setUint8()"
module: "reference\\global_objects\\dataview\\setuint8\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setUint8()

**`setUint8()`** 从 [`DataView`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView) 起始位置以 byte 为计数的指定偏移量 (byteOffset) 处储存一个 8-bit 数 (无符号字节)。

`JavaScript Demo: DataView.setUint8()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## 语法

```js-nolint
dataview.setUint8(byteOffset, value)
```

### 参数

- byteOffset
  - : 偏移量，从头开始计算，单位为字节
- value
  - : 设置的数值

### 返回

`undefined`.

### 抛出错误

- `RangeError`
  - : 如果 byteOffset 超出了视图能储存的值，就会抛出错误。

## 示例

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint8(1, 3);
dataview.getUint8(1); // 3
```

## 规范

## 浏览器兼容性

## 相关内容

- `DataView`
- `ArrayBuffer`
