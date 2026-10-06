---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getmonth"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getMonth"
title: "Date.prototype.getMonth()"
module: "reference\\global_objects\\date\\getmonth\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getMonth()

**`getMonth()`** 方法根据本地时间，返回一个指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。

`JavaScript Demo: Date.getMonth()`

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getMonth()); // (January gives 0)
// Expected output: 6
```

## 语法

```js-nolint
getMonth()
```

### 参数

无

### 返回值

`getMonth`返回一个 0 到 11 的整数值：0 代表一月份，1 代表二月份，2 代表三月份，依次类推。

## 示例

### 使用 `getMonth()`

下面第二条语句，基于 `Date` 对象 Xmas95 的值，把 11 赋值给变量 `month`。

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var month = Xmas95.getMonth();

console.log(month); // 11
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getUTCMonth()`
- `Date.prototype.setMonth()`
