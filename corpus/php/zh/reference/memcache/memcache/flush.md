---
id: "zh-php-function-memcache-flush"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::flush"
aliases: ["memcache_flush"]
title: "清洗（删除）已经存储的所有的元素"
signature: "bool Memcache::flush()"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清洗（删除）已经存储的所有的元素

## 说明

```php
bool Memcache::flush()
```

```php
bool memcache_flush(Memcache $memcache)
```

`Memcache::flush()` 会立即使所有已经存在的元素失效。`Memcache::flush()` 实际上不会释放任何资源，而是将所有元素标记为已过期，已占用的内存会在新元素存储时覆盖。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::flush()`示例**

```php


<?php

/* procedural API */
$memcache_obj = memcache_connect('memcache_host', 11211);

memcache_flush($memcache_obj);

/* OO API */

$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);

$memcache_obj->flush();

?>

   
```
