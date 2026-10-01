---
id: "zh-php-function-seaslog-setlogger"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::setLogger"
title: "设置 SeasLog 的 Logger 名"
signature: "public static bool SeasLog::setLogger(string $logger)"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.setlogger.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 SeasLog 的 Logger 名

## 说明

```php
public static bool SeasLog::setLogger(string $logger)
```

使用函数 `SeasLog::setLogger()` 将改变函数 `SeasLog::getLastLogger()` 的取值。 这意味着，SeasLog 将会把日志信息记录在该 Logger 下。

## 参数

- **`$logger`** — Logger name.

## 返回值

设置 Logger 成功（在存储介质为文件时将创建目录或文件）返回 TRUE，失败返回 FALSE。

## 示例

**`SeasLog::setLogger()` 示例**

```php


<?php

var_dump(SeasLog::setLogger('testModule/testLogger'));

?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `SeasLog::getLastLogger()`
