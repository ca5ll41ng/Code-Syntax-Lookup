---
id: "zh-php-function-seaslog-info"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::info"
title: "Record info log information"
signature: "public static bool SeasLog::info(string $message, [array $content = ...], [string $logger = ...])"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Record info log information

## 说明

```php
public static bool SeasLog::info(string $message, [array $content = ...], [string $logger = ...])
```

记录 info 日志

> “INFO”——重要事件、强调应用程序的运行过程。

## 参数

- **`$message`** — 日志消息。
- **`$content`** — `message` 包含占位符，实现用 content 数组中的值替换这些占位符。 例如 `message` 是 `log info from {NAME}`，`content` 是 `array('NAME' => neeke)`， 日志信息是 `log info from neeke`。
- **`$logger`** — 当函数调用 SeasLog::setLogger() 时，就像临时 logger 一样，在第三个参数中使用这个 `logger`。 如果 `logger` 为 NULL 或 ""，那么 SeasLog 将使用由 `SeasLog::setLogger()` 设置的最新日志记录程序。

## 返回值

记录日志信息成功返回 TRUE，失败返回 FALSE。

## 示例

**`SeasLog::info()` 示例**

```php


<?php

var_dump(SeasLog::info('log message'));

//with content
var_dump(SeasLog::info('log message from {NAME}',array('NAME' => 'neeke')));

//with tmp logger
var_dump(SeasLog::info('log message from {NAME}',array('NAME' => 'neeke'),'tmp_logger'));

var_dump(SeasLog::getBuffer());

?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(true)
array(2) {
  ["/var/log/www/default/20180707.log"]=>
  array(2) {
    [0]=>
    string(81) "2018-07-07 11:45:49 | INFO | 73263 | 5b40376d1067c | 1530935149.68 | log message
"
    [1]=>
    string(92) "2018-07-07 11:45:49 | INFO | 73263 | 5b40376d1067c | 1530935149.68 | log message from neeke
"
  }
  ["/var/log/www/tmp_logger/20180707.log"]=>
  array(1) {
    [0]=>
    string(92) "2018-07-07 11:45:49 | INFO | 73263 | 5b40376d1067c | 1530935149.68 | log message from neeke
"
  }
}

   
```

## 参见

 seaslog.default_template `SeasLog::debug()` `SeasLog::notice()` `SeasLog::warning()` `SeasLog::error()` `SeasLog::critical()` `SeasLog::alert()` `SeasLog::emergency()` `SeasLog::log()`
