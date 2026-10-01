---
id: "zh-php-function-function-gmmktime"
language: "php"
lang: "zh"
category: "function"
name: "gmmktime"
title: "取得 GMT 日期的 UNIX 时间戳"
signature: "int|false gmmktime(int $hour, int|null $minute = null, int|null $second = null, int|null $month = null, int|null $day = null, int|null $year = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.gmmktime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得 GMT 日期的 UNIX 时间戳

## 说明

```php
int|false gmmktime(int $hour, int|null $minute = null, int|null $second = null, int|null $month = null, int|null $day = null, int|null $year = null)
```

和 `mktime()` 相同，但传递的参数是 GMT 日期。 `gmmktime()` internally uses `mktime()` so only times valid in derived local time can be used.

和 `mktime()` 一样，可选参数可以从右到左的顺序省略，省略的参数会被设为当前对应的 GMT 值。

不再支持不带参数调用 `gmmktime()`，并会导致 `ArgumentCountError`。 `time()` 可用于获取当前时间戳。

## 参数

- **`$hour`** — 相对于一天开始的小时数，由 `$month`、`$day` 和 `$year` 确定。负值是指当天零点前的小时。值大于 23 是指接下来几天的适当小时。
- **`$minute`** — 相对于 `$hour` 开始的分钟数。负值指的是上个小时的分钟。大于 59 的值将指向接下来几个小时的适当分钟。
- **`$second`** — 相对于 `$minute` 开始的秒数。负值是指前一分钟的秒数。大于 59 的值是指接下来几分钟的适当秒。
- **`$month`** — 相对于去年年底的月份数。值 1 到 12 是指相关年份的正常日历月份。小于 1 的值（包括负值）按相反的顺序指向去年的月份，因此 0 是 12 月，-1 是 11 月，以此类推。值大于 12 是指接下来几年的适当月份。
- **`$day`** — 相对于上个月月底的天数。值 1 到 28、29、30 或 31（取决于月份）是指相关月份的正常天数。小于 1 的值（包括负值）是指上个月的天数，因此 0 是上个月的最后一天，-1 是倒数第二天，以此类推。大于相关月份天数的值是指接下来几个月的适当某一天。
- **`$year`** — 年份

## 返回值

成功时返回 `int` Unix 时间戳，如果时间戳不适合 PHP 整数则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$hour` 不再可选。如果需要获取 Unix 时间戳，可以使用 `time()`。 |
| 8.0.0 | 现在 `$minute`、`$second`、`$month`、`$day` 和 `$year` 可以为 null。 |

## 示例

**`gmmktime()` 基础示例**

```php


<?php
date_default_timezone_set("Indian/Maldives");

echo "July 1, 2000 is on a " . date("l", gmmktime(0, 0, 0, 7, 1, 2000));

    
```

以上示例会输出：

```text


July 1, 2000 is on a Saturday

    
```

## 参见

`DateTimeImmutable` 类 `mktime()` `date()` `time()`
