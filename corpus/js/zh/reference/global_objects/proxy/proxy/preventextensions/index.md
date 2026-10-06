---
id: "js-zh-syntax-web-javascript-reference-global_objects-proxy-proxy-preventextensions"
language: "js"
lang: "zh"
category: "syntax"
name: "handler.preventExtensions"
title: "handler.preventExtensions()"
module: "reference\\global_objects\\proxy\\proxy\\preventextensions\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# handler.preventExtensions()

**`handler.preventExtensions()`** 方法用于设置对`Object.preventExtensions()`的拦截

`JavaScript Demo: handler.preventExtensions()`

```js interactive-example
const monster1 = {
  canEvolve: true,
};

const handler1 = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(monster1.canEvolve);
// Expected output: true

Object.preventExtensions(proxy1);

console.log(monster1.canEvolve);
// Expected output: false
```

## 语法

```js
var p = new Proxy(target, {
  preventExtensions: function (target) {},
});
```

### 参数

以下参数传递给 `preventExtensions` 方法。它会绑定到这个 handler.

- `target`
  - : 所要拦截的目标对象。

### 返回值

`preventExtensions` 方法返回一个布尔值。

## 描述

**`handler.preventExtensions()`** 拦截 `Object.preventExtensions()`返回一个布尔值。

### 拦截

这个 trap 可以拦截这些操作：

- `Object.preventExtensions()`
- `Reflect.preventExtensions()`

### 约束

如果违反了下列规则，proxy 则会抛出一个 `TypeError`:

- 如果目标对象是可扩展的，那么只能返回 `false`

## 示例

以下代码演示了如何拦截`Object.preventExtensions()`。

```js
var p = new Proxy(
  {},
  {
    preventExtensions: function (target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p)); // "called"; outputs false
```

以下代码违反了约束。

```js
var p = new Proxy(
  {},
  {
    preventExtensions: function (target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // 抛出类型错误
```

## 规范

## 浏览器兼容性

## 参考

- `Proxy`
- `Proxy/Proxy`
- `Object.preventExtensions()`
- `Reflect.preventExtensions()`
