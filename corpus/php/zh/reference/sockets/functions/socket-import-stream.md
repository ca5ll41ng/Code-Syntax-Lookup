---
id: "zh-php-function-function-socket-import-stream"
language: "php"
lang: "zh"
category: "function"
name: "socket_import_stream"
title: "导入 stream"
signature: "Socket|false socket_import_stream(resource $stream)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-import-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导入 stream

## 说明

```php
Socket|false socket_import_stream(resource $stream)
```

导入封装了 socket 的 stream 到 socket 扩展资源中。

## 参数

- **`$stream`** — 要导入的 stream 资源。

## 返回值

发生错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，该函数现在返回 `Socket` 实例；在此之前，返回 `resource`。 |

## 示例

**`socket_import_stream()` 示例**

```php


<?php
$stream = stream_socket_server("udp://0.0.0.0:58380", $errno, $errstr, STREAM_SERVER_BIND); 
$sock   = socket_import_stream($stream);
?>

    
```

## 参见

`stream_socket_server()`
