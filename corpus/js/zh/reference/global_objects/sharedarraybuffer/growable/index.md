---
id: "js-zh-syntax-web-javascript-reference-global_objects-sharedarraybuffer-growable"
language: "js"
lang: "zh"
category: "syntax"
name: "SharedArrayBuffer.prototype.growable"
title: "SharedArrayBuffer.prototype.growable"
module: "reference\\global_objects\\sharedarraybuffer\\growable\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SharedArrayBuffer.prototype.growable

`SharedArrayBuffer` 实例的 **`growable`** 访问器属性返回该 `SharedArrayBuffer` 是否可增大。

## 描述

`growable` 属性是一个访问器属性，其设置访问器函数为 `undefined`，因此你只能读取该属性。该属性的值在构造数组时确定。如果在构造函数中 `maxByteLength` 选项被设置，`growable` 将返回 `true`；否则，它将返回 `false`。

## 示例

### 使用 growable

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 `growable` 属性，如果 `growable` 返回 `true`，则增大它：

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB 是可增大的！");
  buffer.grow(12);
}
```

## 规范

## 浏览器兼容性

## 参见

- `SharedArrayBuffer`
- `SharedArrayBuffer.prototype.grow()`
- `SharedArrayBuffer.prototype.maxByteLength`
