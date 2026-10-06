---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-join"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.join"
title: "TypedArray.prototype.join()"
module: "reference\\global_objects\\typedarray\\join\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.join()

**`join()`** 方法将数组中所有元素连接为一个字符串。这个方法的算法和 `Array.prototype.join()` 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
join()
join(separator)
```

### 参数

- `separator`
  - : 可选。指定分隔每个元素的字符串。分隔符按需转换为字符串。如果没有，类型化数组的元素会以逗号 (",") 分隔。

### 返回值

所有元素连接后的字符串。

## 示例

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `TypedArray.prototype.join` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- `TypedArray`
- `TypedArray.prototype.toString()`
- `Array.prototype.join()`
- `String.prototype.split()`
