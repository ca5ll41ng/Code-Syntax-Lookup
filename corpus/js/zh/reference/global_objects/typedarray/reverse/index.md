---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-reverse"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.reverse"
title: "TypedArray.prototype.reverse()"
module: "reference\\global_objects\\typedarray\\reverse\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.reverse()

**`reverse()`** 方法原地翻转类型化数组。类型化数组的第一个元素变为最后一个，最后一个变为第一个。这个方法的算法和 `Array.prototype.reverse()` 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
reverse()
```

### 返回值

翻转的数组。

## 示例

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## 规范

## 浏览器兼容性

## 参见

- `Array.prototype.reverse()`
