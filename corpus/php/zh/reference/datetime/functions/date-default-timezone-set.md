---
id: "zh-php-function-function-date-default-timezone-set"
language: "php"
lang: "zh"
category: "function"
name: "date_default_timezone_set"
title: "设置脚本中所有日期/时间函数使用的默认时区"
signature: "bool date_default_timezone_set(string $timezoneId)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.date-default-timezone-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置脚本中所有日期/时间函数使用的默认时区

## 说明

```php
bool date_default_timezone_set(string $timezoneId)
```

`date_default_timezone_set()` 设置所有日期/时间函数使用的默认时区

除了在脚本中使用此函数设置默认时区，还可以使用 INI 设置 date.timezone 设置默认时区。

## 参数

- **`$timezoneId`** — 时区标识符，像 `UTC`、`Africa/Lagos`、`Asia/Hong_Kong` 或 `Europe/Lisbon`。有效的标识符列表见`timezones`。

## 返回值

如果 `$timezoneId` 无效，此函数返回 `false`，否则返回 `true`。

## 示例

**获取默认时区**

```php


<?php
date_default_timezone_set('America/Los_Angeles');

$script_tz = date_default_timezone_get();
$ini_tz = ini_get('date.timezone');

if (strcmp($script_tz, $ini_tz)){
    echo 'Script timezone differs from ini-set timezone.';
} else {
    echo 'Script timezone and ini-set timezone match.';
}

    
```

## 参见

`date_default_timezone_get()` `timezones`
