---
id: "zh-php-function-function-strtotime"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "strtotime"
title: "将任何英文文本日期时间描述解析为 Unix 时间戳"
signature: "int|false strtotime(string $datetime, int|null $baseTimestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.strtotime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将任何英文文本日期时间描述解析为 Unix 时间戳

## 说明

```php
int|false strtotime(string $datetime, int|null $baseTimestamp = null)
```

本函数期望接受包含英文日期格式的字符串并尝试将其解析为 Unix 时间戳（自 January 1 1970 00:00:00 UTC 起的秒数），其值跟 `$baseTimestamp` 参数给出的时间相关，如果没有提供 `$baseTimestamp` 参数则为当前时间。在日期和时间格式中定义了日期字符串解析，并且有几个微秒的注意事项，强烈建议查看完整详细信息。

> 本函数返回的 Unix 时间戳不包含时区信息，为了实现对日期/时间信息进行计算，推荐使用功能更强大的 `DateTimeImmutable`。

本函数的每个参数都使用默认时区，除非在该参数指定了时区。注意不要在每个参数中使用不同的时区，除非是故意的。参考 `date_default_timezone_get()` 获取定义默认时区的各种方法。

## 参数

- **`$datetime`** — 日期/时间字符串。正确格式的说明详见 日期与时间格式。
- **`$baseTimestamp`** — 时间戳，用作计算相对日期的基础。

## 返回值

成功则返回时间戳，否则返回 `false`。

## 错误／异常

在每次调用日期/时间函数时，如果时区无效则会引发 `E_NOTICE` 错误。参见 `date_default_timezone_set()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$baseTimestamp` 允许为 null。 |

## 示例

**`strtotime()` 示例**

```php


<?php
echo strtotime("now"), "\n";
echo strtotime("10 September 2000"), "\n";
echo strtotime("+1 day"), "\n";
echo strtotime("+1 week"), "\n";
echo strtotime("+1 week 2 days 4 hours 2 seconds"), "\n";
echo strtotime("next Thursday"), "\n";
echo strtotime("last Monday"), "\n";

    
```

**失败检查**

```php


<?php
$str = 'Not Good';

if (($timestamp = strtotime($str)) === false) {
    echo "The string ($str) is bogus";
} else {
    echo "$str == " . date('l dS \o\f F Y h:i:s A', $timestamp);
}

    
```

## 注释

> 在这种情况下，“相对”日期还意味着，如果未提供日期/时间的特定组成部分，则将从 `$baseTimestamp` 逐字获取。也就是说如果在 2022 年 5 月 31 日运行 strtotime('February')，将被解释为 `31 February 2022`，它将溢出到 `3 March` 的时间戳。（在闰年，应该是 `2 March`。）使用 strtotime('1 February') 或者 strtotime('first day of February') 可以避免这个问题。

> 如果指定的年份位数是两位数字，则其值 0-69 表示 2000-2069，70-99 表示 1970-1999。参阅下面的注释了解 32 位系统上可能的差异（结束日期可能是 2038-01-19 03:14:07）。

> 时间戳的有效范围通常从 Fri, 13 Dec 1901 20:45:54 UTC 到 Tue, 19 Jan 2038 03:14:07 UTC（这些日期对应 32 位有符号整数的最小值和最大值）。
>
> 在 64 位的 PHP 版本中，时间戳的有效范围实际上是无限的，因为 64 位在任一方向上都可以代表大约 2930 亿年。

> 不建议使用此函数对日期进行数学运算。推荐使用 `DateTime::add()` 和 `DateTime::sub()` 函数。

## 参见

`DateTimeImmutable` `DateTimeImmutable::createFromFormat()` 日期和时间格式 `checkdate()` `strptime()`
