---
id: "js-zh-syntax-web-javascript-reference-global_objects-float32array"
language: "js"
lang: "zh"
category: "syntax"
name: "Float32Array"
title: "Float32Array"
module: "reference\\global_objects\\float32array\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Float32Array"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Float32Array

**`Float32Array`** 类型数组代表的是平台字节顺序为 32 位的浮点数型数组 (对应于 C 浮点数据类型) 。如果需要控制字节顺序，使用 `DataView` 替代。其内容初始化为 `0`。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

## 语法

```plain
new Float32Array(length);
new Float32Array(typedArray);
new Float32Array(object);
new Float32Array(buffer [, byteOffset [, length]]);
```

更多的语法信息和参数，参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#syntax)。_

## 静态属性

- `TypedArray.BYTES_PER_ELEMENT`
  - : 返回元素字节数。在 `Float32Array` 的情况下返回 4。
- Float32Array.length
  - : 长度属性的值为 3。关于其实际长度 (元素数量) 参见`TypedArray.prototype.length`。
- `TypedArray`
  - : _TypedArray_ 对象的原型。

## 静态方法

- `TypedArray.from`
  - : 从一个类数组对象或可遍历对象创建一个新的 Float32Array。参见 `Array.from()`。
- `TypedArray.of`
  - : 用可变数量的参数创建一个新的 Float32Array。参见 `Array.of()`。

## 实例属性

_还从其父接口 `TypedArray` 继承实例属性。_

- `Float32Array.prototype.constructor`
  - : 返回创建这个实例原型的函数。这是 `Float32Array` 默认的构造函数。
- `TypedArray.prototype.buffer` 
  - : 返回这个`Float32Array` 引用的 `ArrayBuffer`。构造时已固定，所以是**只读**的。
- `TypedArray.prototype.byteLength` 
  - : 返回从`Float32Array` 的 `ArrayBuffer` 开头开始的长度 (以字节为单位) 。构造时已固定，所以是**只读**的。
- `TypedArray.prototype.byteOffset` 
  - : 返回从`Float32Array` 的 `ArrayBuffer` 开头开始的偏移量（以字节为单位）。构造时已固定，所以是**只读**的。
- `TypedArray.prototype.length` 
  - : 返回 `Float32Array` 中的元素个数。构造时已固定，所以是**只读**的。

## 实例方法

_从其父接口 `TypedArray` 继承实例方法。_

## 示例

```js
// From a length
var float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Float32Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float32Array([21, 31]);
var y = new Float32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Float32Array(buffer, 0, 4);
```

## 规范

## 浏览器兼容性

## 一致性提示

从 ECMAScript 2015 (ES6) 开始， `Float32Array`构造函数需要用一个`new`操作符来构造。现在直接把`Float32Array 构造函数当函数调用而不使用 new，会抛出一个``TypeError`。

```js example-bad
var dv = Float32Array([1, 2, 3]);
// TypeError: calling a builtin Float32Array constructor
// 不允许不使用 new
```

```js example-good
var dv = new Float32Array([1, 2, 3]);
```

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- `ArrayBuffer`
- `DataView`
