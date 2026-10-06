---
id: "js-zh-syntax-web-javascript-reference-global_objects-int32array"
language: "js"
lang: "zh"
category: "syntax"
name: "Int32Array"
title: "Int32Array"
module: "reference\\global_objects\\int32array\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Int32Array"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Int32Array

该 **`Int32Array`** 类型表示在平台顺序字节中一个双补码 32 位有符号的整型数组。如果需要控制字节顺序，请改用 `DataView`。此内容的初始化为 `0`。一旦创建，你可以使用对象的方法或者标准数组索引的语法 (即使用括号表示法)。

## 语法

```plain
new Int32Array(length);
new Int32Array(typedArray);
new Int32Array(object);
new Int32Array(buffer [, byteOffset [, length]]);
```

更多关于构造函数语法和参数的详细信息，请参阅*[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#syntax)。*

## 静态属性

- `TypedArray.BYTES_PER_ELEMENT`
  - : Returns a number value of the element size. `4` in the case of an `Int32Array`.
- Int32Array.length
  - : Static length property whose value is 3. For the actual length (number of elements), see `TypedArray.prototype.length`.
- `TypedArray`
  - : Prototype for the _TypedArray_ objects.

## 静态方法

- `TypedArray.from`
  - : 从类似数组或者可迭代对象中创建一个新的 `Int32Array`。另见 `Array.from()`.
- `TypedArray.of`
  - : 创建一个新的具有可变数量参数的 `Int32Array`。另见 `Array.of()`。

## 实例属性

_还从其父接口 `TypedArray` 继承实例属性。_

- `Int32Array.prototype.constructor`
  - : 返回创建实例原型的函数。默认情况下，它是 `Int32Array` 的构造函数。
- `TypedArray.prototype.buffer` 
  - : 返回在构造时被固定的 `Int32Array` 引用的 `ArrayBuffer`，因此只读。
- `TypedArray.prototype.byteLength` 
  - : 返回从其 `ArrayBuffer` 开始的 `Int32Array` 长度的 (以字节为单位)。在构造时被固定，因此只读。
- `TypedArray.prototype.byteOffset` 
  - : 返回从其 `ArrayBuffer` 开始的偏移量 (以字节为单位)。在构造时被固定，因此只读。
- `TypedArray.prototype.length` 
  - : 返回 `Int32ArrayInt32Array` 包含的元素个数。在构造时被固定，因此只读。

## 实例方法

_从其父接口 `TypedArray` 继承实例方法。_

## 示例

不同的方式创建一个 `Int32Array`

```js
// 从一个数字
var int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// 从一个数组
var arr = new Int32Array([21, 31]);
console.log(arr[1]); // 31

// 从一个其他 TypedArray
var x = new Int32Array([21, 31]);
var y = new Int32Array(x);
console.log(y[0]); // 21

// 从一个 ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Int32Array(buffer, 0, 4);
```

## 规范

## 浏览器兼容性

## 兼容性说明

Starting with ECMAScript 2015 (ES6), `In32Array` constructors require to be constructed with a `new` operator. Calling a `Int32Array` constructor as a function without `new`, will throw a `TypeError` from now on.

```js example-bad
var dv = Int32Array([1, 2, 3]);
// TypeError: calling a builtin Int32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int32Array([1, 2, 3]);
```

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- `ArrayBuffer`
- `DataView`
