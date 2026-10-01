---
id: "zh-php-function-memcached-addbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::addByKey"
title: "在特定服务器上向新 key 添加元素"
signature: "public bool Memcached::addByKey(string $server_key, string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.addbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在特定服务器上向新 key 添加元素

## 说明

```php
public bool Memcached::addByKey(string $server_key, string $key, mixed $value, int $expiration = 0)
```

`Memcached::addByKey()` 在功能上等同于 `Memcached::add()`，只是可以自由的指定 `$server_key` 用于将 `$key` 映射到特定的服务器。如果需要将一堆相关的 key 保存在特定的服务器时非常有用。(译注: $server_key 也是普通的 key, ByKey 系列接口的工作过程是: 首先, 对 $server_key 进行 hash, 得到 $server_key 应该存储的服务器, 然后将相应的操作在 $server_key 所在的服务器上进行。)

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。如果 key 已经存在，`Memcached::getResultCode()` 将会返回 `Memcached::RES_NOTSTORED`。

## 参见

`Memcached::add()` `Memcached::set()` `Memcached::replace()`
