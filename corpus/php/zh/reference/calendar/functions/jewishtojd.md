---
id: "zh-php-function-function-jewishtojd"
language: "php"
lang: "zh"
category: "function"
name: "jewishtojd"
title: "将犹太历日期转换为儒略日数"
signature: "int jewishtojd(int $month, int $day, int $year)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jewishtojd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将犹太历日期转换为儒略日数

## 说明

```php
int jewishtojd(int $month, int $day, int $year)
```

尽管这个函数可以处理元年（公元前 3761 年）以前的年份，但这样做可能没有意义。 犹太历被用了几千年，但早期的时候一个月的开始没有固定的准则，通常是观察到一个新月后定为一个月份的开始。

## 参数

- **`$month`** — 月份为 `1` 到 `13` 之间的数字， `1` 代表 `Tishri`， `13` 代表 `Elul`， `6` *和* `7` 代表平年中的 `Adar`，但在闰年则分别代表 `Adar I` 和 `Adar II`。
- **`$day`** — 天数为 `1` 到 `30` 之间的数字。如果这个月只有 29 天，则假设第 30 天为下个月的第一天。
- **`$year`** — 年份为 1 到 9999 之间的数字

## 返回值

指定犹太历日期所对应的 int 类型的儒略日。

## 参见

`jdtojewish()` `cal_to_jd()`
