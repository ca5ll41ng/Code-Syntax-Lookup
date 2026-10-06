---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getutcmonth"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getUTCMonth"
title: "Date.prototype.getUTCMonth()"
module: "reference\\global_objects\\date\\getutcmonth\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCMonth()

**`getUTCMonth()`** 方法以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）。

`JavaScript Demo: Date.getUTCMonth()`

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// Expected output: 11

// January
console.log(date2.getUTCMonth());
// Expected output: 0
```

## 语法

```js-nolint
dateObj.getUTCMonth()
```

### 参数

无。

### 返回值

`getUTCMonth()` 返回一个 0 到 11 的整数，分别对应以下月份：0 代表一月，1 代表二月，2 代表三月，依次类推。

## 示例

### 示例：使用 `getUTCMonth()` 方法

下例将当前时间的月份赋值给变量 `month`。

```js
var today = new Date();
var month = today.getUTCMonth();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getMonth()`
- `Date.prototype.setUTCMonth()`
