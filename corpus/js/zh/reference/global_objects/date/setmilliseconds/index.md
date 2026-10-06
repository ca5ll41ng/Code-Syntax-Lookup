---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-setmilliseconds"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.setMilliseconds"
title: "Date.prototype.setMilliseconds()"
module: "reference\\global_objects\\date\\setmilliseconds\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.setMilliseconds()

`Date` 实例的 **`setMilliseconds()`** 方法会根据本地时间设置一个日期对象的毫秒数。

`JavaScript Demo: Date.setMilliseconds()`

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// Expected output: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Expected output: 456
```

## 语法

```js-nolint
setMilliseconds(millisecondsValue)
```

### 参数

- `millisecondsValue`
  - : 一个在 0 到 999 之间的整数，表示毫秒数。

### 返回值

原地更改 `Date` 对象，并返回新的[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)。如果 `millisecondsValue` 是 `NaN`（或任何其他经[强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)后得到 `NaN` 的值，如 `undefined`），日期会被设置为[无效日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)，并返回 `NaN`。

## 描述

如果指定的数字超出了合理范围，则 `Date` 对象的时间信息会被相应地更新。例如，如果指定了 1005，则秒数加 1，毫秒数为 5。

## 示例

### 使用 setMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getMilliseconds()`
- `Date.prototype.setUTCMilliseconds()`
