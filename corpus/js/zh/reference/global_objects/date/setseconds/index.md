---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-setseconds"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.setSeconds"
title: "Date.prototype.setSeconds()"
module: "reference\\global_objects\\date\\setseconds\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.setSeconds()

**`setSeconds()`** 方法根据本地时间设置一个日期对象的秒数。

`JavaScript Demo: Date.setSeconds()`

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## 语法

```plain
dateObj.setSeconds(secondsValue[, msValue])
```

### JavaScript 1.3 之前版本

```plain
dateObj.setSeconds(secondsValue)
```

### 参数

- `secondsValue`
  - : 一个 0 到 59 的整数。
- `msValue`
  - : 一个 0 到 999 的数字，表示微秒数。

## 描述

如果没有指定 `msValue` 参数，就会使用 `Date.getMilliseconds` 方法的返回值。

如果一个参数超出了合理范围， `setSeconds` 方法会相应地更新日期对象的时间信息。例如，为 `secondsValue` 指定 100，则日期对象的分钟数会相应地加 1，秒数将会使用 40。

## 示例

### 示例：使用`setSeconds` 方法

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getSeconds()`
- `Date.prototype.setUTCSeconds()`
