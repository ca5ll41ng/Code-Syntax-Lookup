---
id: "zh-php-function-function-date"
language: "php"
lang: "zh"
category: "function"
name: "date"
title: "格式化 Unix 时间戳"
signature: "string date(string $format, int|null $timestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.date.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 格式化 Unix 时间戳

## 说明

```php
string date(string $format, int|null $timestamp = null)
```

使用指定整数 `$timestamp`（Unix 时间戳），或者使用当前时间（如果没有指定时间戳），返回相应的指定格式的格式化字符串。换句话说，`$timestamp` 是可选的，默认值是 `time()`。

> Unix 时间戳不处理时区。使用 `DateTimeImmutable` 及其 `DateTimeInterface::format()` 格式化方法来格式化携带时区的日期/时间信息。

## 参数

- **`$format`** — `DateTimeInterface::format()` 接受的格式。
  > `date()` 将始终生成 `000000` 作为微秒，因为它采用 `int` 参数，而如果 `DateTimeInterface` 类型的对象是用微秒创建的， 则 `DateTimeInterface::format()` 支持微秒。


- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。

## 返回值

返回格式化后的日期字符串。

## 错误／异常

在每次调用日期/时间函数时，如果时区无效则会引发 `E_NOTICE` 错误。参见 `date_default_timezone_set()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$timestamp` 允许为 null。 |

## 示例

**`date()` 示例**

```php


<?php
// 设置要使用的默认时区。
date_default_timezone_set('UTC');


// 打印类似：Monday
echo date("l") . "\n";

// 打印类似：Monday 8th of August 2005 03:12:46 PM
echo date('l jS \of F Y h:i:s A') . "\n";

// 打印：July 1, 2000 is on a Saturday
echo "July 1, 2000 is on a " . date("l", mktime(0, 0, 0, 7, 1, 2000)) . "\n";

/* 使用格式化参数中的常量 */
// 打印类似：Wed, 25 Sep 2013 15:28:57 -0700
echo date(DATE_RFC2822) . "\n";

// 打印类似：2000-07-01T00:00:00+00:00
echo date(DATE_ATOM, mktime(0, 0, 0, 7, 1, 2000));

    
```

可以对格式化字符串中的解析字符，在其前面添加反斜线来防止解析。如果带有反斜线的字符已经是特殊字符，需要对反斜线进行再次转义。

**`date()` 中的转义字符**

```php


<?php
// 打印类似： Wednesday the 15th
echo date('l \t\h\e jS');

    
```

`date()` 格式化的一些示例。请注意，即使是对于当前来说并不具有特殊含义的字符，也要像对待具有特殊含义的字符那样进行转义，以避免产生非预期的值，因为可能在将来的 PHP 版本中，这些字符会被赋予特殊的含义。进行转义的时候，请确保使用单引号，以避免 \n 这样的字符被解释为换行符号。

**`date()` 格式化**

```php


<?php
// 假设今天是 2001 年 3 月 10 日下午 5 点 16 分 18 秒，
// 并且位于山区标准时间（MST）时区
date_default_timezone_set("America/Phoenix");

echo date("F j, Y, g:i a") . "\n";                 // March 10, 2001, 5:16 pm
echo date("m.d.y") . "\n";                         // 03.10.01
echo date("j, n, Y") . "\n";                       // 10, 3, 2001
echo date("Ymd") . "\n";                           // 20010310
echo date('h-i-s, j-m-y, it is w Day') . "\n";     // 05-16-18, 10-03-01, 1631 1618 6 Satpm01
echo date('\i\t \i\s \t\h\e jS \d\a\y.') . "\n";   // it is the 10th day.
echo date("D M j G:i:s T Y") . "\n";               // Sat Mar 10 17:16:18 MST 2001
echo date('H:m:s \m \i\s\ \m\o\n\t\h') . "\n";     // 17:03:18 m is month
echo date("H:i:s") . "\n";                         // 17:16:18
echo date("Y-m-d H:i:s") . "\n";                   // 2001-03-10 17:16:18（MySQL DATETIME 格式）

    
```

如果需要将日期时间格式化为其他语言，使用 `IntlDateFormatter::format()` 而不是 `date()`。

## 注释

> 使用 `strtotime()` 将字符串表示的日期转换为时间戳。另外，一些数据库产品也提供了将日期格式转换为时间戳的函数（例如 MySQL 中的 [UNIX_TIMESTAMP]() 函数）。

> 请求的开始时间可以从变量 `$_SERVER['REQUEST_TIME']` 中获取。

## 参见

`DateTimeImmutable::__construct()` `DateTimeInterface::format()` `gmdate()` `idate()` `getdate()` `getlastmod()` `mktime()` `IntlDateFormatter::format()` `time()` 预定义 DateTime 常量
