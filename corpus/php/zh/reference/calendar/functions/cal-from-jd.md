---
id: "zh-php-function-function-cal-from-jd"
language: "php"
lang: "zh"
category: "function"
name: "cal_from_jd"
title: "从儒略日数转换为支持的历法"
signature: "array cal_from_jd(int $julian_day, int $calendar)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.cal-from-jd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从儒略日数转换为支持的历法

## 说明

```php
array cal_from_jd(int $julian_day, int $calendar)
```

`cal_from_jd()` 根据 `$julian_day` 指定的儒略日 转换为指定 `$calendar` 中的日期。`$calendar` 支持的值有 `CAL_GREGORIAN`、`CAL_JULIAN`、`CAL_JEWISH` 和 `CAL_FRENCH`。

## 参数

- **`$julian_day`** — int 类型的儒略日
- **`$calendar`** — 要转换为的历法

## 返回值

返回包含的历法信息的数组，例如月、日、年、星期几（`dow` ）、星期和月份的缩写和全称、日期的 string 形式是“月/日/年”。 星期几的范围是从 `0` （星期天）到 `6`（星期六）。

## 示例

**`cal_from_jd()` 示例**

```php


<?php
$today = unixtojd(mktime(0, 0, 0, 8, 16, 2003));
print_r(cal_from_jd($today, CAL_GREGORIAN));
?>

    
```

以上示例会输出：

```text


Array
(
    [date] => 8/16/2003
    [month] => 8
    [day] => 16
    [year] => 2003
    [dow] => 6
    [abbrevdayname] => Sat
    [dayname] => Saturday
    [abbrevmonth] => Aug
    [monthname] => August
)

    
```

## 参见

`cal_to_jd()` `jdtofrench()` `jdtogregorian()` `jdtojewish()` `jdtojulian()` `jdtounix()`
