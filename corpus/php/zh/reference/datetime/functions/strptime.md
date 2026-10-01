---
id: "zh-php-function-function-strptime"
language: "php"
lang: "zh"
category: "function"
name: "strptime"
title: "解析由 `strftime()` 生成的日期／时间"
signature: "#[\\Deprecated] array|false strptime(string $timestamp, string $format)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.strptime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析由 `strftime()` 生成的日期／时间

## 说明

```php
#[\Deprecated] array|false strptime(string $timestamp, string $format)
```

`strptime()` 返回一个将 `$timestamp` 解析后的数组，如果出错返回 `false`。

月份和星期几的名字以及其它与语种有关的字符串对应于 `setlocale()`设定的当前区域（`LC_TIME`）。

## 参数

- **`$timestamp`（`string`）** — 被解析的字符串（例如从 `strftime()` 返回的）
- **`$format`（`string`）** — `$timestamp` 所使用的格式（例如同 `strftime()` 中所使用的相同）。 — 更多有关格式选项的信息见 `strftime()` 页面。

## 返回值

返回一个数组 或者在失败时返回 `false`

| 键名 | 说明 |
| --- | --- |
| tm_sec | 当前分钟内的秒数（0-61） |
| tm_min | 当前小时内的分钟数（0-59） |
| tm_hour | 午夜起的小时数（0-23） |
| tm_mday | 月份中的第几天（1-31） |
| tm_mon | 自一月起过了几个月（0-11） |
| tm_year | 自 1900 年起过了几年 |
| tm_wday | 自星期天起过了几天（0-6） |
| tm_yday | 本年自一月一日起过了多少天（0-365） |
| unparsed | `$timestamp` 中未能通过指定的 `$format` 识别的部分 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 此函数已弃用。改用 `date_parse_from_format()`（用于单独区域设置解析）或者 `IntlDateFormatter::parse()`（用于依赖区域设置解析） |

## 示例

**`strptime()` 示例**

```php


<?php
$format = '%d/%m/%Y %H:%M:%S';
$strf = strftime($format);

echo "$strf\n";

print_r(strptime($strf, $format));

    
```

以上示例的输出类似于：

```text


03/10/2004 15:54:19

Array
(
    [tm_sec] => 19
    [tm_min] => 54
    [tm_hour] => 15
    [tm_mday] => 3
    [tm_mon] => 9
    [tm_year] => 104
    [tm_wday] => 0
    [tm_yday] => 276
    [unparsed] =>
)

    
```

## 注释

> 此函数未在 Windows 平台下实现。

> Internally, this function calls the `strptime()` function provided by the system's C library. This function can exhibit noticeably different behaviour across different operating systems. The use of `date_parse_from_format()`, which does not suffer from these issues, is recommended.

> `"tm_sec"` includes any leap seconds (currently upto 2 a year). For more information on leap seconds, see the [Wikipedia article on leap seconds]().

## 参见

`IntlDateFormatter::parse()` `DateTime::createFromFormat()` `checkdate()` `strftime()` `date_parse_from_format()`
