---
id: "zh-php-function-function-socket-set-nonblock"
language: "php"
lang: "zh"
category: "function"
name: "socket_set_nonblock"
title: "设置套接字为非阻塞模式"
signature: "bool socket_set_nonblock(Socket $socket)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-set-nonblock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置套接字为非阻塞模式

## 说明

```php
bool socket_set_nonblock(Socket $socket)
```

`socket_set_nonblock()` 为由 `$socket` 参数指定的套接字设置 `O_NONBLOCK` 标记。

当一个操作（例如接收、发送、连接、接受连接……）在一个非阻塞套接字上执行时，脚本在接受到信号或操作处理完成前都不会暂停执行。如果操作会导致阻塞，被调用的函数将失败。

## 参数

- **`$socket`** — 由 `socket_create()` 或 `socket_accept()` 创建的 `Socket` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 示例

**`socket_set_nonblock()` 示例**

```php


<?php
$socket = socket_create_listen(1223);
socket_set_nonblock($socket);

socket_accept($socket);
?>

    
```

此示例在 1223 端口上创建了监听所有接口的套接字，并把此套接字设置为 `O_NONBLOCK` 模式。除非此时恰好有待处理的连接，否则 `socket_accept()` 将立即失败。

## 参见

`socket_set_block()` `socket_set_option()` `stream_set_blocking()`
