---
id: "zh-php-function-function-socket-connect"
language: "php"
lang: "zh"
category: "function"
name: "socket_connect"
title: "开启一个套接字连接"
signature: "bool socket_connect(Socket $socket, string $address, int|null $port = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开启一个套接字连接

## 说明

```php
bool socket_connect(Socket $socket, string $address, int|null $port = null)
```

使用 `Socket` 实例 `$socket` 发起到 `$address` 的连接，该实例必须要求是用 `socket_create()` 创建的 `Socket` 有效的套接字资源实例。

## 参数

- **`$socket`** — 由 `socket_create()` 创建的 `Socket` 实例。
- **`$address`** — 如果参数 `$socket` 是 `AF_INET`，那么参数 `$address` 则可以是一个点分四组表示法（例如 `127.0.0.1` ） 的 IPv4 地址；如果支持 IPv6 并且 `$socket` 是 `AF_INET6`，那么 `$address` 也可以是有效的 IPv6 地址（例如 `::1`）；如果套接字类型为 `AF_UNIX` ，那么 `$address` 也可以是一个 Unix 套接字。
- **`$port`** — 参数 `$port` 仅仅用于 `AF_INET` 和 `AF_INET6` 套接字连接的时候，并且是在此情况下是需要强制说明连接对应的远程服务器上的端口号。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 错误代码会传入 `socket_last_error()` ，如果将此参数传入 `socket_strerror()` 则可以得到错误的文字说明。

> 如果套接字是非堵塞的，此函数将返回 `false` 并产生一个错误 `Operation now in progress`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |
| 8.0.0 | `$port` 允许为空。 |

## 参见

`socket_bind()` `socket_listen()` `socket_create()` `socket_last_error()` `socket_strerror()`
