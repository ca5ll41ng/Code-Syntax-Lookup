---
id: "js-zh-syntax-web-javascript-reference-global_objects-boolean-tostring"
language: "js"
lang: "zh"
category: "syntax"
name: "Boolean.prototype.toString"
title: "Boolean.prototype.toString()"
module: "reference\\global_objects\\boolean\\tostring\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Boolean.prototype.toString()

**`toString()`** 方法返回表示指定的布尔对象的字符串。

`JavaScript Demo: Boolean.toString()`

```js interactive-example
const flag1 = new Boolean(true);

console.log(flag1.toString());
// Expected output: "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// Expected output: "true"
```

## 语法

```js-nolint
toString()
```

### 返回值

一个表示特定 `Boolean` 对象的字符串。

## 描述

`Boolean` 对象覆盖了 `Object` 对象的 `toString` 方法。并没有继承 `Object.prototype.toString()`。对于布尔对象，`toString` 方法返回一个表示该对象的字符串。

当一个 `Boolean` 对象作为文本值或进行字符串连接时，JavaScript 会自动调用其 `toString` 方法。

对于 `Boolean` 对象或值，内置的 `toString` 方法返回字符串 `"true"` 或 `"false"`，具体返回哪个取决于布尔对象的值。

## 示例

### 使用 toString()

下面的代码，`flag.toString()` 返回 `"true"`：

```js
const flag = new Boolean(true);
const myVar = flag.toString();
```

## 规范

## 浏览器兼容性

## 参见

- `Object.prototype.toString()`
