---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-sort"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.sort"
title: "TypedArray.prototype.sort()"
module: "reference\\global_objects\\typedarray\\sort\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.sort()

**`sort()`** 方法*原地*排序类型化数组的元素，并且返回类型化数组。这个方法的算法和`Array.prototype.sort()` 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象) 之一。

## 语法

```js-nolint
sort()
sort(compareFn)
```

### 参数

- `compareFunction` 
  - : 指定定义排序顺序的函数

### 返回值

排序后的类型化数组。

## 示例

更多示例请参考 `Array.prototype.sort()` 方法。

```js
var numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// 在这里，按数值排序数值时，
// 不需要比较函数。

var numbers = [40, 1, 5, 200];
numbers.sort();
// 将元素作为字符串来排序。
// [1, 200, 40, 5]

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);
// [ 1, 5, 40, 200 ]
```

## 规范

## 浏览器兼容性

## 参见

- `Array.prototype.sort()`
