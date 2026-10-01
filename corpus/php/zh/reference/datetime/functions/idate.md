---
id: "zh-php-function-function-idate"
language: "php"
lang: "zh"
category: "function"
name: "idate"
title: "将本地日期/时间格式化为整数"
signature: "int|false idate(string $format, int|null $timestamp = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.idate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将本地日期/时间格式化为整数

## 说明

```php
int|false idate(string $format, int|null $timestamp = null)
```

使用明确的 int 类型 `$timestamp` 或者当前本地时间（如果没有明确时间戳），根据明确的格式化字符串返回格式化后的数字。换句话说，`$timestamp` 是可选的，默认值是 `time()` 的值。

跟 `date()` 不同，`idate()` 只接受一个字符作为 `$format` 的参数。

## 参数

- **`$format`** — | `$format` 字符 | 说明 | | --- | --- | | `B` | Swatch Beat/互联网时间 | | `d` | 月份中的第几天 | | `h` | 小时（12 小时制） | | `H` | 小时（24 小时制） | | `i` | 分钟 | | `I`（大写 i） | 如果启用夏令时则返回 `1`，否则返回 `0` | | `L`（大写 l） | 如果是闰年则返回 `1`，否则返回 `0` | | `m` | 月份的数字 | | `N` | ISO-8601 格式的周几（`1` 表示周一到 `7` 表示周日） | | `o` | ISO-8601 格式的年份（4位） | | `s` | 秒数 | | `t` | 本月的总天数 | | `U` | 自 Unix 纪元（January 1 1970 00:00:00 GMT）起的秒数——这和 `time()` 相同 | | `w` | 周几（`0` 是周日） | | `W` | ISO-8601 格式的年份中第几个星期，每星期从星期一开始 | | `y` | 年份（1 或 2 位数字——见下面说明） | | `Y` | 年份（4 位数字） | | `z` | 年份中的第几天 | | `Z` | 以秒为单位的时差 |
- **`$timestamp`** — 可选的 `$timestamp` 参数是一个 `int` 的 Unix 时间戳，如未指定或是 `null`，参数值默认为当前本地时间。也就是说，其值默认为 `time()` 的返回值。

## 返回值

成功时返回 `int`， 或者在失败时返回 `false`。

由于 `idate()` 始终返回不以“0”开头的 `int`，因此 `idate()` 返回的数字可能位数要比期望的小。查看以下示例。

## 错误／异常

在每次调用日期/时间函数时，如果时区无效则会引发 `E_NOTICE` 错误。参见 `date_default_timezone_set()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 添加 `N`（ISO-8601 格式的周几）和 `o`（ISO-8601 格式的年份）格式字符。 |
| 8.0.0 | 现在 `$timestamp` 允许为 null。 |

## 示例

**`idate()` 示例**

```php


<?php
$timestamp = strtotime('1st January 2004'); // 1072915200

// 下面以两位数字格式打印年份，但是因为
// 以“0”打头，因此只会打印“4”
echo idate('y', $timestamp) . "\n";

$timestamp = strtotime('1st January 2024'); // 1704067200
echo idate('y', $timestamp);

    
```

以上示例会输出：

```text


4
24

    
```

## 参见

`DateTimeInterface::format()` `date()` `getdate()` `time()`
