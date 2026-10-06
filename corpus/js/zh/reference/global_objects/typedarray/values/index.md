---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-values"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype.values"
title: "TypedArray.prototype.values()"
module: "reference\\global_objects\\typedarray\\values\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype.values()

**`values()`** 返回新的 `Array Iterator` 对象，包含数组中每个下标处的值。

## 语法

```js-nolint
values()
```

### 返回值

新的 **`Array Iterator`** 对象。

## 示例

### 使用`for...of` 循环的迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.values();
// 你的浏览器必须支持 for..of 循环
// 以及 for 循环中的 let 区域变量
for (let n of eArray) {
  console.log(n);
}
```

### 备选迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.values();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `TypedArray.prototype.values` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- `TypedArray`
- `TypedArray.prototype.entries()`
- `TypedArray.prototype.keys()`
- [`TypedArray.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- `Array.prototype.values()`
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
