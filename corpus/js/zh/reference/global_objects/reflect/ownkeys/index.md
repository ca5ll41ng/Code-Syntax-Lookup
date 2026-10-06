---
id: "js-zh-syntax-web-javascript-reference-global_objects-reflect-ownkeys"
language: "js"
lang: "zh"
category: "syntax"
name: "Reflect.ownKeys"
title: "Reflect.ownKeys()"
module: "reference\\global_objects\\reflect\\ownkeys\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Reflect.ownKeys()

静态方法 **`Reflect.ownKeys()`** 返回一个由目标对象自身的属性键组成的数组。

`JavaScript Demo: Reflect.ownKeys()`

```js interactive-example
const object1 = {
  property1: 42,
  property2: 13,
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// Expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// Expected output: Array ["length"]
```

## 语法

```js-nolint
Reflect.ownKeys(target)
```

### 参数

- `target`
  - : 获取自身属性键的目标对象。

### 返回值

由目标对象的自身属性键组成的 `Array`。

### 异常

如果目标不是 `Object`，抛出一个 `TypeError`。

## 描述

`Reflect.ownKeys` 方法返回一个由目标对象自身的属性键组成的数组。它的返回值等同于 ``Object.getOwnPropertyNames`(target).concat(`Object.getOwnPropertySymbols`(target))`。

## 示例

### 使用 `Reflect.ownKeys()`

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
```

## 规范

## 浏览器兼容性

## 参见

- `Reflect`
- `Object.getOwnPropertyNames()`
