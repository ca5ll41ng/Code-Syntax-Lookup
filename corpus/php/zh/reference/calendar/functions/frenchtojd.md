---
id: "zh-php-function-function-frenchtojd"
language: "php"
lang: "zh"
category: "function"
name: "frenchtojd"
title: "从法国共和历日期转换为儒略日数"
signature: "int frenchtojd(int $month, int $day, int $year)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.frenchtojd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从法国共和历日期转换为儒略日数

## 说明

```php
int frenchtojd(int $month, int $day, int $year)
```

从法国历日期转换为儒略日数。

该函数仅转换第 1 年到第 14 年之间的日期（公历 1792 年 9 月 22 日到 1806 年 9 月 22 日）。 这涵盖并且超出了这个历法实际上采用的时间。

## 参数

- **`$month`** — 月份的范围是 1 （Vendémiaire）到 13（每年年底的 5 到 6 天）之间的数字。
- **`$day`** — 天的范围是 1 到 30 之间的数字
- **`$year`** — 年份的范围是 1 到 14 之间的数字

## 返回值

指定法国共和历日期的 int 类型儒略日数。

## 参见

`jdtofrench()` `cal_to_jd()`
