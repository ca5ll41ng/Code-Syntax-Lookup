---
id: "js-zh-syntax-web-javascript-reference-global_objects-proxy-proxy-deleteproperty"
language: "js"
lang: "zh"
category: "syntax"
name: "handler.deleteProperty"
title: "handler.deleteProperty()"
module: "reference\\global_objects\\proxy\\proxy\\deleteproperty\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# handler.deleteProperty()

**`handler.deleteProperty()`** 方法用于拦截对对象属性的 `delete` 操作。

## 语法

```js
var p = new Proxy(target, {
  deleteProperty: function (target, property) {},
});
```

### 参数

`deleteProperty` 方法将会接受以下参数。`this` 被绑定在 handler 上。

- `target`
  - : 目标对象。
- `property`
  - : 待删除的属性名。

### 返回值

`deleteProperty` 必须返回一个 `Boolean` 类型的值，表示了该属性是否被成功删除。

## 描述

**`handler.deleteProperty()`** 方法可以拦截 `delete` 操作。

### 拦截

该方法会拦截以下操作：

- 删除属性：`delete proxy[foo]` 和 `delete proxy.foo`
- `Reflect.deleteProperty()`

### 不变量

如果违背了以下不变量，proxy 将会抛出一个 `TypeError`:

- 如果目标对象的属性是不可配置的，那么该属性不能被删除。

## 示例

以下代码演示了对 `delete` 操作的拦截。

```js
var p = new Proxy(
  {},
  {
    deleteProperty: function (target, prop) {
      console.log("called: " + prop);
      return true;
    },
  },
);

delete p.a; // "called: a"
```

## 规范

## 浏览器兼容性

## 参见

- `Proxy`
- `Proxy/Proxy`
- `delete` 操作符
- `Reflect.deleteProperty()`
