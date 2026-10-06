---
id: "js-zh-syntax-web-javascript-reference-global_objects-arraybuffer-isview"
language: "js"
lang: "zh"
category: "syntax"
name: "ArrayBuffer.isView"
title: "ArrayBuffer.isView()"
module: "reference\\global_objects\\arraybuffer\\isview\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.isView()

**`ArrayBuffer.isView()`** 静态方法判断传入值是否是 `ArrayBuffer` 视图之一，例如[类型化数组对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)或 `DataView`。

`JavaScript Demo: ArrayBuffer.isView()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// Expected output: true
```

## 语法

```js-nolint
ArrayBuffer.isView(value)
```

### 参数

- `value`
  - : 要检查的值。

### 返回值

如果给定参数是 `ArrayBuffer` 视图之一则返回 `true`；否则返回 `false`。

## 示例

### 使用 isView

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## 规范

## 浏览器兼容性

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
