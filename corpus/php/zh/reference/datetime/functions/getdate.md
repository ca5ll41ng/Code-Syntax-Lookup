---
id: "zh-php-function-function-getdate"
language: "php"
lang: "zh"
category: "function"
name: "getdate"
title: "获取日期/时间信息"
signature: "array getdate(int|null $timestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.getdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取日期/时间信息

## 说明

```php
array getdate(int|null $timestamp = null)
```

返回关联 `array`，包含 `$timestamp` 或者当前本地时间（如果省略 `$timestamp` 或为 `null`）的日期信息。

## 参数

- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。

## 返回值

返回关联 `array`，包含 `$timestamp` 相关信息。返回的关联数组中的元素如下：

| 键名 | 说明 | 返回值示例 |
| --- | --- | --- |
| `"seconds"` | 秒的数字表示 | `0` 到 `59` |
| `"minutes"` | 分钟的数字表示 | `0` 到 `59` |
| `"hours"` | 小时的数字表示 | `0` 到 `23` |
| `"mday"` | 月份中第几天的数字表示 | `1` 到 `31` |
| `"wday"` | 星期几的数字表示 | `0`（周日）到 `6`（周六） |
| `"mon"` | 月份的数字表示 | `1` 到 `12` |
| `"year"` | 4 位数字表示的完整年份 | 比如： `1999` 或 `2003` |
| `"yday"` | 一年中第几天的数字表示 | `0` 到 `365` |
| `"weekday"` | 星期几的完整文本表示 | `Sunday` 到 `Saturday` |
| `"month"` | 月份的完整文本表示，比如 January 或 March | `January` 到 `December` |
| `0` | 自从 Unix 纪元开始至今的秒数，和 `time()` 的返回值以及用于 `date()` 的值类似。 | 系统相关，通常从 `-2147483648` 到 `2147483647`。 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$timestamp` 允许为 null。 |

## 示例

**`getdate()` 示例**

```php


<?php
$today = getdate();
print_r($today);

    
```

以上示例的输出类似于：

```text


Array
(
    [seconds] => 40
    [minutes] => 58
    [hours] => 21
    [mday] => 17
    [wday] => 2
    [mon] => 6
    [year] => 2003
    [yday] => 167
    [weekday] => Tuesday
    [month] => June
    [0] => 1055901520
)

    
```

## 参见

`date()` `idate()` `localtime()` `time()` `setlocale()`
