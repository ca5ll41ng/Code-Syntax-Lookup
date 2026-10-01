---
id: "zh-php-function-seaslog-getbuffer"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::getBuffer"
title: "获取内存中的日志缓存数组"
signature: "public static array SeasLog::getBuffer()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.getbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取内存中的日志缓存数组

## 说明

```php
public static array SeasLog::getBuffer()
```

## 参数

此函数没有参数。

## 返回值

以 Array 形式返回内存中的日志缓存。

## 示例

**`SeasLog::getBuffer()` 示例**

```php


<?php

var_dump(SeasLog::info('info log'));
var_dump(SeasLog::debug('debug log'));
var_dump(SeasLog::getBuffer());

?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
array(1) {
  ["/var/log/www/default/20180707.log"]=>
  array(2) {
    [0]=>
    string(79) "2018-07-07 10:43:32 | INFO | 71785 | 5b4028d4c58d5 | 1530931412.810 | info log
"
    [1]=>
    string(81) "2018-07-07 10:43:32 | DEBUG | 71785 | 5b4028d4c58d5 | 1530931412.810 | debug log
"
  }
}

   
```

## 参见

 seaslog.use_buffer seaslog.buffer_size seaslog.buffer_disabled_in_cli `SeasLog::getBufferEnabled()` `SeasLog::flushBuffer()`
