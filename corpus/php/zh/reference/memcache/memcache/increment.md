---
id: "zh-php-function-memcache-increment"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::increment"
aliases: ["memcache_increment"]
title: "增加一个元素的值"
signature: "int|false Memcache::increment(string $key, int $value = 1)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.increment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 增加一个元素的值

## 说明

```php
int|false Memcache::increment(string $key, int $value = 1)
```

```php
int|false memcache_increment(Memcache $memcache, string $key, int $value = 1)
```

`Memcache::increment()` 将指定元素的值增加 `$value`。如果指定 `$key` 对应的元素不是数值并且不能被转换为数值，将会设置值为 `$value`。如果元素不存在，则 `Memcache::increment()` *不会*创建该元素。

> 不要对已压缩存储的元素使用 `Memcache::increment()`，否则后续调用 `Memcache::get()` 将失败。

## 参数

- **`$key`** — 将要增加值的元素的 key。
- **`$value`** — 参数 `$value` 表明要将指定元素值增加多少。

## 返回值

成功时返回新的元素值 或者在失败时返回 `false`

## 示例

**`Memcache::increment()` 示例**

```php


<?php

/* procedural API */
$memcache_obj = memcache_connect('memcache_host', 11211);
/* increment counter by 2 */
$current_value = memcache_increment($memcache_obj, 'counter', 2);

/* OO API */
$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);
/* increment counter by 3 */
$current_value = $memcache_obj->increment('counter', 3);

?>

   
```

## 参见

 `Memcache::decrement()` `Memcache::replace()`
