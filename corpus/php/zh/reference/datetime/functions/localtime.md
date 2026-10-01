---
id: "zh-php-function-function-localtime"
language: "php"
lang: "zh"
category: "function"
name: "localtime"
title: "取得本地时间"
signature: "array localtime(int|null $timestamp = null, bool $associative = false)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.localtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得本地时间

## 说明

```php
array localtime(int|null $timestamp = null, bool $associative = false)
```

`localtime()` 函数返回和 C 函数调用返回的结构相同数组。

## 参数

- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。
- **`$associative`** — 确定函数应该返回常规的数字索引数组还是关联数组。

## 返回值

如果 `$associative` 设为 `false` 或未提供则返回的是普通的数字索引数组。如果 `$associative` 设为 `true` 则 `localtime()` 返回关联数组，其中包含所有从 C 函数调用 localtime 结构元素。关联数组中键如下：

- "tm_sec" - 秒数，`0` 到 `59`
- "tm_min" - 分钟数，`0` 到 `59`
- "tm_hour" - 小时，`0` 到 `23`
- "tm_mday" - 月份中的第几日，`1` 到 `31`
- "tm_mon" - 年份中的第几个月，`0` (Jan) 到 `11` (Dec)
- "tm_year" - 年份，从 1900 开始
- "tm_wday" - 星期中的第几天，`0` (Sun) 到 `6` (Sat)
- "tm_yday" - 一年中的第几天，`0` 到 `365`
- "tm_isdst" - 夏令时当前是否生效？ 如果是生效的是正数， `0` 代表未生效，负数代表未知。

## 错误／异常

在每次调用日期/时间函数时，如果时区无效则会引发 `E_NOTICE` 错误。参见 `date_default_timezone_set()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$timestamp` 可为 null。 |

## 示例

**`localtime()` 示例**

```php


<?php
$localtime = localtime();
$localtime_assoc = localtime(time(), true);
print_r($localtime);
print_r($localtime_assoc);

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => 24
    [1] => 3
    [2] => 19
    [3] => 3
    [4] => 3
    [5] => 105
    [6] => 0
    [7] => 92
    [8] => 1
)

Array
(
    [tm_sec] => 24
    [tm_min] => 3
    [tm_hour] => 19
    [tm_mday] => 3
    [tm_mon] => 3
    [tm_year] => 105
    [tm_wday] => 0
    [tm_yday] => 92
    [tm_isdst] => 1
)

    
```

## 参见

`getdate()`
