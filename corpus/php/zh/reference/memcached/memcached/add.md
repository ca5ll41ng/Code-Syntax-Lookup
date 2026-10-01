---
id: "zh-php-function-memcached-add"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::add"
title: "向新 key 添加元素"
signature: "public bool Memcached::add(string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向新 key 添加元素

## 说明

```php
public bool Memcached::add(string $key, mixed $value, int $expiration = 0)
```

`Memcached::add()` 与 `Memcached::set()` 类似，但如果 `$key` 已经在服务端存在，则操作失败。

## 参数

- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果 key 已经存在，`Memcached::getResultCode()` 将会返回 `Memcached::RES_NOTSTORED`。

## 参见

`Memcached::addByKey()` `Memcached::set()` `Memcached::replace()`
