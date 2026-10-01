---
id: "zh-php-function-function-socket-recvfrom"
language: "php"
lang: "zh"
category: "function"
name: "socket_recvfrom"
title: "从套接字接收数据，无论它是否是面向连接的"
signature: "int|false socket_recvfrom(Socket $socket, string $data, int $length, int $flags, string $address, int $port = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-recvfrom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从套接字接收数据，无论它是否是面向连接的

## 说明

```php
int|false socket_recvfrom(Socket $socket, string $data, int $length, int $flags, string $address, int $port = null)
```

函数 `socket_recvfrom()` 使用 `$socket` 从 `$address` 的 `$port` 端口上接收 `$length` 字节数据到 `$data` 中（如果套接字不是 `AF_UNIX` 类型）。`socket_recvfrom()` 可用于从已连接或未连接的套接字上收集数据。另外，可以指定一个或多个标志来修改函数的行为。

`$address` 和 `$port` 必须是引用传递。如果套接字不是面向连接的，`$address` 将设置为远程主机的互联网协议地址或 UNIX 套接字路径。如果套接字是面向连接的，`$address` 是 `null`。另外，在 `AF_INET` 或 `AF_INET6` 套接字未连接的情况下，`$port` 将包含远程主机的端口号。

> 此函数可安全用于二进制对象。

## 参数

- **`$socket`** — `$socket` 必须是先前由 socket_create() 创建的 `Socket` 实例。
- **`$data`** — 收到的数据将提取到 `$data` 指定的变量。
- **`$length`** — 最多可从远程主机获取的 `$length` 字节数。
- **`$flags`** — `$flags` 的值可以是下列任意 flag 的组合。使用按位或运算符（`|`）来组合不同的 flag。
  | Flag | 描述 |
  | --- | --- |
  | `MSG_OOB` | 处理带外数据。 |
  | `MSG_PEEK` | 从接收队列的起始位置接收数据，但不将他们从接收队列中移除。 |
  | `MSG_WAITALL` | 在接受到至少 `$length` 字节数据前阻塞。但是，如果接收到中断信号，或远程主机断开链接，函数可能返回不足 `$length` 字节的数据。 |
  | `MSG_DONTWAIT` | 如果指定了该 flag，即使原有套接字是阻塞的，此函数也不会阻塞。 |


- **`$address`** — 如果套接字是 `AF_UNIX` 类型，`$address` 是文件路径。否则，对于未连接的套接字，`$address` 是远程主机的 IP 地址，如果套接字是面向连接的，是 `null`。
- **`$port`** — 此参数只适用于 `AF_INET` 和 `AF_INET6` 类型的套接字，并指定接收数据的远程端口。如果套接字是面向连接的，`$port` 是 `null`。

## 返回值

`socket_recvfrom()` 返回接收到的字节数，发生错误时返回 `false`。可以通过调用 `socket_last_error()` 来检索实际的错误代码。此错误码可以传递给 `socket_strerror()` 获得错误的文本解释。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 示例

**`socket_recvfrom()` 示例**

```php


<?php

$socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
socket_bind($socket, '127.0.0.1', 1223);

$from = '';
$port = 0;
socket_recvfrom($socket, $buf, 12, 0, $from, $port);

echo "Received $buf from remote address $from and remote port $port" . PHP_EOL;
?>

    
```

此示例将在 127.0.0.1 的 1233 端口上初始化 UDP 套接字，并打印从远程主机收到的至少 12 个字符。

## 参见

`socket_recv()` `socket_send()` `socket_sendto()` `socket_create()`
