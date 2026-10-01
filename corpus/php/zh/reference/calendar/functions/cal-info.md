---
id: "zh-php-function-function-cal-info"
language: "php"
lang: "zh"
category: "function"
name: "cal_info"
title: "返回选定历法的信息"
signature: "array cal_info(int $calendar = -1)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.cal-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回选定历法的信息

## 说明

```php
array cal_info(int $calendar = -1)
```

`cal_info()` 返回选定 `$calendar` 的信息。

以数组的形式返回历法信息，包含的元素有 `calname`（历法名称）、`calsymbol`（历法代码）、`month` （月份）、`abbrevmonth`（月份的缩写）和 `maxdaysinmonth`（单月的最多天数）。`$calendar` 参数可以使用下列值指定不同历法的名称：

- 0 或者 `CAL_GREGORIAN` - 公历
- 1 或者 `CAL_JULIAN` - 儒略历
- 2 或者 `CAL_JEWISH` - 犹太历
- 3 或者 `CAL_FRENCH` - 法国共和历

如果没有指定参数 `$calendar`，所支持的所有历法将以数组形式返回。

## 参数

- **`$calendar`** — 返回指定历法的信息，如果没有指定，将返回所有历法信息。

## 返回值

## 示例

**`cal_info()` 示例**

```php


<?php
$info = cal_info(0);
print_r($info);
?>

    
```

以上示例会输出：

```text


Array
(
    [months] => Array
        (
            [1] => January
            [2] => February
            [3] => March
            [4] => April
            [5] => May
            [6] => June
            [7] => July
            [8] => August
            [9] => September
            [10] => October
            [11] => November
            [12] => December
        )

    [abbrevmonths] => Array
        (
            [1] => Jan
            [2] => Feb
            [3] => Mar
            [4] => Apr
            [5] => May
            [6] => Jun
            [7] => Jul
            [8] => Aug
            [9] => Sep
            [10] => Oct
            [11] => Nov
            [12] => Dec
        )

    [maxdaysinmonth] => 31
    [calname] => Gregorian
    [calsymbol] => CAL_GREGORIAN
)

    
```
