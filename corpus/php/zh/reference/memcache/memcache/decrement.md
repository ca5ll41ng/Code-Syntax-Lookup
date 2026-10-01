---
id: "zh-php-function-memcache-decrement"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::decrement"
aliases: ["memcache_decrement"]
title: "减小元素的值"
signature: "int|false Memcache::decrement(string $key, int $value = 1)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.decrement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 减小元素的值

## 说明

```php
int|false Memcache::decrement(string $key, int $value = 1)
```

```php
int|false memcache_decrement(Memcache $memcache, string $key, int $value = 1)
```

`Memcache::decrement()` 将元素的值减小 `$value`。类似于 `Memcache::increment()`，首先将元素当前值转换成数值然后减去 `$value`。

> 新的元素的值不会小于 0。

> 不要将 `Memcache::decrement()` 用于已压缩存储的元素，那样做会导致 `Memcache::get()` 方法获取值会失败。

`Memcache::decrement()` 在元素不存在时 *不会* 创建。

## 参数

- **`$key`** — 要减小值的元素的key。
- **`$value`** — `$value`参数指要将指定元素的值减小多少。

## 返回值

成功的时候返回元素的新值 或者在失败时返回 `false`

## 示例

**`Memcache::decrement()` example**

```php


<?php

/* procedural API */
$memcache_obj = memcache_connect('memcache_host', 11211);
/* 将test_item对应的值减小2 */
$new_value = memcache_decrement($memcache_obj, 'test_item', 2);

/* OO API */
$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);
/* decrement item by 3 */
$new_value = $memcache_obj->decrement('test_item', 3);
?>

    
```

## 参见

 `Memcache::increment()` `Memcache::replace()`
