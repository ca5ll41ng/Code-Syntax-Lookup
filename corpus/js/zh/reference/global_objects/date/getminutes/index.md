---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getminutes"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getMinutes"
title: "Date.prototype.getMinutes()"
module: "reference\\global_objects\\date\\getminutes\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getMinutes()

**`getMinutes()`** 方法根据本地时间，返回一个指定的日期对象的分钟数。

`JavaScript Demo: Date.getMinutes()`

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// Expected output: 20
```

## 语法

```js-nolint
getMinutes()
```

### 参数

无

### 描述

`getMinutes` 返回一个 0 到 59 的整数值。

## 示例

### 示例：使用`getMinutes` 方法

下例中，第二行语句运行过后，变量 `minutes` 的值为 15，也就是说 `Xmas95` 这个日期对象的值为某时 15 分某秒。

```js
var Xmas95 = new Date("December 25, 1995 23:15:00");
var minutes = Xmas95.getMinutes();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getUTCMinutes()`
- `Date.prototype.setMinutes()`
