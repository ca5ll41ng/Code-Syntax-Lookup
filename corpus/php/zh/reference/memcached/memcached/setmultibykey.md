---
id: "zh-php-function-memcached-setmultibykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::setMultiByKey"
title: "在指定服务器存储多个元素"
signature: "public bool Memcached::setMultiByKey(string $server_key, array $items, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.setmultibykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在指定服务器存储多个元素

## 说明

```php
public bool Memcached::setMultiByKey(string $server_key, array $items, int $expiration = 0)
```

除了可以使用 `$server_key` 自由的将 `$key` 映射到指定服务器外， `Memcached::setMultiByKey()` 在功能上等同于 `Memcached::setMulti()`。 （译注: 关于 *ByKey 系列方法及 $server_key 的工作原理请参照 addByKey 方法文档）。

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$items`** — 存放在服务器上的键／值对数组。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 参见

`Memcached::setMulti()` `Memcached::set()`
