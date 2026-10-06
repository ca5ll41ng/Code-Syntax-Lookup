---
id: "js-zh-syntax-web-javascript-reference-global_objects-proxy-proxy"
language: "js"
lang: "zh"
category: "syntax"
name: "Proxy() 构造函数"
title: "Proxy() 构造函数"
module: "reference\\global_objects\\proxy\\proxy\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Proxy() 构造函数

**`Proxy()`** 构造函数用于创建 `Proxy` 对象。

## 语法

```js-nolint
new Proxy(target, handler)
```

> [!NOTE]
> `Proxy()` 只能通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 关键字来调用。如果不使用 `new` 关键字调用，则会抛出 `TypeError`。

### 参数

- `target`
  - : `Proxy` 会对目标（target）对象进行包装。它可以是任何类型的对象，包括原生的数组、函数甚至是另一个代理对象。
- `handler`
  - : 一个对象，其属性是定义了在对代理执行操作时的行为的函数。

## 描述

可以使用 `Proxy()` 构造函数来创建一个新的 `Proxy` 对象。构造函数接收两个必须的参数：

- `target` 是要创建代理的对象
- `handler` 是定义了代理的自定义行为的对象

一个空的处理器（handler）将会创建一个与被代理对象行为几乎完全相同的代理对象。通过在 `handler` 对象上定义一组函数，你可以自定义被代理对象的一些特定行为。例如，通过定义 `get()` 你就可以自定义被代理对象的[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)。

### 处理器函数

本节列出了所有你可以自定义的处理函数。处理器函数有时候也被称为*劫持*（trap），这是由于它们会对底层被代理对象的调用进行劫持。

- `Proxy/Proxy/apply`
  - : 函数调用劫持。
- `Proxy/Proxy/construct`
  - : `new` 运算符劫持。
- `Proxy/Proxy/defineProperty`
  - : `Object.defineProperty` 调用劫持。
- `Proxy/Proxy/deleteProperty`
  - : `delete` 运算符劫持。
- `Proxy/Proxy/get`
  - : 获取属性值劫持。
- {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : `Object.getOwnPropertyDescriptor` 调用劫持。
- `Proxy/Proxy/getPrototypeOf`
  - : `Object.getPrototypeOf` 调用劫持。
- `Proxy/Proxy/has`
  - : `Operators/in` 运算符劫持。
- `Proxy/Proxy/isExtensible`
  - : `Object.isExtensible` 调用劫持。
- `Proxy/Proxy/ownKeys`
  - : `Object.getOwnPropertyNames` 和`Object.getOwnPropertySymbols` 调用劫持。
- `Proxy/Proxy/preventExtensions`
  - : `Object.preventExtensions` 调用劫持。
- `Proxy/Proxy/set`
  - : 设置属性值劫持。
- `Proxy/Proxy/setPrototypeOf`
  - : `Object.setPrototypeOf` 调用劫持。

## 示例

### 选择性代理属性访问器

本示例中，被代理对象有两个属性：`notProxied` 和 `proxied`。我们定义了一个处理器，它为 `proxied` 属性返回一个不同的值，而其他属性则通过目标获取。

```js
const target = {
  notProxied: "原始值",
  proxied: "原始值",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "替换值";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "原始值"
console.log(proxy.proxied); // "替换值"
```

## 规范

## 浏览器兼容性

## 参见

- [元编程](/zh-CN/docs/Web/JavaScript/Guide/Meta_programming)指南
- `Reflect`
