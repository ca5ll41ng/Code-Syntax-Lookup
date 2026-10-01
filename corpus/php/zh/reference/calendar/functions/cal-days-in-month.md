---
id: "zh-php-function-function-cal-days-in-month"
language: "php"
lang: "zh"
category: "function"
name: "cal_days_in_month"
title: "返回指定历法中某年某月的天数"
signature: "int cal_days_in_month(int $calendar, int $month, int $year)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.cal-days-in-month.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定历法中某年某月的天数

## 说明

```php
int cal_days_in_month(int $calendar, int $month, int $year)
```

此函数返回指定 `$calendar` 中的某 `$year` 中的某 `$month` 的天数。

## 参数

- **`$calendar`** — 用来计算的历法
- **`$month`** — 指定历法中的某月
- **`$year`** — 指定历法中的某年

## 返回值

指定历法中所选月份的天数

## 示例

**`cal_days_in_month()` 示例**

```php


<?php
$number = cal_days_in_month(CAL_GREGORIAN, 8, 2003); // 31
echo "There were {$number} days in August 2003";
?>

    
```
