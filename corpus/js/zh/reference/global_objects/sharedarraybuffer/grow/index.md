---
id: "js-zh-syntax-web-javascript-reference-global_objects-sharedarraybuffer-grow"
language: "js"
lang: "zh"
category: "syntax"
name: "SharedArrayBuffer.prototype.grow"
title: "SharedArrayBuffer.prototype.grow()"
module: "reference\\global_objects\\sharedarraybuffer\\grow\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SharedArrayBuffer.prototype.grow()

`SharedArrayBuffer` 实例的 **`grow()`** 方法将 `SharedArrayBuffer` 增大到以字节为单位的指定大小。

## 语法

```js-nolint
grow(newLength)
```

### 参数

- `newLength`
  - : 新的长度，以字节为单位，`SharedArrayBuffer` 调整后的大小。

### 返回值

无（`undefined`）。

### 异常

- `TypeError`
  - : 如果当前的 `SharedArrayBuffer` 不可增大，则抛出该异常。
- `RangeError`
  - : 如果 `newLength` 大于当前 `SharedArrayBuffer` 的 `SharedArrayBuffer/maxByteLength` 或小于 `SharedArrayBuffer/byteLength`，则抛出该异常。

## 描述

`grow()` 方将 `SharedArrayBuffer` 增大到 `newLength` 参数指定的大小，前提是 `SharedArrayBuffer` 是[可增大的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)，并且新的大小小于等于当前 `SharedArrayBuffer` 的 `SharedArrayBuffer/maxByteLength`。新字节被初始化为 0。

## 示例

### 使用 grow()

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 `SharedArrayBuffer/growable` 属性，如果 `growable` 返回 `true`，则将其增大：

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
- `SharedArrayBuffer.prototype.growable`
- `SharedArrayBuffer.prototype.maxByteLength`
