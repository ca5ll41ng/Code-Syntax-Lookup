---
id: "js-zh-syntax-web-javascript-reference-global_objects-sharedarraybuffer-bytelength"
language: "js"
lang: "zh"
category: "syntax"
name: "SharedArrayBuffer.prototype.byteLength"
title: "SharedArrayBuffer.prototype.byteLength"
module: "reference\\global_objects\\sharedarraybuffer\\bytelength\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SharedArrayBuffer.prototype.byteLength

`SharedArrayBuffer` 实例的 **`byteLength`** 访问器属性返回该 `SharedArrayBuffer` 的大小（以字节为单位）。

`JavaScript Demo: SharedArrayBuffer.byteLength`

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 描述

`byteLength` 属性是一个访问器属性，它的设置访问器函数为 `undefined`，这意味着你只能读取该属性。该值在创建共享数组时就确定了，不能更改。

## 示例

### 使用 byteLength

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## 规范

## 浏览器兼容性

## 参见

- `SharedArrayBuffer`
