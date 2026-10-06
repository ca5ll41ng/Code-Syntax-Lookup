---
id: "js-zh-syntax-web-javascript-reference-errors-no_non-null_object"
language: "js"
lang: "zh"
category: "syntax"
name: "'TypeError: \"x\" is not a non-null object'"
title: "'TypeError: \"x\" is not a non-null object'"
module: "reference\\errors\\no_non-null_object\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/No_non-null_object"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 'TypeError: "x" is not a non-null object'

## 提示信息

```plain
TypeError: "x" is not a non-null object (Firefox)
TypeError: Property description must be an object: "x" (Chrome)
TypeError: Invalid value used in weak set (Chrome)
```

## 错误类型

`TypeError`

## 哪里出错了？

在期待出现对象类型的值的地方而没有提供。`null` 不是对象类型，因此不起作用。必须在给定的场景下提供一个合适的对象。

## 示例

### 期望的属性描述器

当使用诸如 `Object.create()` 或 `Object.defineProperty()` 及{jsxref("Object.defineProperties()")}} 方法时，可选的属性描述器参数需要提供一个描述器对象。提供非对象类型的值（例如数字）将会报错：

```js example-bad
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

一个合法的描述器对象类似于下面这样：

```js example-good
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

### `WeakMap` 和 `WeakSet` 对象需要对象类型的键

`WeakMap` 和 `WeakSet` 对象只能存储对象类型的键，而不能使用其他类型的。

```js example-bad
var ws = new WeakSet();
ws.add("foo");
// TypeError: "foo" is not a non-null object
```

用对象类型的值来替换：

```js example-good
ws.add({ foo: "bar" });
ws.add(window);
```

## 相关内容

- `Object.create()`
- `Object.defineProperty()`, `Object.defineProperties()`
- `WeakMap`, `WeakSet`
