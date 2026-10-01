---
id: "zh-php-function-memcache-set"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::set"
aliases: ["memcache_set"]
title: "存储数据到服务器"
signature: "bool Memcache::set(string $key, mixed $var, [int $flag = ...], [int $expire = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 存储数据到服务器

## 说明

```php
bool Memcache::set(string $key, mixed $var, [int $flag = ...], [int $expire = ...])
```

```php
bool memcache_set(Memcache $memcache, string $key, mixed $var, [int $flag = ...], [int $expire = ...])
```

`Memcache::set()` 向 `$key` 存储一个元素值为 `$var`。参数 `$expire` 是以秒为单位的失效时间， 如果设置为0表明该元素永不过期（但是它可能会因为为了给其他项分配空间而被删除）。如果你希望存储的元素 经过压缩（使用 zlib），你可以设置 `$flag` 的值为 `MEMCACHE_COMPRESSED`。

> 谨记：资源类型变量（比如文件或连接）不能被存储在缓存中，因为它们在序列化状态不能被完整描述。

## 参数

- **`$key`** — 要设置值的 key。
- **`$var`** — 要存储的值，字符串和数值直接存储，其他类型序列化后存储。
- **`$flag`** — 使用 `MEMCACHE_COMPRESSED` 指定对值进行压缩（使用 zlib）。
- **`$expire`** — 当前写入缓存的数据的失效时间。如果此值设置为0表明此数据永不过期。你可以设置一个 UNIX 时间戳或 以秒为单位的整数（从当前算起的时间差）来说明此数据的过期时间，但是在后一种设置方式中，不能超过 2592000 秒（30天）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::set()` 示例**

```php


<?php
/* procedural API */

/* connect to memcached server */
$memcache_obj = memcache_connect('memcache_host', 11211);

/*
设置 'var_key' 对应存储的值
flag 参数使用 0,值没有经过压缩
失效时间为 30 秒
*/
memcache_set($memcache_obj, 'var_key', 'some variable', 0, 30);

echo memcache_get($memcache_obj, 'var_key');

?>

    
```

**`Memcache::set()` 示例**

```php


<?php
/* OO API */

$memcache_obj = new Memcache;

/* connect to memcached server */
$memcache_obj->connect('memcache_host', 11211);

/*
设置'var_key'对应值，使用即时压缩
失效时间为50秒
*/
$memcache_obj->set('var_key', 'some really big variable', MEMCACHE_COMPRESSED, 50);

echo $memcache_obj->get('var_key');

?>

    
```

## 参见

 `Memcache::add()` `Memcache::replace()`
