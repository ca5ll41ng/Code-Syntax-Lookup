---
id: "js-zh-syntax-web-javascript-reference-global_objects-proxy-proxy-getprototypeof"
language: "js"
lang: "zh"
category: "syntax"
name: "handler.getPrototypeOf"
title: "handler.getPrototypeOf()"
module: "reference\\global_objects\\proxy\\proxy\\getprototypeof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# handler.getPrototypeOf()

**`handler.getPrototypeOf()`** 是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用。

`JavaScript Demo: handler.getPrototypeOf()`

```js interactive-example
const monster1 = {
  eyeCount: 4,
};

const monsterPrototype = {
  eyeCount: 2,
};

const handler = {
  getPrototypeOf(target) {
    return monsterPrototype;
  },
};

const proxy1 = new Proxy(monster1, handler);

console.log(Object.getPrototypeOf(proxy1) === monsterPrototype);
// Expected output: true

console.log(Object.getPrototypeOf(proxy1).eyeCount);
// Expected output: 2
```

## 语法

```js
const p = new Proxy(obj, {
  getPrototypeOf(target) {
  ...
  }
});
```

### 参数

当 `getPrototypeOf` 方法被调用时，`this` 指向的是它所属的处理器对象。

- `target`
  - : 被代理的目标对象。

### 返回值

`getPrototypeOf` 方法的返回值必须是一个对象或者 `null`。

## 描述

在 JavaScript 中，下面这五种操作（方法/属性/运算符）可以触发 JS 引擎读取一个对象的原型，也就是可以触发 `getPrototypeOf()` 代理方法的运行：

- `Object.getPrototypeOf()`
- `Reflect.getPrototypeOf()`
- [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- `Object.prototype.isPrototypeOf()`
- `instanceof`

如果遇到了下面两种情况，JS 引擎会抛出 `TypeError` 异常：

- `getPrototypeOf()` 方法返回的不是对象也不是 `null`。
- 目标对象是不可扩展的，且 `getPrototypeOf()` 方法返回的原型不是目标对象本身的原型。

## 示例

### 基本用法

```js
var obj = {};
var proto = {};
var handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### 5 种触发 getPrototypeOf 代理方法的方式

```js
var obj = {};
var p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### 两种情况下的异常

```js
var obj = {};
var p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
```

## 规范

## 浏览器兼容性

## 参见

- `Proxy`
- `Proxy/Proxy`
- `Object.getPrototypeOf()`
- `Reflect.getPrototypeOf()`
