---
id: "zh-php-function-memcache-delete"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::delete"
aliases: ["memcache_delete"]
title: "从服务器删除元素"
signature: "bool Memcache::delete(string $key, int $exptime = 0)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从服务器删除元素

## 说明

```php
bool Memcache::delete(string $key, int $exptime = 0)
```

```php
bool memcache_delete(Memcache $memcache, string $key, int $exptime = 0)
```

`Memcache::delete()` 通过 `$key` 删除元素。

## 参数

- **`$key`** — 要删除的元素的key。
- **`$exptime`** — 不支持此弃用参数，并且默认为 `0` 秒。不要使用此参数。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL memcache 3.0.5 | `$exptime` 已经被弃用，不应该再提供。 除了 `0` 之外的值可能会导致意外错误。 |

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::delete()` 示例**

```php


<?php

/* procedural API */
$memcache_obj = memcache_connect('memcache_host', 11211);

/* 元素将会通过服务器删除 */
memcache_delete($memcache_obj, 'key_to_delete');

/* OO API */
$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);

$memcache_obj->delete('key_to_delete');

?>

   
```

## 参见

 `Memcache::set()` `Memcache::replace()`
