---
id: "js-zh-syntax-web-javascript-reference-global_objects-proxy-proxy-setprototypeof"
language: "js"
lang: "zh"
category: "syntax"
name: "handler.setPrototypeOf"
title: "handler.setPrototypeOf()"
module: "reference\\global_objects\\proxy\\proxy\\setprototypeof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# handler.setPrototypeOf()

**`handler.setPrototypeOf()`** 方法主要用来拦截 `Object.setPrototypeOf()`.

## 语法

```js
var p = new Proxy(target, {
  setPrototypeOf: function (target, prototype) {},
});
```

### 参数

以下参数传递给 `setPrototypeOf` 方法。

- `target`
  - : 被拦截目标对象。
- `prototype`
  - : 对象新原型或为`null`.

### 返回值

如果成功修改了`Prototype`, `setPrototypeOf` 方法返回 `true`,否则返回 `false`.

## 描述

这个 **`handler.setPrototypeOf`** 方法用于拦截 `Object.setPrototypeOf()`.

### 拦截

这个方法可以拦截以下操作：

- `Object.setPrototypeOf()`
- `Reflect.setPrototypeOf()`

### Invariants

如果违反了下列规则，则 proxy 将抛出一个 `TypeError`：

- `如果 target` 不可扩展，原型参数必须与 `Object.getPrototypeOf(target)` 的值相同。

## 示例

如果你不想为你的对象设置一个新的原型，你的 handler 的 `setPrototypeOf` 方法可以返回 false，也可以抛出异常。

The former approach means that any operation that performs such mutation, that throws an exception on failure to mutate, will have to create the exception itself. For example, `Object.setPrototypeOf()` will create and throw a `TypeError` itself. If the mutation is performed by an operation that _doesn't_ ordinarily throw in case of failure, such as `Reflect.setPrototypeOf()`, no exception will be thrown.

```js
var handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

var newProto = {},
  target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

The latter approach will cause _any_ operation that attempts to mutate, to throw. This approach is required if you want even non-throwing operations to throw on failure, or you want to throw a custom exception value.

```js
var handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

var newProto = {},
  target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## Specifications

## Browser compatibility

## See also

- `Proxy`
- `Proxy/Proxy`
- `Object.setPrototypeOf()`
- `Reflect.setPrototypeOf()`
