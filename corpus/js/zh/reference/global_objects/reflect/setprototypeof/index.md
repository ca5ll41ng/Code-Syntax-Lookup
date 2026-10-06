---
id: "js-zh-syntax-web-javascript-reference-global_objects-reflect-setprototypeof"
language: "js"
lang: "zh"
category: "syntax"
name: "Reflect.setPrototypeOf"
title: "Reflect.setPrototypeOf()"
module: "reference\\global_objects\\reflect\\setprototypeof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Reflect.setPrototypeOf()

除了返回类型以外，静态方法 **`Reflect.setPrototypeOf()`** 与 `Object.setPrototypeOf()` 方法是一样的。它可设置对象的原型（即内部的 `Prototype` 属性）为另一个对象或 `null`，如果操作成功返回 `true`，否则返回 `false`。

`JavaScript Demo: Reflect.setPrototypeOf()`

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// Expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// Expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// Expected output: false
```

## 语法

```js-nolint
Reflect.setPrototypeOf(target, prototype)
```

### 参数

- _`target`_
  - : 设置原型的目标对象。
- _`prototype`_
  - : 对象的新原型（一个对象或 `null`）。

### 返回值

返回一个 `Boolean` 值表明是否原型已经成功设置。

### 异常

如果 _`target`_ 不是 `Object` ，或 *`prototype` *既不是对象也不是 `null`，抛出一个 `TypeError` 异常。

## 描述

`Reflect.setPrototypeOf` 方法改变指定对象的原型（即，内部的 `Prototype` 属性值）。

## 示例

### 使用 `Reflect.setPrototypeOf()`

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's Prototype to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
var target = {};
var proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## 规范

## 浏览器兼容性

## 参见

- `Reflect`
- `Object.setPrototypeOf()`
