---
id: "js-zh-syntax-web-javascript-reference-global_objects-arraybuffer-detached"
language: "js"
lang: "zh"
category: "syntax"
name: "ArrayBuffer.prototype.detached"
title: "ArrayBuffer.prototype.detached"
module: "reference\\global_objects\\arraybuffer\\detached\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.prototype.detached

`ArrayBuffer` 实例的 **`detached`** 访问器属性返回一个布尔值，指示该缓冲区是否已经分离（传输）。

## 描述

`detached` 属性是一个访问器属性，其 set 访问器函数是 `undefined`，这意味着你只能读取此属性。该属性的值在创建 `ArrayBuffer` 时设置为 `false`。如果 `ArrayBuffer` 已[被传输](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#传输_arraybuffer)，则该值将变为 `true`，这将使该实例从其底层内存中分离。一旦缓冲区被分离，它就不再可用。

## 示例

### 使用 detached

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## 规范

## 浏览器兼容性

## 参见

- `ArrayBuffer`
- `ArrayBuffer.prototype.transfer()`
- `ArrayBuffer.prototype.transferToFixedLength()`
