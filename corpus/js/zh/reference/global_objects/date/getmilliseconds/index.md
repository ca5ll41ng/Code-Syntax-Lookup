---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getmilliseconds"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getMilliseconds"
title: "Date.prototype.getMilliseconds()"
module: "reference\\global_objects\\date\\getmilliseconds\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getMilliseconds()

**`getMilliseconds()`** 方法根据本地时间，返回一个指定的日期对象的毫秒数。

`JavaScript Demo: Date.getMilliseconds()`

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// Expected output: 123
```

## 语法

```js-nolint
getMilliseconds()
```

### 参数

无

### 描述

`getMilliseconds()` 方法返回一个 0 到 999 的整数。

## 示例

### 示例：使用`getMilliseconds`方法

下例中，将当前时间的毫秒数赋值给变量 `ms`。

```js
var ms;
Today = new Date();
ms = Today.getMilliseconds();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getUTCMilliseconds()`
- `Date.prototype.setMilliseconds()`
