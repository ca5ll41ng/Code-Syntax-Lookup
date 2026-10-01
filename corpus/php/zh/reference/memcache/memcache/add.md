---
id: "zh-php-function-memcache-add"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::add"
aliases: ["memcache_add"]
title: "增加条目到服务器"
signature: "bool Memcache::add(string $key, mixed $var, [int $flag = ...], [int $expire = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 增加条目到服务器

## 说明

```php
bool Memcache::add(string $key, mixed $var, [int $flag = ...], [int $expire = ...])
```

```php
bool memcache_add(Memcache $memcache, string $key, mixed $var, [int $flag = ...], [int $expire = ...])
```

仅当服务器不存在该 key 时，`Memcache::add()` 以 `$key` 作为 key 存储变量 `$var`。

## 参数

- **`$key`** — 将要分配给变量的key。
- **`$var`** — 将要被存储的变量。字符串和整型被以原文存储，其他类型序列化后存储。
- **`$flag`** — 使用`MEMCACHE_COMPRESSED`标记对数据进行压缩(使用zlib)。
- **`$expire`** — 当前写入缓存的数据的失效时间。如果此值设置为0表明此数据永不过期。你可以设置一个UNIX时间戳或 以秒为单位的整数（从当前算起的时间差）来说明此数据的过期时间，但是在后一种设置方式中，不能超过 2592000秒（30天）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果这个key已经存在返回`false`。 `Memcache::add()`方法的其他行为类似 `Memcache::set()`。

## 示例

**`Memcache::add()`示例**

```php


<?php

$memcache_obj = memcache_connect("localhost", 11211);

/* 面向过程编程 API */
memcache_add($memcache_obj, 'var_key', 'test variable', false, 30);

/* 面向对象编程 API */
$memcache_obj->add('var_key', 'test variable', false, 30);

?>

   
```

## 参见

 `Memcache::set()` `Memcache::replace()`
