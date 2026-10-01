---
id: "zh-php-function-function-easter-days"
language: "php"
lang: "zh"
category: "function"
name: "easter_days"
title: "得到指定年份的 3 月 21 日到复活节之间的天数"
signature: "int easter_days(int|null $year = null, int $mode = CAL_EASTER_DEFAULT)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.easter-days.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 得到指定年份的 3 月 21 日到复活节之间的天数

## 说明

```php
int easter_days(int|null $year = null, int $mode = CAL_EASTER_DEFAULT)
```

返回指定年份的 3 月 21 日到复活节之间的天数，如果没有指定年份，默认是当年。

此函数可以用来代替 `easter_date()` 来计算超出 Unix 时间戳范围（比如 1970 年以前或 2037 年以后）的年份的复活节日期。

复活节的日期是由尼西亚议会在公元 325 年确定的为每年春分月圆后的第一个星期日。春分一般是在 3 月 21 日，这就简化为只要计算满月的日期和紧挨的星期日的日期。这里所用的算法是在 532 年由 Dionysius Exiguus 引入。在 1753 年以前用儒略历计算，一个简单的 19 年周期用于追踪月相。在 1753 年之后公历（由 Clavius 和 Lilius 设计，1582 年 10 月由教皇 Gregory 十三世引入，并于 1752 年 9 月进入英国及其当时的殖民地）添加了两个校正因子以使周期更准确。

## 参数

- **`$year`** — 年份为正整数。如果省略或为 `null`, 默认为本地时间的当前年份。
- **`$mode`** — 当设置为 `CAL_EASTER_ROMAN` 时，允许用公历来计算 1582 年至 1752 年之间的复活节日期。更多有效常量参考 calendar 常量。

## 返回值

根据指定参数 `$year` 而返回 3 月 21 日至复活节的天数。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$year` 现在可为空（nullable）。 |

## 示例

**`easter_days()` 示例**

```php


<?php

echo easter_days(1999);        // 14, i.e. April 4
echo easter_days(1492);        // 32, i.e. April 22
echo easter_days(1913);        //  2, i.e. March 23

?>

    
```

## 参见

`easter_date()`
