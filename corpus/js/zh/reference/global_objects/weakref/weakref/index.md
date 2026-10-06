---
id: "js-zh-syntax-web-javascript-reference-global_objects-weakref-weakref"
language: "js"
lang: "zh"
category: "syntax"
name: "WeakRef() 构造函数"
title: "WeakRef() 构造函数"
module: "reference\\global_objects\\weakref\\weakref\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakRef() 构造函数

**`WeakRef()`** 会创建一个 `WeakRef` 对象，它是对于目标对象的弱引用。

## 语法

```js-nolint
new WeakRef(targetObject)
```

> [!NOTE]
> `WeakRef()` 必须通过 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 关键字调用。试图在没有 `new` 的情况下调用会抛出一个 `TypeError`。

### 参数

- `targetObject`
  - : WeakRef 要指向的目标对象 (也称作 _referent_）。

## 示例

### 创建一个新的 WeakRef 对象

完整的示例请见 [`WeakRef`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#例子) 主页面。

```js
class Counter {
  constructor(element) {
    // 创建一个对 DOM 元素的弱引用
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## 规范

## 浏览器兼容性

## 参见

- `WeakRef`
