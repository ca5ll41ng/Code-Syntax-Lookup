---
id: "zh-php-function-seaslog-log"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::log"
title: "公共的日志记录函数"
signature: "public static bool SeasLog::log(string $level, [string $message = ...], [array $content = ...], [string $logger = ...])"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.log.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 公共的日志记录函数

## 说明

```php
public static bool SeasLog::log(string $level, [string $message = ...], [array $content = ...], [string $logger = ...])
```

公共的日志记录函数。可用于调用者扩展日志模板或级别。

## 参数

- **`$level`** — 可以使用以下预设级别： SEASLOG_DEBUG SEASLOG_INFO SEASLOG_NOTICE SEASLOG_WARNING SEASLOG_ERROR SEASLOG_CRITICAL SEASLOG_ALERT SEASLOG_EMERGENCY 或者你可以自助创建新的级别。
- **`$message`** — 日志消息
- **`$content`** — `message` 包含占位符，实现用 content 数组中的值替换这些占位符。 例如 `message` 是 `log info from {NAME}`，`content` 是 `array('NAME' => neeke)`， 日志信息是 `log info from neeke`。
- **`$logger`** — 当函数调用 SeasLog::setLogger() 时，就像临时 logger 一样，在第三个参数中使用这个 `logger`。 如果 `logger` 为 NULL 或 ""，那么 SeasLog 将使用由 `SeasLog::setLogger()` 设置的最新日志记录程序。

## 返回值

记录日志信息成功返回 TRUE，失败返回 FALSE。

## 示例

**`SeasLog::log()` 示例**

```php


<?php

var_dump(SeasLog::log(SEASLOG_INFO,'info log'));
var_dump(SeasLog::getBuffer());

//create a new level self-help.
var_dump(SeasLog::log('MySelfLevel','info log'));
var_dump(SeasLog::getBuffer());

//with `content`
var_dump(SeasLog::log('MySelfLevel','info log {NAME}',array('NAME' => 'neeke')));
var_dump(SeasLog::getBuffer());

//with `logger`
var_dump(SeasLog::log('MySelfLevel','info log {NAME}',array('NAME' => 'neeke'),'tmp_logger'));
var_dump(SeasLog::getBuffer());


?>

   
```

以上示例的输出类似于：

```text


bool(true)
array(1) {
  ["/var/log/www/default/20180707.log"]=>
  array(1) {
    [0]=>
    string(79) "2018-07-07 11:12:37 | INFO | 72427 | 5b402fa56a2ea | 1530933157.436 | info log
"
  }
}

bool(true)
array(1) {
  ["/var/log/www/default/20180707.log"]=>
  array(1) {
    [0]=>
    string(86) "2018-07-07 11:13:59 | MySelfLevel | 72470 | 5b402ff781c5e | 1530933239.532 | info log
"
  }
}

bool(true)
array(1) {
  ["/var/log/www/tmp_logger/20180707.log"]=>
  array(1) {
    [0]=>
    string(92) "2018-07-07 11:28:12 | MySelfLevel | 72833 | 5b40334ce6a2f | 1530934092.946 | info log neeke
"
  }
}

bool(true)
array(1) {
  ["/var/log/www/default/20180707.log"]=>
  array(1) {
    [0]=>
    string(86) "2018-07-07 11:20:12 | INFO | 72616 | 5b40316c3641e | 1530933612.222 | info log neeke
"
  }
}

   
```

## 参见

 seaslog.default_template `SeasLog::debug()` `SeasLog::info()` `SeasLog::notice()` `SeasLog::warning()` `SeasLog::error()` `SeasLog::critical()` `SeasLog::alert()` `SeasLog::emergency()`
