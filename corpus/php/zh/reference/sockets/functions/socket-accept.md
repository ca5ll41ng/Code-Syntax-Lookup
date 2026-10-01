---
id: "zh-php-function-function-socket-accept"
language: "php"
lang: "zh"
category: "function"
name: "socket_accept"
title: "接受套接字上的连接"
signature: "Socket|false socket_accept(Socket $socket)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 接受套接字上的连接

## 说明

```php
Socket|false socket_accept(Socket $socket)
```

`$socket` 是从 `socket_create()` 创建，使用 `socket_bind()` 绑定，`socket_listen()` 监听的一个套接字实例。此函数接受在 `$socket` 上创建的连接。当连接被成功创建后，返回一个可用于通信的 `Socket` 实例。若有多个连接排队，返回队头第一个连接。若没有待处理的连接，那么 `socket_accept()` 默认阻塞，直到有一个连接出现。如果 `$socket` 使用 `socket_set_blocking()` 或 `socket_set_nonblock()` 设置为非阻塞，那么 `socket_accept()` 将直接返回 `false`。

`socket_accept()` 返回的 `Socket` 实例不能用于接受新的连接。但 `$socket` 依然保持打开状态，并且可以继续接受新的连接。

## 参数

- **`$socket`** — 使用 `socket_create()` 创建的 `Socket` 实例。

## 返回值

成功时返回一个新的 `Socket` 实例，错误时返回 `false`。可以通过调用 `socket_last_error()` 来检索实际的错误代码。将错误代码作为参数传递给 `socket_strerror()` 以获得错误的文本解释。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，该函数现在返回一个 `Socket` 实例；在此之前，返回值是一个 `resource`。 |

## 参见

`socket_connect()` `socket_listen()` `socket_create()` `socket_bind()` `socket_strerror()`
