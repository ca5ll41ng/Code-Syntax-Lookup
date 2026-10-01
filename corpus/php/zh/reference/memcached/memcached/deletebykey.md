---
id: "zh-php-function-memcached-deletebykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::deleteByKey"
title: "从指定的服务器删除元素"
signature: "public bool Memcached::deleteByKey(string $server_key, string $key, int $time = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.deletebykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从指定的服务器删除元素

## 说明

```php
public bool Memcached::deleteByKey(string $server_key, string $key, int $time = 0)
```

`Memcached::deleteByKey()` 除了可以通过 `$server_key` 参数自由的指定 `$key` 所映射的服务器外，在功能上等同于 `Memcached::delete()`。

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$key`** — 要删除的 key。
- **`$time`** — 服务端等待删除该元素的总时间。
  > As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero `$time` will cause the deletion to fail. `Memcached::getResultCode()` will return `MEMCACHED_INVALID_ARGUMENTS`.



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果 key 不存在，`Memcached::getResultCode()` 返回 `Memcached::RES_NOTFOUND`。

## 参见

`Memcached::delete()` `Memcached::deleteMulti()` `Memcached::deleteMultiByKey()`
