---
id: "zh-php-function-function-socket-addrinfo-connect"
language: "php"
lang: "zh"
category: "function"
name: "socket_addrinfo_connect"
title: "指定 addrinfo 创建并连接套接字"
signature: "Socket|false socket_addrinfo_connect(AddressInfo $address)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-addrinfo-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 指定 addrinfo 创建并连接套接字

## 说明

```php
Socket|false socket_addrinfo_connect(AddressInfo $address)
```

创建 `Socket` 实例，并连接到 `AddressInfo` 实例。此函数的返回值可以和其余套接字函数一起使用。

## 参数

- **`$address`** — 从 `socket_addrinfo_lookup()` 创建的 `AddressInfo` 实例。

## 返回值

成功时返回 `Socket` 实例，失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在该函数成功时返回 `Socket` 实例；在此之前，返回值是 `resource`。 |
| 8.0.0 | 现在 `$address` 是 `AddressInfo` 实例， 之前是 `resource`。 |

## 参见

`socket_addrinfo_bind()` `socket_addrinfo_explain()` `socket_addrinfo_lookup()`
