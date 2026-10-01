---
id: "zh-php-function-seaslog-flushbuffer"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::flushBuffer"
title: "将日志缓存刷新到介质中，文件介质，或者发送到远端的 TCP/UDP 服务地址"
signature: "public static bool SeasLog::flushBuffer()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.flushbuffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将日志缓存刷新到介质中，文件介质，或者发送到远端的 TCP/UDP 服务地址

## 说明

```php
public static bool SeasLog::flushBuffer()
```

将日志缓存按照 seaslog.appender 刷新到介质： 文件介质，或发送到远端的 TCP/UDP 服务地址。

> 同时请留意： seaslog.appender_retry seaslog.remote_host seaslog.remote_port

## 参数

此函数没有参数。

## 返回值

刷新成功返回 TRUE，失败返回 FALSE。

## 示例

**`SeasLog::flushBuffer()` 示例**

```php


<?php

SeasLog::info('info log');
SeasLog::debug('debug log');
var_dump(SeasLog::getBuffer());
var_dump(SeasLog::flushBuffer());
var_dump(SeasLog::getBuffer());

?>

   
```

以上示例的输出类似于：

```text


array(1) {
  ["/var/log/www/default/20180707.log"]=>
  array(2) {
    [0]=>
    string(79) "2018-07-07 10:47:58 | INFO | 71910 | 5b4029ded6009 | 1530931678.877 | info log
"
    [1]=>
    string(81) "2018-07-07 10:47:58 | DEBUG | 71910 | 5b4029ded6009 | 1530931678.877 | debug log
"
  }
}
bool(true)
array(0) {
}

   
```

## 参见

 seaslog.use_buffer seaslog.buffer_size seaslog.buffer_disabled_in_cli `SeasLog::getBufferEnabled()` `SeasLog::getBuffer()`
