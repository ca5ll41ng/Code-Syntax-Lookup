---
id: "zh-php-function-function-socket-getsockname"
language: "php"
lang: "zh"
category: "function"
name: "socket_getsockname"
title: "获取套接字本地端的名字，返回主机名和端口号或是 Unix 文件系统路径，具体取决于套接字类型"
signature: "bool socket_getsockname(Socket $socket, string $address, int $port = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-getsockname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取套接字本地端的名字，返回主机名和端口号或是 Unix 文件系统路径，具体取决于套接字类型

## 说明

```php
bool socket_getsockname(Socket $socket, string $address, int $port = null)
```

> `socket_getsockname()` 不应该用于 `socket_connect()` 创建的 `AF_UNIX` 类型套接字。只有使用 `socket_accept()` 创建的套接字或调用过 `socket_bind()` 的服务端套接字会返回有意义的值。

## 参数

- **`$socket`** — 由 `socket_create()` 或 `socket_accept()` 创建的 `Socket` 实例。
- **`$address`** — 如果给定套接字的类型是 `AF_INET` 或 `AF_INET6`，`socket_getsockname()` 将在参数 `$address` 上返回本地 *IP 地址* （例如：`127.0.0.1` 或 `fe80::1`），如果存在端口号，也将关联到 `$port` 参数。 — 如果给定套接字的类型是 `AF_UNIX`，`socket_getsockname()` 将在 `$address` 参数中返回 Unix 文件系统路径（例如：`/var/run/daemon.sock`）。
- **`$port`** — 如果提供此参数，它将保存关联的端口号。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果套接字类型不是 `AF_INET`、`AF_INET6` 或 `AF_UNIX` 中的任意一个，`socket_getsockname()` 也可能返回 `false`，在此情况下，套接字最后的错误码*不会*更新。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 参见

`socket_getpeername()` `socket_last_error()` `socket_strerror()`
