---
id: "zh-php-function-memcached-replace"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::replace"
title: "替换已存在 key 下的元素"
signature: "public bool Memcached::replace(string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 替换已存在 key 下的元素

## 说明

```php
public bool Memcached::replace(string $key, mixed $value, int $expiration = 0)
```

`Memcached::replace()` 和 `Memcached::set()` 类似，但是如果 服务端不存在 `$key`，操作将失败。

## 参数

- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果 key 不存在，`Memcached::getResultCode()` 返回 `Memcached::RES_NOTSTORED`。

## 参见

`Memcached::replaceByKey()` `Memcached::set()` `Memcached::add()`
