---
id: "zh-php-function-memcached-getbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getByKey"
title: "从特定的服务器检索元素"
signature: "public mixed Memcached::getByKey(string $server_key, string $key, callable|null $cache_cb = null, int $get_flags = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从特定的服务器检索元素

## 说明

```php
public mixed Memcached::getByKey(string $server_key, string $key, callable|null $cache_cb = null, int $get_flags = 0)
```

`Memcached::getByKey()` 除了可以通过 `$server_key` 参数自由的指定 `$key` 所映射的服务器外，在功能上等同于 `Memcached::get()`。

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$key`** — 要读取的元素的 key。
- **`$cache_cb`** — 通读缓存回掉函数或 `null`。
- **`$get_flags`** — flag 控制返回结果。当指定 `Memcached::GET_EXTENDED` 的值时，将返回 CAS 记号。

## 返回值

返回存储在缓存中的值，否则返回 `false`。 如果 key 不存在，`Memcached::getResultCode()` 返回 `Memcached::RES_NOTFOUND`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL memcached 3.0.0 | 移除 `$cas_token` 参数。 相反，添加 `$get_flags`，当赋予 `Memcached::GET_EXTENDED` 的值时，将确保获取 CAS 记号。 |

## 参见

`Memcached::get()` `Memcached::getMulti()` `Memcached::getDelayed()`
