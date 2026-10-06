---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-setminutes"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.setMinutes"
title: "Date.prototype.setMinutes()"
module: "reference\\global_objects\\date\\setminutes\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.setMinutes()

**`setMinutes()`** 方法根据本地时间为一个日期对象设置分钟数。

`JavaScript Demo: Date.setMinutes()`

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMinutes(45);

console.log(event.getMinutes());
// Expected output: 45

console.log(event);
// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## 语法

```plain
dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
```

### JavaScript 1.3 之前版本

```plain
dateObj.setMinutes(minutesValue)
```

### 参数

- `minutesValue`
  - : 一个 0 到 59 的整数，表示分钟数。
- `secondsValue`
  - : 一个 0 到 59 的整数，表示秒数。如果指定了 `secondsValue` 参数，则必须同时指定 `minutesValue` 参数。
- `msValue`
  - : 一个 0 到 999 的数字，表示微秒数，如果指定了 `msValue` 参数，则必须同时指定 `minutesValue` 和`secondsValue` 参数。

## 描述

如果没有指定 `secondsValue` 和 `msValue` 参数，就会使用 `Date.getSeconds` 和 `Date.getMilliseconds` 方法的返回值。

如果有一个指定的参数超出了合理范围，`setMinutes` 会相应地更新日期对象中的时间信息。例如，为 `secondsValue` 指定 100，分钟数将会加 1，而秒数会为 40。

## 示例

### 示例：使用`setMinutes` 方法

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getMinutes()`
- `Date.prototype.setUTCMinutes()`
