---
id: "zh-php-function-memcache-getextendedstats"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::getExtendedStats"
aliases: ["memcache_get_extended_stats"]
title: "缓存服务器池中所有服务器统计信息"
signature: "array Memcache::getExtendedStats([string $type = ...], [int $slabid = ...], int $limit = 100)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.getextendedstats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 缓存服务器池中所有服务器统计信息

## 说明

```php
array Memcache::getExtendedStats([string $type = ...], [int $slabid = ...], int $limit = 100)
```

```php
array memcache_get_extended_stats(Memcache $memcache, [string $type = ...], [int $slabid = ...], int $limit = 100)
```

`Memcache::getExtendedStats()` 返回二维关联数组，包含服务器统计信息。数组的 key 对应服务器的 host:port，value 包含各个服务器的统计信息。如果服务器失败，则值为 `false`。

> 这个函数在 Memcache 2.0.0 版本加入。

> (译注)获取 Memcache 内所有数据方法：首先使用 getExtendedStats('slabs') 获取到每个服务器上活动 slabs 分块的 id， 然后 使用 getExtendedStats('cachedump', $slabid, $limit) 来获取每个 slab 里面缓存的项，其中 $slabid 是 slab 分块 id， $limit 指 期望获取其中的多少条记录。

## 参数

- **`$type`** — 期望抓取的统计信息类型，可以使用的值有 {reset, malloc, maps, cachedump, slabs, items, sizes}。 通过 memcached 协议指定这些附加参数是为了方便 memcache 开发者（检查其中的变动）。
- **`$slabid`** — 用于与参数 `$type` 联合从指定 slab 分块拷贝数据，cachedump 命令会完全占用服务器通常用于 比较严格的调试。
- **`$limit`** — 用于和参数`$type`联合来设置 cachedump 时从服务端获取的实体条数。

> 出于安全原因，cachedump stat 类型已经从 memcached 守护程序中移除。

## 返回值

返回一个二维关联数组的服务器统计信息或者在失败时返回 `false`。

## 示例

**`Memcache::getExtendedStats()` 示例**

```php


<?php
    $memcache_obj = new Memcache;
    $memcache_obj->addServer('memcache_host', 11211);
    $memcache_obj->addServer('failed_host', 11211);

    $stats = $memcache_obj->getExtendedStats();
    print_r($stats);
?>

   
```

以上示例会输出：

```text


Array
(
    [memcache_host:11211] => Array
        (
            [pid] => 3756
            [uptime] => 603011
            [time] => 1133810435
            [version] => 1.1.12
            [rusage_user] => 0.451931
            [rusage_system] => 0.634903
            [curr_items] => 2483
            [total_items] => 3079
            [bytes] => 2718136
            [curr_connections] => 2
            [total_connections] => 807
            [connection_structures] => 13
            [cmd_get] => 9748
            [cmd_set] => 3096
            [get_hits] => 5976
            [get_misses] => 3772
            [bytes_read] => 3448968
            [bytes_written] => 2318883
            [limit_maxbytes] => 33554432
        )

    [failed_host:11211] => false
)

   
```

## 参见

 `Memcache::getVersion()` `Memcache::getStats()`
