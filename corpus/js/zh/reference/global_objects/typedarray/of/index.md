---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-of"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.of"
title: "TypedArray.of()"
module: "reference\\global_objects\\typedarray\\of\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.of()

`TypedArray.of()` 方法创建一个具有可变数量参数的新[类型数组](/zh-CN/docs/Web)。此方法几乎与 `Array.of()` 相同。

## 语法

```js-nolint
TypedArray.of(element0)
TypedArray.of(element0, element1)
TypedArray.of(element0, element1, /* ... ,*/ elementN)
```

### 参数

- `elementN`
  - : 创建类型数组的元素。

### 返回值

一个新的 `TypedArray` 实例。

## 描述

`Array.of()` 和 `TypedArray.of()` 之间的一些细微区别：

- 如果传递给 `TypedArray.of()` 的 `this` 值不是构造函数，`TypedArray.of()` 将抛出`TypeError`，而 `Array.of()` 默认创建一个新的 `Array`。
- `TypedArray.of` 使用 \[\[Put]] 其中 Array.of 使用 \[\[DefineProperty]]。因此，当使用`Proxy` 对象时，它调用 `Global_Objects/Proxy/Proxy/set` 创建新的元素，而不是 `Global_Objects/Proxy/Proxy/defineProperty`。

## 范例

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // IntArray [ 0 ]
```

## 规范

## 浏览器兼容性

## 参见

- `TypedArray.from()`
- `Array.of()`
