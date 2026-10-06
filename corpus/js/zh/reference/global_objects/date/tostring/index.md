---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-tostring"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.toString"
title: "Date.prototype.toString()"
module: "reference\\global_objects\\date\\tostring\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.toString()

**`toString()`** 方法返回一个字符串，以本地的时区表示该 `Date` 对象。

`JavaScript Demo: Date.toString()`

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toString());
// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## 语法

```js-nolint
toString()
```

### 返回值

一个表示给定 date 对象的字符串。

## 描述

`Date` 对象覆盖了 `Object` 对象的 `toString()` 方法。`Date.prototype.toString()` 返回一个字符串，并以本地时区表示该 Date 对象，包含日期和时间——将 [`toDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) 和 [`toTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) 通过一个空格拼接起来。

例如：“Thu Jan 01 1970 12:42:04 GMT+0800 (中国标准时间)”。

当 Date 被强制转换为字符串时，`toString()` 方法会被自动调用，例如：`const today = 'Today is ' + new Date()`。

`Date.prototype.toString()` 必须在 `Date` 实例上调用，如果 `this` 的值不是继承自 `Date.prototype`，则抛出 `TypeError`。

- 如果你只想获取*日期*，请使用 [`toDateString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)。
- 如果你只想获取*时间*，请使用 [`toTimeString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString)。
- 如果你想要获取 UTC 时间而非本地时间，请使用 [`toUTCString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)。
- 如果你想要以对用户更加友好的格式（例如，本地化）输出字符串，请使用 [`toLocaleString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)。

## 示例

### 使用 toString()

```js
const x = new Date();
console.log(x.toString()); // Wed Sep 09 1998 05:36:22 GMT+0800 (中国标准时间)
```

## 规范

## 浏览器兼容性

## 参见

- `Object.prototype.toString()`
- `Date.prototype.toDateString()`
- `Date.prototype.toLocaleString()`
- `Date.prototype.toTimeString()`
