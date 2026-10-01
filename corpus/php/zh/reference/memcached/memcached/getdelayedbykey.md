---
id: "zh-php-function-memcached-getdelayedbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getDelayedByKey"
title: "从指定的服务器上请求多个元素"
signature: "public bool Memcached::getDelayedByKey(string $server_key, array $keys, bool $with_cas = false, callable|null $value_cb = null)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getdelayedbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从指定的服务器上请求多个元素

## 说明

```php
public bool Memcached::getDelayedByKey(string $server_key, array $keys, bool $with_cas = false, callable|null $value_cb = null)
```

`Memcached::getDelayedByKey()` 除了可以通过 `$server_key` 参数自由的指定 `$key` 所映射的服务器外，在功能上等同于 `Memcached::getDelayed()`。(译注: 关于 *ByKey 系列方法及 $server_key 的工作原理请参照 addByKey 方法文档)

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$keys`** — 要请求的 key 的数组。
- **`$with_cas`** — 是否同时请求 CAS 标记。
- **`$value_cb`** — 结果回调函数或 `null`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 参见

`Memcached::getDelayed()` `Memcached::fetch()` `Memcached::fetchAll()`
