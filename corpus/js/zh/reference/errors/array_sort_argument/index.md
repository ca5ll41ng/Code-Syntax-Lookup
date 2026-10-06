---
id: "js-zh-syntax-web-javascript-reference-errors-array_sort_argument"
language: "js"
lang: "zh"
category: "syntax"
name: "TypeError: invalid Array.prototype.sort argument"
title: "TypeError: invalid Array.prototype.sort argument"
module: "reference\\errors\\array_sort_argument\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Array_sort_argument"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypeError: invalid Array.prototype.sort argument

JavaScript 异常“invalid Array.prototype.sort argument”会在 `Array.prototype.sort()` 方法（以及其相关方法：`Array.prototype.toSorted()`、`TypedArray.prototype.sort()`、`TypedArray.prototype.toSorted()`）的参数既不是 `undefined` 也不是用于比较其操作数的函数时触发。

## 消息

```plain
TypeError: The comparison function must be either a function or undefined（基于 V8）

TypeError: invalid Array.prototype.sort argument (Firefox)
TypeError: non-function passed to Array.prototype.toSorted (Firefox)
TypeError: invalid %TypedArray%.prototype.sort argument (Firefox)

TypeError: Array.prototype.sort requires the comparator argument to be a function or undefined (Safari)
TypeError: Array.prototype.toSorted requires the comparator argument to be a function or undefined (Safari)
TypeError: TypedArray.prototype.sort requires the comparator argument to be a function or undefined (Safari)
TypeError: TypedArray.prototype.toSorted requires the comparator argument to be a function or undefined (Safari)
```

## 错误类型

`TypeError`

## 什么地方出错了？

`Array.prototype.sort()` 方法（以及其相关方法：`Array.prototype.toSorted()`、`TypedArray.prototype.sort()`、`TypedArray.prototype.toSorted()`）的参数应为 `undefined` 或用于比较其操作数的函数。

## 示例

### 无效示例

```js example-bad
[1, 3, 2].sort(5); // TypeError
students.toSorted("name"); // TypeError
```

### 有效示例

```js example-good
[1, 3, 2].sort(); // [1, 2, 3]
[1, 3, 2].sort((a, b) => a - b); // [1, 2, 3]
students.toSorted((a, b) => a.name.localeCompare(b.name));
```

## 参见

- `Array.prototype.sort()`
- `Array.prototype.toSorted()`
- `TypedArray.prototype.sort()`
- `TypedArray.prototype.toSorted()`
