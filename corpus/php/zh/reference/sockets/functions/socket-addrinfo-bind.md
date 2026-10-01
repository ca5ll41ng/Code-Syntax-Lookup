---
id: "zh-php-function-function-socket-addrinfo-bind"
language: "php"
lang: "zh"
category: "function"
name: "socket_addrinfo_bind"
title: "从给定的 addrinfo 创建并绑定一个套接字"
signature: "Socket|false socket_addrinfo_bind(AddressInfo $address)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-addrinfo-bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从给定的 addrinfo 创建并绑定一个套接字

## 说明

```php
Socket|false socket_addrinfo_bind(AddressInfo $address)
```

使用给定的 `AddressInfo` 创建并绑定一个 `Socket` 实例。此函数的返回值可以被 `socket_listen()` 使用。

## 参数

- **`$address`** — 从 `socket_addrinfo_lookup()` 创建的 `AddressInfo` 实例。

## 返回值

成功时返回一个 `Socket` 实例，失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，该函数现在返回一个 `Socket` 实例；在此之前，返回值是一个 `resource`。 |
| 8.0.0 | 现在 `$address` 是 `AddressInfo` 实例， 之前是 `resource`。 |

## 参见

`socket_addrinfo_connect()` `socket_addrinfo_explain()` `socket_addrinfo_lookup()` `socket_listen()`
