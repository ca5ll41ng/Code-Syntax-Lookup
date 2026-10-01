---
id: "zh-php-function-memcached-getstats"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getStats"
title: "获取服务器池的统计信息"
signature: "public array|false Memcached::getStats(string|null $type = null)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getstats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取服务器池的统计信息

## 说明

```php
public array|false Memcached::getStats(string|null $type = null)
```

`Memcached::getStats()` 返回一个包含所有可用 memcache 服务器状态的数组。 返回的统计信息的详细描述参见 [memcache 协议]()。 （译注：经实验，服务器池中有不可用服务器时，返回 false）

## 参数

- **`$type`** — 要获取的统计的类型。

## 返回值

服务器统计信息数组，每个服务器一项， 或者在失败时返回 `false`。

## 示例

**`Memcached::getStats()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

print_r($m->getStats());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [localhost:11211] => Array
        (
            [pid] => 4933
            [uptime] => 786123
            [threads] => 1
            [time] => 1233868010
            [pointer_size] => 32
            [rusage_user_seconds] => 0
            [rusage_user_microseconds] => 140000
            [rusage_system_seconds] => 23
            [rusage_system_microseconds] => 210000
            [curr_items] => 145
            [total_items] => 2374
            [limit_maxbytes] => 67108864
            [curr_connections] => 2
            [total_connections] => 151
            [connection_structures] => 3
            [bytes] => 20345
            [cmd_get] => 213343
            [cmd_set] => 2381
            [get_hits] => 204223
            [get_misses] => 9120
            [evictions] => 0
            [bytes_read] => 9092476
            [bytes_written] => 15420512
            [version] => 1.2.6
        )

)

    
```
