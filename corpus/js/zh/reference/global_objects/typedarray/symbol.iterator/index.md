---
id: "js-zh-syntax-web-javascript-reference-global_objects-typedarray-symbol-iterator"
language: "js"
lang: "zh"
category: "syntax"
name: "TypedArray.prototype[Symbol.iterator]"
title: "TypedArray.prototype[Symbol.iterator]()"
module: "reference\\global_objects\\typedarray\\symbol.iterator\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypedArray.prototype[Symbol.iterator]()

`TypedArray` 实例的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)以允许类型化数组被大多数期望可迭代对象的语法所使用，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 `Statements/for...of` 循环。它返回一个[数组迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它会以类型化数组中的每个索引的值生成数组。

`JavaScript Demo: TypedArray.prototype[Symbol.iterator]()`

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);
const iterator1 = uint8[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## 语法

```js-nolint
typedArray[Symbol.iterator]()
```

### 返回值

数组的 **迭代器** 函数，通常是 `TypedArray.prototype.values()`函数。

## 示例

### 使用`for...of` 循环的迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
// 你的浏览器必须支持 for..of 循环
// 以及 for 循环中的 let 区域变量
for (let n of arr) {
  console.log(n);
}
```

### 备选迭代

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `TypedArray.prototype[Symbol.iterator]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- `TypedArray`
- `TypedArray.prototype.entries()`
- `TypedArray.prototype.keys()`
- `TypedArray.prototype.values()`
- `Symbol.iterator`
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
