---
id: "zh-php-function-seaslog-getlastlogger"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::getLastLogger"
title: "获得 SeasLog 最近的一次 Logger 名称"
signature: "public static string SeasLog::getLastLogger()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.getlastlogger.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得 SeasLog 最近的一次 Logger 名称

## 说明

```php
public static string SeasLog::getLastLogger()
```

使用函数 `SeasLog::getLastLogger()` 将获取 php.ini(seaslog.ini) 中配置的 seaslog.default_logger 值。

## 参数

此函数没有参数。

## 返回值

使用函数 `SeasLog::setLogger()` 将改变函数 `SeasLog::getLastLogger()` 的取值。

## 示例

**`SeasLog::getLastLogger()` 示例**

```php


<?php

var_dump(SeasLog::getLastLogger());
SeasLog::setLogger('theNewLogger');
var_dump(SeasLog::getLastLogger());
?>

   
```

以上示例的输出类似于：

```text


string(7) "default"
string(12) "theNewLogger"

   
```

## 参见

 `SeasLog::setLogger()`
