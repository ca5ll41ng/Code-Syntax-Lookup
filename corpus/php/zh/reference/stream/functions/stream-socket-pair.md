---
id: "zh-php-function-function-stream-socket-pair"
language: "php"
lang: "zh"
category: "function"
name: "stream_socket_pair"
title: "创建一对完全一样的网络套接字连接流"
signature: "array|false stream_socket_pair(int $domain, int $type, int $protocol)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-socket-pair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一对完全一样的网络套接字连接流

## 说明

```php
array|false stream_socket_pair(int $domain, int $type, int $protocol)
```

`stream_socket_pair()` 创建一对完全一样的网络套接字连接，这个函数通常会被用在进程间通信（Inter-Process Communication）。

## 参数

- **`$domain`** — 使用的协议族： `STREAM_PF_INET`, `STREAM_PF_INET6` or `STREAM_PF_UNIX`
- **`$type`** — 通信类型: `STREAM_SOCK_DGRAM`、 `STREAM_SOCK_RAW`、 `STREAM_SOCK_RDM`、 `STREAM_SOCK_SEQPACKET`、 `STREAM_SOCK_STREAM`
- **`$protocol`** — 使用的传输协议: `STREAM_IPPROTO_ICMP`、 `STREAM_IPPROTO_IP`、 `STREAM_IPPROTO_RAW`、 `STREAM_IPPROTO_TCP`、 `STREAM_IPPROTO_UDP`

> 关于每个常量的更多细节，请查阅 Stream 常量列表。

## 返回值

成功时将返回一个包含了两个 socket 资源的 `array`，错误时返回 `false`。

## 示例

**`stream_socket_pair()` 例子**

这个例子展示了 `stream_socket_pair()` 进程间通信的基本用法。

```php


<?php

$sockets = stream_socket_pair(STREAM_PF_UNIX, STREAM_SOCK_STREAM, STREAM_IPPROTO_IP);
$pid     = pcntl_fork();

if ($pid == -1) {
     die('could not fork');

} else if ($pid) {
    /* 父进程 */
    fclose($sockets[0]);

    fwrite($sockets[1], "child PID: $pid\n");
    echo fgets($sockets[1]);

    fclose($sockets[1]);

} else {
    /* 子进程 */
    fclose($sockets[1]);

    fwrite($sockets[0], "message from child\n");
    echo fgets($sockets[0]);

    fclose($sockets[0]);
}

?>

    
```

以上示例的输出类似于：

```text


child PID: 1378
message from child

    
```
