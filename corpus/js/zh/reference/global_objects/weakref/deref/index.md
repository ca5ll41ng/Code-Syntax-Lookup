---
id: "js-zh-syntax-web-javascript-reference-global_objects-weakref-deref"
language: "js"
lang: "zh"
category: "syntax"
name: "WeakRef.prototype.deref"
title: "WeakRef.prototype.deref()"
module: "reference\\global_objects\\weakref\\deref\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakRef.prototype.deref()

`deref`方法返回`WeakRef` 实例的目标对象，如果目标对象已被垃圾收集，则返回`undefined` 。

## 语法

```plain
obj = ref.deref();
```

### 返回值

返回 WeakRef 的目标对象，如果该对象已被垃圾收集，则返回`undefined` 。

## 说明

有关一些重要说明，请参阅`WeakRef`页面上的[Notes on WeakRefs](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) 。

## 示例

### 使用 deref

有关[完整示例](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples)，请参阅`WeakRef`页面的示例部分。

```js
const tick = () => {
  // Get the element from the weak reference, if it still exists
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // The element doesn't exist anymore
    console.log("The element is gone.");
    this.stop();
    this.ref = null;
  }
};
```

## 规范

## 浏览器兼容性

## 参见

- `WeakRef`
