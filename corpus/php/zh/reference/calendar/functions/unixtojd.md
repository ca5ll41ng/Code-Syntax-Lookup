---
id: "zh-php-function-function-unixtojd"
language: "php"
lang: "zh"
category: "function"
name: "unixtojd"
title: "将 Unix 时间戳转换为儒略日数"
signature: "int|false unixtojd(int|null $timestamp = null)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.unixtojd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 Unix 时间戳转换为儒略日数

## 说明

```php
int|false unixtojd(int|null $timestamp = null)
```

根据指定的 Unix `$timestamp` （自 1970 年 1 月 1 日以来的秒数）返回儒略日数。如果没有指定时间戳则返回当前日期的儒略日数。 无论哪种方式，时间都被视为当地时间（不是 UTC）。

## 参数

- **`$timestamp`** — 用于转换的 unix 时间戳。

## 返回值

int 类型的儒略日数， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$timestamp` 现在可以为 null。 |

## 参见

`jdtounix()`
