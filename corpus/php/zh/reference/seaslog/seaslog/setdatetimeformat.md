---
id: "zh-php-function-seaslog-setdatetimeformat"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::setDatetimeFormat"
title: "设置 SeasLog 日期格式"
signature: "public static bool SeasLog::setDatetimeFormat(string $format)"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.setdatetimeformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 SeasLog 日期格式

## 说明

```php
public static bool SeasLog::setDatetimeFormat(string $format)
```

设置 SeasLog 日期格式。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$format`** — 字符串。比如 `Y-m-d H:i:s` 或者 `Ymd His`。查看函数 `date()` 的第一个参数 `format`。

## 返回值

设置日期时间格式成功时返回 TRUE，失败时返回 FALSE。

## 示例

**`SeasLog::setDatetimeFormat()` 示例**

```php


<?php

var_dump(SeasLog::setDateTimeFormat('Ymd His'));

?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `SeasLog::getDateTimeFormat()`
