---
id: "js-zh-syntax-web-javascript-reference-global_objects-dataview-getbiguint64"
language: "js"
lang: "zh"
category: "syntax"
name: "DataView.prototype.getBigUint64"
title: "DataView.prototype.getBigUint64()"
module: "reference\\global_objects\\dataview\\getbiguint64\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.getBigUint64()

`DataView` 的 **`getBigUint64()`** 方法，从 `DataView` 的指定的字节偏移量位置读取 8 个字节，并将其解析为一个无符号 64 位整数（unsigned long long）。

`JavaScript Demo: DataView.getBigUint64()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in an unsigned 64-bit integer
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// Expected output: 18446744073709551615n
```

## 语法

```js-nolint
getBigUint64(byteOffset)
getBigUint64(byteOffset, littleEndian)
```

### 参数

- byteOffset
  - : 表示从视图的开始位置到要读取数据位置的偏移量，以字节为单位。
- `littleEndian` 
  - : 指示 64 位整数是以"Endianness", "小端还是大端"格式存储。如果值为 `false` 或 `undefined`，则以大端格式读取。

### 返回值

一个 `BigInt`。

### 异常

- `RangeError`
  - : 如果 `byteOffset` 设置导致读取时超出了视图的末尾位置，则抛出该错误。

## 描述

没有对齐约束，可以从任意偏移量获取多字节值。

## 示例

### 使用 `getBigUint64` 方法

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getBigUint64(0); // 0n
```

## 规范

## 浏览器兼容性

## 参见

- `DataView`
- `ArrayBuffer`
- `BigInt`
