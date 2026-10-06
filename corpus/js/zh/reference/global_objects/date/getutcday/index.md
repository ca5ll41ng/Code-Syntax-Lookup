---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getutcday"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getUTCDay"
title: "Date.prototype.getUTCDay()"
module: "reference\\global_objects\\date\\getutcday\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCDay()

**`getUTCDay()`** 方法以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天。

`JavaScript Demo: Date.getUTCDay()`

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Tuesday
console.log(date1.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date2.getUTCDay());
// Expected output: 3
```

## 语法

```js-nolint
dateObj.getUTCDay()
```

### 参数

无。

### 返回值

`getUTCDay()` 方法返回一个对应一星期中第几天的整数：0 代表星期天，1 代表星期一，2 代表星期二，依次类推。

## 示例

### 示例：使用 `getUTCDay()` 方法

下面的例子是把当前日期的星期部分赋值给变量 `weekday`。

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getUTCDate()`
- `Date.prototype.getDay()`
- `Date.prototype.setUTCDate()`
