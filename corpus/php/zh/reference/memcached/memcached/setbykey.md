---
id: "zh-php-function-memcached-setbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::setByKey"
title: "将元素存储到指定的服务器上"
signature: "public bool Memcached::setByKey(string $server_key, string $key, mixed $value, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.setbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将元素存储到指定的服务器上

## 说明

```php
public bool Memcached::setByKey(string $server_key, string $key, mixed $value, int $expiration = 0)
```

除了可以使用 `$server_key` 自由的将 `$key` 映射到指定服务器外， `Memcached::setByKey()` 在功能上等同于 `Memcached::set()`。 （译注: 关于 *ByKey 系列方法及 $server_key 的工作原理请参照 addByKey 方法文档）。

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。
- **`$key`** — 用于存储值的键名。
- **`$value`** — 存储的值。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::setByKey()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

/* 保证 block-ip 系列 key 的存储在同一台服务器上。*/
$m->setByKey('api-cache', 'block-ip:169.254.253.252', 1);
$m->setByKey('api-cache', 'block-ip:169.127.127.202', 1);
?>

    
```

## 参见

`Memcached::set()`
