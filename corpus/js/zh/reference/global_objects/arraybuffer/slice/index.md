---
id: "js-zh-syntax-web-javascript-reference-global_objects-arraybuffer-slice"
language: "js"
lang: "zh"
category: "syntax"
name: "ArrayBuffer.prototype.slice"
title: "ArrayBuffer.prototype.slice()"
module: "reference\\global_objects\\arraybuffer\\slice\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.prototype.slice()

`ArrayBuffer` 实例的 **`slice()`** 方法返回一个新的 `ArrayBuffer` 实例，其包含原 `ArrayBuffer` 实例中从 `begin` 开始（包含）到 `end` 结束（不含）的所有字节的副本。

`JavaScript Demo: ArrayBuffer.slice()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));
// Produces Int32Array [42, 0]

console.log(sliced[0]);
// Expected output: 42
```

## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 参数

- `start` 
  - : 要开始提取的位置索引（从 0 开始），将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负数索引将会从缓冲区末尾开始计算——如果 `start < 0`，那么将会使用 `start + buffer.length`。
    - 如果 `start < -buffer.length` 或省略了 `start`，则会使用 `0`。
    - 如果 `start >= buffer.length`，则不会提取任何内容。
- `end` 
  - : 要结束提取的位置索引（从 0 开始），将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。`slice()` 提取到但不包括 `end`。
    - 负数索引将会从缓冲区末尾开始计算——如果 `end < 0`，那么将会使用 `end + buffer.length`。
    - 如果 `end < -buffer.length`，则会使用 `0`。
    - 如果 `end >= buffer.length` 或省略了 `end`，则会使用 `buffer.length`，则会导致直到末尾的所有元素都被提取。
    - 如果标准化后的 `end` 位置在 `start` 位置之前，则不会提取任何内容。

### 返回值

一个新的 `ArrayBuffer` 对象。

## 示例

### 复制一个 ArrayBuffer

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## 规范

## 浏览器兼容性

## 参见

- `ArrayBuffer`
