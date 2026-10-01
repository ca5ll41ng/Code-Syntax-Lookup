---
id: "zh-php-function-memcache-setcompressthreshold"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::setCompressThreshold"
aliases: ["memcache_set_compress_threshold"]
title: "开启大值自动压缩"
signature: "bool Memcache::setCompressThreshold(int $threshold, [float $min_savings = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.setcompressthreshold.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开启大值自动压缩

## 说明

```php
bool Memcache::setCompressThreshold(int $threshold, [float $min_savings = ...])
```

```php
bool memcache_set_compress_threshold(Memcache $memcache, int $threshold, [float $min_savings = ...])
```

`Memcache::setCompressThreshold()` 开启对于大值的自动压缩。

> 此函数在 memcache 2.0.0 加入。

## 参数

- **`$threshold`** — 控制多大值进行自动压缩的阈值。
- **`$min_saving`** — 指定经过压缩实际存储的值的压缩率，支持的值必须在0和1之间。默认值是 0.2 表示 20% 压缩率。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::setCompressThreshold()` 示例**

```php


<?php

/* OO API */

$memcache_obj = new Memcache;
$memcache_obj->addServer('memcache_host', 11211);
$memcache_obj->setCompressThreshold(20000, 0.2);

/* procedural API */

$memcache_obj = memcache_connect('memcache_host', 11211);
memcache_set_compress_threshold($memcache_obj, 20000, 0.2);

?>

   
```
