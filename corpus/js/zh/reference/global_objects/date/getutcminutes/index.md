---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getutcminutes"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getUTCMinutes"
title: "Date.prototype.getUTCMinutes()"
module: "reference\\global_objects\\date\\getutcminutes\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCMinutes()

**`getUTCMinutes()`** 方法以世界时为标准，返回一个指定的日期对象的分钟数。

`JavaScript Demo: Date.getUTCMinutes()`

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45
```

## 语法

```js-nolint
dateObj.getUTCMinutes()
```

### 参数

无。

### 返回值

`getUTCMinutes()` 返回一个 0 到 59 的整数。

## 示例

### 示例：使用 `getUTCMinutes()` 方法

下例将当前时间的分钟部分赋值给变量 `minutes`。

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getMinutes()`
- `Date.prototype.setUTCMinutes()`
