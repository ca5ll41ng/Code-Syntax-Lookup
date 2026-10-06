---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getutcdate"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getUTCDate"
title: "Date.prototype.getUTCDate()"
module: "reference\\global_objects\\date\\getutcdate\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCDate()

**`getUTCDate()`** 方法以世界时为标准，返回一个指定的日期对象为一个月中的第几天

`JavaScript Demo: Date.getUTCDate()`

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// Expected output: 19

console.log(date2.getUTCDate());
// Expected output: 20
```

## 语法

```js-nolint
dateObj.getUTCDate()
```

### 参数

无

### 返回值

`getUTCDate()` 返回一个 1 到 31 的整数值

## 示例

### 示例：使用 `getUTCDate()` 方法

下面的例子是把当前日期的天数部分赋值给变量 `day`.

```js
var today = new Date();
var day = today.getUTCDate();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getDate()`
- `Date.prototype.getUTCDay()`
- `Date.prototype.setUTCDate()`
