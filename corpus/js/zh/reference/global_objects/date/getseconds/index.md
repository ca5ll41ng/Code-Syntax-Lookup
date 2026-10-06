---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-getseconds"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.getSeconds"
title: "Date.prototype.getSeconds()"
module: "reference\\global_objects\\date\\getseconds\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getSeconds()

**`getSeconds()`** 方法根据本地时间，返回一个指定的日期对象的秒数。

`JavaScript Demo: Date.getSeconds()`

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// Expected output: 18
```

## 语法

```js-nolint
getSeconds()
```

### 参数

无

### 描述

该方法返回一个 0 到 59 的整数值。

## 示例

### 示例：使用`getSeconds` 方法

下面第二条语句，基于日期对象 `Xmas95` 的值，把 30 赋值给变量 `secs`。

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var secs = Xmas95.getSeconds();
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.getUTCSeconds()`
- `Date.prototype.setSeconds()`
