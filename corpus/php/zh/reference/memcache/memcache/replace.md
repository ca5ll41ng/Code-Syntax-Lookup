---
id: "zh-php-function-memcache-replace"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::replace"
aliases: ["memcache_replace"]
title: "替换已经存在的元素的值"
signature: "bool Memcache::replace(string $key, mixed $var, [int $flag = ...], [int $expire = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 替换已经存在的元素的值

## 说明

```php
bool Memcache::replace(string $key, mixed $var, [int $flag = ...], [int $expire = ...])
```

```php
bool memcache_replace(Memcache $memcache, string $key, mixed $var, [int $flag = ...], [int $expire = ...])
```

`Memcache::replace()` 通过 `$key` 来查找元素并替换其值。当 key 对应的元素不存在时，`Memcache::replace()` 返回 `false`。其他方面 `Memcache::replace()` 的行为和 `Memcache::set()` 一样。

## 参数

- **`$key`** — 期望替换值的元素的 key。
- **`$var`** — 将要存储的新的值，字符串和数值直接存储，其他类型序列化后存储。
- **`$flag`** — 使用 `MEMCACHE_COMPRESSED` 指定对值进行压缩（使用 zlib）。
- **`$expire`** — 当前写入缓存的数据的失效时间。如果此值设置为0表明此数据永不过期。你可以设置一个 UNIX 时间戳或 以秒为单位的整数（从当前算起的时间差）来说明此数据的过期时间，但是在后一种设置方式中，不能超过 2592000 秒（30天）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::replace()` 示例**

```php


<?php

$memcache_obj = memcache_connect('memcache_host', 11211);

/* procedural API */
memcache_replace($memcache_obj, "test_key", "some variable", false, 30);

/* OO API */
$memcache_obj->replace("test_key", "some variable", false, 30);

?>

   
```

## 参见

 `Memcache::set()` `Memcache::add()`
