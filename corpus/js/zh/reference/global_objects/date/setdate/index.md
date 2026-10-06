---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-setdate"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.setDate"
title: "Date.prototype.setDate()"
module: "reference\\global_objects\\date\\setdate\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.setDate()

**`setDate()`** 方法根据本地时间来指定一个日期对象的天数。

`JavaScript Demo: Date.setDate()`

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setDate(24);

console.log(event.getDate());
// Expected output: 24

event.setDate(32);
// Only 31 days in August!

console.log(event.getDate());
// Expected output: 1
```

## 语法

```js-nolint
dateObj.setDate(dayValue)
```

### 参数

- `dayValue`
  - : 一个整数，表示该月的第几天。

## 描述

如果 `dayValue` 超出了月份的合理范围，`setDate` 将会相应地更新 `Date` 对象。

例如，如果为 `dayValue` 指定 0，那么日期就会被设置为上个月的最后一天。

如果 dayValue 被设置为负数，日期会设置为上个月最后一天往前数这个负数绝对值天数后的日期。-1 会设置为上月最后一天的前一天（译者注：例如当前为 4 月，如果 setDate(-2),则为 3 月 29 日）

## 示例

### 示例：使用`setDate`方法

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24); // 1962-07-24
theBigDay.setDate(32); // 1962-08-01
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getDate()`
- `Date.prototype.setUTCDate()`
