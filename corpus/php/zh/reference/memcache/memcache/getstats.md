---
id: "zh-php-function-memcache-getstats"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::getStats"
aliases: ["memcache_get_stats"]
title: "获取服务器统计信息"
signature: "array|false Memcache::getStats([string $type = ...], [int $slabid = ...], int $limit = 100)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.getstats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取服务器统计信息

## 说明

```php
array|false Memcache::getStats([string $type = ...], [int $slabid = ...], int $limit = 100)
```

```php
array|false memcache_get_stats(Memcache $memcache, [string $type = ...], [int $slabid = ...], int $limit = 100)
```

`Memcache::getStats()`返回关联数据，包含服务器统计信息。数组的 key 对应统计参数，value 对应参数的值。

## 参数

- **`$type`** — 期望抓取的统计信息类型，可以使用的值有{reset, malloc, maps, cachedump, slabs, items, sizes}。 通过memcached协议指定这些附加参数是为了方便memcache开发者(检查其中的变动)。
- **`$slabid`** — 用于与参数`$type`联合从指定slab分块拷贝数据，cachedump命令会完全占用服务器通常用于 比较严格的调试。
- **`$limit`** — 用于和参数`$type`联合来设置cachedump时从服务端获取的实体条数。

## 返回值

返回关联数组表示的服务器统计信息 或者在失败时返回 `false`

## 参见

 `Memcache::getVersion()` `Memcache::getExtendedStats()`
