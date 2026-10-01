---
id: "zh-php-function-function-mktime"
language: "php"
lang: "zh"
category: "function"
name: "mktime"
title: "取得一个日期的 Unix 时间戳"
signature: "int|false mktime(int $hour, int|null $minute = null, int|null $second = null, int|null $month = null, int|null $day = null, int|null $year = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.mktime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得一个日期的 Unix 时间戳

## 说明

```php
int|false mktime(int $hour, int|null $minute = null, int|null $second = null, int|null $month = null, int|null $day = null, int|null $year = null)
```

根据给出的参数返回 Unix 时间戳。时间戳是一个长整数，包含了从 Unix 纪元（January 1 1970 00:00:00 GMT）到给定时间的秒数。

任何可选或为 `null` 的参数都将根据本地日期和时间设置为当前值。

> 请注意，参数的顺序是很奇怪：`$month`、`$day`、`$year`，而不是更合理的 `$year`、`$month`、`$day` 顺序。

不带参数调用 `mktime()` 已经不受支持，会导致 `ArgumentCountError`。 `time()` 可以用来获取当前时间戳。

## 参数

- **`$hour`** — 相对于一天开始的小时数，由 `$month`、`$day` 和 `$year` 确定。负值是指当天零点前的小时。值大于 23 是指接下来几天的适当小时。
- **`$minute`** — 相对于 `$hour` 开始的分钟数。负值指的是上个小时的分钟。大于 59 的值将指向接下来几个小时的适当分钟。
- **`$second`** — 相对于 `$minute` 开始的秒数。负值是指前一分钟的秒数。大于 59 的值是指接下来几分钟的适当秒。
- **`$month`** — 相对于去年年底的月份数。值 1 到 12 是指相关年份的正常日历月份。小于 1 的值（包括负值）按相反的顺序指向去年的月份，因此 0 是 12 月，-1 是 11 月，以此类推。值大于 12 是指接下来几年的适当月份。
- **`$day`** — 相对于上个月月底的天数。值 1 到 28、29、30 或 31（取决于月份）是指相关月份的正常天数。小于 1 的值（包括负值）是指上个月的天数，因此 0 是上个月的最后一天，-1 是倒数第二天，以此类推。大于相关月份天数的值是指接下来几个月的适当某一天。
- **`$year`** — 年份数，可以是两位或四位数字，0-69 对应于 2000-2069，70-100 对应于 1970-2000。在如今系统中普遍把 time_t 作为一个 32 位有符号整数的情况下，`$year` 的合法范围是 1901 到 2038 之间。

## 返回值

`mktime()` 根据给出的参数返回 Unix 时间戳，如果时间戳不适合 PHP 整数则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$hour` 不再可选。如果需要 Unix 时间戳，可以使用 `time()`。 |
| 8.0.0 | 现在 `$minute`、`$second`、`$month`、`$day` 和 `$year` 允许为 null。 |

## 示例

**基本示例**

```php


<?php
// 设置使用的默认时区。
date_default_timezone_set('UTC');

// 打印：July 1, 2000 is on a Saturday
echo "July 1, 2000 is on a " . date("l", mktime(0, 0, 0, 7, 1, 2000)) . "\n";

// 打印类似的东西：2006-04-05T01:02:03+00:00
echo date('c', mktime(1, 2, 3, 4, 5, 2006)) . "\n";
?>

    
```

以上示例的输出类似于：

```text


July 1, 2000 is on a Saturday
2006-04-05T01:02:03+00:00

    
```

**`mktime()` 示例**

`mktime()` 在做日期计算和验证方面很有用，它会自动计算超出范围的输入的正确值。例如下面示例中每一行都会产生字符串 "Jan-01-1998"。

```php


<?php
date_default_timezone_set('America/New_York');

echo date("c", mktime(0, 0, 0, 12, 32, 1997)) . "\n";
echo date("c", mktime(0, 0, 0, 13, 1, 1997)) . "\n";
echo date("c", mktime(0, 0, 0, 1, 1, 1998)) . "\n";
echo date("c", mktime(0, 0, 0, 1, 1, 98)) . "\n";

    
```

以上示例的输出类似于：

```text


1998-01-01T00:00:00-05:00
1998-01-01T00:00:00-05:00
1998-01-01T00:00:00-05:00
1998-01-01T00:00:00-05:00

    
```

**使用 mktime 查找相对日期**

```php


<?php
date_default_timezone_set('Asia/Tokyo');

$tomorrow  = mktime(0, 0, 0, date("m")  , date("d")+1, date("Y"));
print date('c', $tomorrow) . "\n";

$lastmonth = mktime(0, 0, 0, date("m")-1, date("d"),   date("Y"));
print date('c', $lastmonth) . "\n";

$nextyear  = mktime(0, 0, 0, date("m"),   date("d"),   date("Y")+1) . "\n";
print date('c', $nextyear) . "\n";

    
```

以上示例的输出类似于：

```text


2025-09-30T00:00:00+09:00
2025-08-29T00:00:00+09:00
2026-09-29T00:00:00+09:00

    
```

> 由于夏令时的存在，这种方法比简单地对时间戳加减一天或一个月的秒数更加可靠。

**下个月的最后一天**

任何给定月份的最后一天都可以被表示为下个月的第 "0" 天，而不是 -1 天。下面两个示例都会产生字符串 "Last day in Feb 2000 is: 29"。

```php


<?php

$lastday = mktime(0, 0, 0, 3, 0, 2000);
echo 'Last day in Feb 2000 is: ', date('d', $lastday) . "\n";

$lastday = mktime(0, 0, 0, 4, -31, 2000);
echo 'Last day in Feb 2000 is: ', date('d', $lastday) . "\n";

    
```

以上示例会输出：

```text


Last day in Feb 2000 is: 29
Last day in Feb 2000 is: 29

    
```

## 参见

`DateTimeImmutable` 类 `checkdate()` `gmmktime()` `date()` `time()`
