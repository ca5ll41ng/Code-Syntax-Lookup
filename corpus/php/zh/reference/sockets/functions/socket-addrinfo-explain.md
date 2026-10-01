---
id: "zh-php-function-function-socket-addrinfo-explain"
language: "php"
lang: "zh"
category: "function"
name: "socket_addrinfo_explain"
title: "获取有关 addrinfo 的信息"
signature: "array socket_addrinfo_explain(AddressInfo $address)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-addrinfo-explain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取有关 addrinfo 的信息

## 说明

```php
array socket_addrinfo_explain(AddressInfo $address)
```

`socket_addrinfo_explain()` 显露底层的 `addrinfo` 结构体。

## 参数

- **`$address`** — 从 `socket_addrinfo_lookup()` 创建的 `AddressInfo` 实例。

## 返回值

返回包含 `addrinfo` 结构体字段的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$address` 是 `AddressInfo` 实例， 之前是 `resource`。 |

## 参见

`socket_addrinfo_bind()` `socket_addrinfo_connect()` `socket_addrinfo_lookup()`
