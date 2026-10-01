---
id: "zh-php-function-seaslog-getdatetimeformat"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::getDatetimeFormat"
title: "获取 SeasLog 日期格式"
signature: "public static string SeasLog::getDatetimeFormat()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.getdatetimeformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 SeasLog 日期格式

## 说明

```php
public static string SeasLog::getDatetimeFormat()
```

获取 SeasLog 日期格式。 使用函数 `SeasLog::getDatetimeFormat()` 将获取 php.ini(seaslog.ini) 配置的 seaslog.default_datetime_format 值。

## 参数

此函数没有参数。

## 返回值

获取 SeasLog 配置中的 seaslog.default_datetime_format 值。 使用函数 `SeasLog::setDatetimeFormat()` 将改变本函数的取值。

## 示例

**`SeasLog::getDatetimeFormat()` 示例**

```php


<?php

var_dump(SeasLog::getDateTimeFormat());
var_dump(SeasLog::setDateTimeFormat('Ymd His'));
var_dump(SeasLog::getDateTimeFormat());

?>

   
```

以上示例的输出类似于：

```text


string(11) "Y-m-d H:i:s"
bool(true)
string(7) "Ymd His"

   
```

## 参见

 `SeasLog::setDatetimeFormat()`
