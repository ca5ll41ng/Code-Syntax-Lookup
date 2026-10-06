---
id: "js-zh-syntax-web-javascript-reference-global_objects-reflect-getprototypeof"
language: "js"
lang: "zh"
category: "syntax"
name: "Reflect.getPrototypeOf"
title: "Reflect.getPrototypeOf()"
module: "reference\\global_objects\\reflect\\getprototypeof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Reflect.getPrototypeOf()

静态方法 **`Reflect.getPrototypeOf()`** 与 `Object.getPrototypeOf()` 方法几乎是一样的。都是返回指定对象的原型（即内部的 `Prototype` 属性的值）。

`JavaScript Demo: Reflect.getPrototypeOf()`

```js interactive-example
const object1 = {
  property1: 42,
};

const proto1 = Reflect.getPrototypeOf(object1);

console.log(proto1);
// Expected output: Object {  }

console.log(Reflect.getPrototypeOf(proto1));
// Expected output: null
```

## 语法

```js-nolint
Reflect.getPrototypeOf(target)
```

### 参数

- `target`
  - : 获取原型的目标对象。

### 返回值

给定对象的原型。如果给定对象没有继承的属性，则返回 `null`。

### 异常

如果 `target` 不是 `Object`，抛出一个 `TypeError` 异常。

## 描述

`Reflect.getPrototypeOf` 返回指定对象的原型 (即内部的 `Prototype` 属性的值) 。

## 示例

### 使用 `Reflect.getPrototypeOf()`

```js
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### 与 `Object.getPrototypeOf()` 比较

```plain
// 如果参数为 Object，返回结果相同
Object.getPrototypeOf({})   // Object.prototype
Reflect.getPrototypeOf({})  // Object.prototype

// 在 ES5 规范下，对于非 Object，抛异常
Object.getPrototypeOf('foo')   // Throws TypeError
Reflect.getPrototypeOf('foo')  // Throws TypeError

// 在 ES2015 规范下，Reflect 抛异常，Object 强制转换非 Object
Object.getPrototypeOf('foo')   // String.prototype
Reflect.getPrototypeOf('foo')  // Throws TypeError

// 如果想要模拟 Object 在 ES2015 规范下的表现，需要强制类型转换
Reflect.getPrototypeOf(Object('foo'))  // String.prototype
```

## 规范

## 浏览器兼容性

## 参见

- `Reflect`
- `Object.getPrototypeOf()`
