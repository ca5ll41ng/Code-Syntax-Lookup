---
id: "zh-php-function-function-socket-listen"
language: "php"
lang: "zh"
category: "function"
name: "socket_listen"
title: "监听套接字的连接"
signature: "bool socket_listen(Socket $socket, int $backlog = 0)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-listen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 监听套接字的连接

## 说明

```php
bool socket_listen(Socket $socket, int $backlog = 0)
```

`socket_create()` 创建套接字 `$socket` 并通过 `socket_bind()` 绑定名称后，可以监听 `$socket` 收到的连接。

`socket_listen()` 仅适用于 `SOCK_STREAM` 或 `SOCK_SEQPACKET` 类型的套接字。

## 参数

- **`$socket`** — 由 `socket_create()` 或 `socket_addrinfo_bind()` 创建的套接字实例。
- **`$backlog`** — `$backlog` 指定处理连接请求队列的最大值。如果一个连接请求到达时队列已满，客户端可能会收到 `ECONNREFUSED` 的错误提示。若底层协议支持重传，则忽略该请求，以便重试成功。。
  > 传递给 `$backlog` 参数的最大值取决于底层平台。Linux 中，超过最大值将默认截取为 `SOMAXCONN`。win32 中，如果超过 `SOMAXCONN` 的值，负责套接字的底层服务将把 backlog 设置为最大的 *reasonable* 合理值，在此平台上，没有提供可以找到 backlog 实际值的标准描述。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 可以通过 `socket_last_error()` 来检索错误码。将错误码作为参数传递给 `socket_strerror()` 以获得错误的文本解释。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 参见

`socket_accept()` `socket_bind()` `socket_connect()` `socket_create()` `socket_strerror()` `socket_addrinfo_bind()`
