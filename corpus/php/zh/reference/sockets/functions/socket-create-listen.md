---
id: "zh-php-function-function-socket-create-listen"
language: "php"
lang: "zh"
category: "function"
name: "socket_create_listen"
title: "在端口上打开一个套接字以接受连接"
signature: "Socket|false socket_create_listen(int $port, int $backlog = SOMAXCONN)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-create-listen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在端口上打开一个套接字以接受连接

## 说明

```php
Socket|false socket_create_listen(int $port, int $backlog = SOMAXCONN)
```

`socket_create_listen()` 创建一个 `AF_INET` 类型的 `Socket` 实例，在*所有*本地接口上监听指定端口，等待新连接。

此方法旨在简化创建新的套接字任务，仅监听且用于接受新连接。

## 参数

- **`$port`** — 监听所有接口的端口号
- **`$backlog`** — `$backlog` 参数定义了待处理的连接队列的最大长度。`SOMAXCONN` 可以作为 `$backlog` 参数，详情见 `socket_listen()`。

## 返回值

`socket_create_listen()` 成功时返回一个新的 `Socket` 实例，错误时返回 `false`。可以通过调用 `socket_last_error()` 来检索实际的错误码。将错误码作为参数传递给 `socket_strerror()` 以获得错误的文本解释。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 默认值现在是 `SOMAXCONN`。 之前是 `128`。 |
| 8.0.0 | 成功时，该函数现在返回一个 `Socket` 实例；在此之前，返回值是一个 `resource`。 |

## 注释

> 如果想创建只监听某个接口的套接字，需要使用 `socket_create()`，`socket_bind()` 和 `socket_listen()`。

## 参见

`socket_create()` `socket_create_pair()` `socket_bind()` `socket_listen()` `socket_last_error()` `socket_strerror()`
