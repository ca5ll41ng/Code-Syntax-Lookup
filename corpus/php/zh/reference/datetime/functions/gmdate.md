---
id: "zh-php-function-function-gmdate"
language: "php"
lang: "zh"
category: "function"
name: "gmdate"
title: "格式化 GMT/UTC 日期／时间"
signature: "string gmdate(string $format, int|null $timestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.gmdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 格式化 GMT/UTC 日期／时间

## 说明

```php
string gmdate(string $format, int|null $timestamp = null)
```

同 `date()` 函数一样，只是返回的时间是格林威治标准时（GMT）。

## 参数

- **`$format`** — 输出日期 `string` 的格式。参阅 `date()` 函数格式化选项。
- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。

## 返回值

返回格式化的日期字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$timestamp` 允许为 null。 |

## 示例

**`gmdate()` 示例**

```php


<?php
date_default_timezone_set("Europe/Helsinki");

echo date("M d Y H:i:s e", mktime(0, 0, 0, 1, 1, 1998)) . "\n";
echo gmdate("M d Y H:i:s e", mktime(0, 0, 0, 1, 1, 1998));

    
```

以上示例会输出：

```text


Jan 01 1998 00:00:00 Europe/Helsinki
Dec 31 1997 22:00:00 UTC

    
```

## 参见

`DateTimeImmutable::__construct()` `DateTimeInterface::format()` `date()` `mktime()` `gmmktime()` `IntlDateFormatter::format()`
