---
id: "zh-php-function-function-cal-to-jd"
language: "php"
lang: "zh"
category: "function"
name: "cal_to_jd"
title: "从支持的历法转换为儒略日数"
signature: "int cal_to_jd(int $calendar, int $month, int $day, int $year)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.cal-to-jd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从支持的历法转换为儒略日数

## 说明

```php
int cal_to_jd(int $calendar, int $month, int $day, int $year)
```

`cal_to_jd()` 计算指定 `$calendar` 中某个日期的儒略日数。支持的历法有 `CAL_GREGORIAN`、`CAL_JULIAN`、`CAL_JEWISH` 和 `CAL_FRENCH`。

## 参数

- **`$calendar`** — 要转换的历法，可以是 `CAL_GREGORIAN`、`CAL_JULIAN`、`CAL_JEWISH`、`CAL_FRENCH` 中的一个。
- **`$month`** — 数字类型的月份，根据 `$calendar` 来确定有效范围。
- **`$day`** — 数字类型的日期，根据选定的 `$calendar` 来确定有效范围。
- **`$year`** — 数字类型的年份，根据选定的 `$calendar` 来确定有效范围。

## 返回值

儒略日数。

## 参见

`cal_from_jd()` `frenchtojd()` `gregoriantojd()` `jewishtojd()` `juliantojd()` `unixtojd()`
