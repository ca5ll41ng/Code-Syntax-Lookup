---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-totemporalinstant"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.toTemporalInstant"
title: "Date.prototype.toTemporalInstant()"
module: "reference\\global_objects\\date\\totemporalinstant\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.toTemporalInstant()

`Date` 实例的 **`toTemporalInstant()`** 方法返回一个新的 `Temporal.Instant` 对象，该对象的 `Temporal/Instant/epochMilliseconds` 值与当前日期的[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期) 相同。

可以使用此方法将传统的 `Date` 值转换为 `Temporal` API 格式，然后根据需要进一步将其转换为其他 `Temporal` 类。

## 语法

```js-nolint
toTemporalInstant()
```

### 参数

无。

### 返回值

一个新的 `Temporal.Instant` 对象，其 `Temporal/Instant/epochMilliseconds` 值与当前日期的时间戳相同。其的微秒和纳秒部分始终是 `0`。

### 异常

- `RangeError`
  - : 如果日期[无效](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)（其时间戳为 `NaN`）则抛出此异常。

## 示例

### 使用 toTemporalInstant()

```js
const legacyDate = new Date("2021-07-01T12:34:56.789Z");
const instant = legacyDate.toTemporalInstant();

// 进一步将其转换为其他对象
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## 规范

## 浏览器兼容性

## 参见

- `Temporal.Instant`
- `Temporal.ZonedDateTime`
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
