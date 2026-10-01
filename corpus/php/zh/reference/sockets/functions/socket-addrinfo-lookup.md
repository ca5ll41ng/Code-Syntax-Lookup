---
id: "zh-php-function-function-socket-addrinfo-lookup"
language: "php"
lang: "zh"
category: "function"
name: "socket_addrinfo_lookup"
title: "获取数组，包含有关给定主机名的 getaddrinfo 内容"
signature: "array|false socket_addrinfo_lookup(string $host, string|null $service = null, array $hints = [])"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-addrinfo-lookup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取数组，包含有关给定主机名的 getaddrinfo 内容

## 说明

```php
array|false socket_addrinfo_lookup(string $host, string|null $service = null, array $hints = [])
```

查找可以连接到 `$host` 的不同方式。返回的数组包含 `AddressInfo` 实例列表，可以使用 `socket_addrinfo_bind()` 绑定这些实例。

## 参数

- **`$host`** — 搜索的主机名。
- **`$service`** — 要连接的服务。如果 service 是字符串数字，它指定为端口号。否则指定的是一个网络服务名称，会被操作系统映射到对应端口。
- **`$hints`** — Hints 提供了选择返回地址的标准。可以指定为由 getaddrinfo 定义的 hints 结构。

## 返回值

返回可以与 `socket_addrinfo_{*}()` 函数集一起使用的 `AddressInfo` 实例数组。失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，现在函数返回 `AddressInfo` 实例数组。在此之前，返回的是 `resource` 数组。 |
| 8.0.0 | `$service` 现在允许为 null。 |

## 参见

`socket_addrinfo_bind()` `socket_addrinfo_connect()` `socket_addrinfo_explain()`
