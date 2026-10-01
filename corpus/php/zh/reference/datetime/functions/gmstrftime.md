---
id: "zh-php-function-function-gmstrftime"
language: "php"
lang: "zh"
category: "function"
name: "gmstrftime"
title: "根据区域设置格式化 GMT/UTC 时间/日期"
signature: "#[\\Deprecated] string|false gmstrftime(string $format, int|null $timestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.gmstrftime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据区域设置格式化 GMT/UTC 时间/日期

## 说明

```php
#[\Deprecated] string|false gmstrftime(string $format, int|null $timestamp = null)
```

行为和 `strftime()` 相同，只是返回的时间是格林威治标准时（GMT）。例如，在东部标准时（EST，GMT -0500）运行时，下面第一行显示“Dec 31 1998 20:00:00”，而第二行显示“Jan 01 1999 01:00:00”。

> 此函数依赖于操作系统区域设置信息，这些信息可能彼此不一致，或者根本不能用。而是使用 `IntlDateFormatter::format()` 方法。

## 参数

- **`$format`** — See description in `strftime()`.
- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。

## 返回值

根据指定的格式字符串使用指定的 `$timestamp` 或当前本地时间（若未提供时间戳）返回格式化的字符串。月份、星期名称及其他与语言相关的字符串遵循通过 `setlocale()` 设置的当前区域。失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$timestamp` 允许为 null。 |

## 示例

**`gmstrftime()` 示例**

```php


<?php
setlocale(LC_TIME, 'en_US');
echo strftime("%b %d %Y %H:%M:%S", mktime(20, 0, 0, 12, 31, 98)) . "\n";
echo gmstrftime("%b %d %Y %H:%M:%S", mktime(20, 0, 0, 12, 31, 98)) . "\n";

    
```

## 参见

`IntlDateFormatter::format()` `DateTimeInterface::format()` `strftime()`
