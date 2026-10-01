---
id: "zh-php-function-memcached-casbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::casByKey"
title: "在指定服务器上比较并交换值"
signature: "public bool Memcached::casByKey(string|int|float $cas_token, string $server_key, string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.casbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在指定服务器上比较并交换值

## 说明

```php
public bool Memcached::casByKey(string|int|float $cas_token, string $server_key, string $key, mixed $value, int $expiration = 0)
```

除了可以使用 `$server_key` 将 `$key` 自由的映射到指定服务器外， `Memcached::casByKey()` 和 `Memcached::cas()` 在功能上是等同的。 这通常用于需要保持一批相关的 key 在一个中心服务器上的情况。

## 参数

- **`$cas_token`** — 与已存在元素关联的唯一的值，由 Memcache 生成。
- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果在元素尝试存储时发现在本客户端最后一次获取后被其他客户端修改，`Memcached::getResultCode()` 将返回 `Memcached::RES_DATA_EXISTS`。

## 参见

`Memcached::cas()`
