---
id: "js-zh-syntax-web-javascript-reference-global_objects-arraybuffer-bytelength"
language: "js"
lang: "zh"
category: "syntax"
name: "ArrayBuffer.prototype.byteLength"
title: "ArrayBuffer.prototype.byteLength"
module: "reference\\global_objects\\arraybuffer\\bytelength\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.prototype.byteLength

`ArrayBuffer` 实例的 `byteLength` 访问器属性返回该数组缓冲区的长度（以字节为单位）。

`JavaScript Demo: ArrayBuffer.byteLength`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## 描述

`byteLength` 属性是一个访问器属性，它的 set 访问器函数是 `undefined`，这意味着你只能读取这个属性。该值在数组创建时确定，并且无法修改。如果这个 `ArrayBuffer` 被分离，则此属性返回 0。

## 示例

### 使用 byteLength

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 规范

## 浏览器兼容性

## 参见

- `ArrayBuffer`
