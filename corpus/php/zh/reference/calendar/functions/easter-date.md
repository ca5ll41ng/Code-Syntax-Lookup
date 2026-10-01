---
id: "zh-php-function-function-easter-date"
language: "php"
lang: "zh"
category: "function"
name: "easter_date"
title: "得到指定年份的复活节当地午夜时的 Unix 时间戳"
signature: "int easter_date(int|null $year = null, int $mode = CAL_EASTER_DEFAULT)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.easter-date.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 得到指定年份的复活节当地午夜时的 Unix 时间戳

## 说明

```php
int easter_date(int|null $year = null, int $mode = CAL_EASTER_DEFAULT)
```

返回指定年份的复活节午夜时的 Unix 时间戳。

复活节的日期是由尼西亚议会在公元 325 年确定的为每年春分月圆后的第一个星期日。春分一般是在 3 月 21 日，这就简化为只要计算满月的日期和紧挨的星期日的日期。这里所用的算法是在 532 年由 Dionysius Exiguus 引入。在 1753 年以前用儒略历计算，一个简单的 19 年周期用于追踪月相。在 1753 年之后公历（由 Clavius 和 Lilius 设计，1582 年 10 月由教皇 Gregory 十三世引入，并于 1752 年 9 月进入英国及其当时的殖民地）添加了两个校正因子以使周期更准确。

## 参数

- **`$year`** — 对于 32 位系统，年份必须是 1970 至 2037 之间的数字，对于 64 位系统，年份必须是 1970 到 2,000,000,000 之间的数字。如果省略或者为 `null`，则根据本地时间默认为当前年份。
- **`$mode`** — 当设置为 `CAL_EASTER_ALWAYS_JULIAN` 时，允许基于儒略历计算复活节时间。参见 calendar 常量。

## 返回值

复活节日期的 Unix 时间戳。

## 错误／异常

如果年份早于 1970，或者晚于 32 位系统的 2037 以及 64 位系统上的 2,000,000,000 时会抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 在 64 位系统上，`$year` 参数现在接受范围在 1970 到 2,000,000,000 的值。 |
| 8.0.0 | `$year` 现在可为空（nullable）。 |
| 8.0.0 | 当 `$year` 超出允许的范围现在抛出 `ValueError`。之前函数会返回 `false` 会触发 `E_WARNING`。 |

## 示例

**`easter_date()` 示例**

```php


<?php

echo date("M-d-Y", easter_date(1999));        // Apr-04-1999
echo date("M-d-Y", easter_date(2000));        // Apr-23-2000
echo date("M-d-Y", easter_date(2001));        // Apr-15-2001

?>

    
```

**使用带 `DateTime` 的 `easter_date()`**

```php


<?php

$timestamp = easter_date(2023);

$datetime = new \DateTime();
$datetime->setTimestamp($timestamp);

echo $datetime->format('M-d-Y'); // Apr-09-2023

?>

    
```

## 注释

> `easter_date()` 依赖于系统的 C 库 time 函数，而不是使用 PHP 内置的 date 和 time 函数。因此 `easter_date()` 使用 `TZ` 环境变量来确定应该运行的时区，而不是使用 PHP 默认时区 ，此函数与 PHP 其他 date 函数一起使用时会出现意外行为。
>
> 有一种解决方案，可以使用带 `DateTime` 和 `DateInterval` 的 `easter_days()` 来计算 PHP 时区中的复活节开始时间，如下所示：
>
> ```php <?php function get_easter_datetime($year) { $base = new DateTime("$year-03-21"); $days = easter_days($year); return $base->add(new DateInterval("P{$days}D")); } foreach (range(2012, 2015) as $year) { printf("Easter in %d is on %s\n", $year, get_easter_datetime($year)->format('F j')); } ?> ``` 以上示例会输出： ```text Easter in 2012 is on April 8 Easter in 2013 is on March 31 Easter in 2014 is on April 20 Easter in 2015 is on April 5 ```

## 参见

`easter_days()` 用于计算 1970 年之前或 2037 年之后的复活节。
