---
id: "zh-php-function-function-apcu-cache-info"
language: "php"
lang: "zh"
category: "function"
name: "apcu_cache_info"
title: "从 APCu 存储中获取缓存信息"
signature: "array|false apcu_cache_info(bool $limited = false)"
module: "apcu"
source_url: "https://www.php.net/manual/zh/function.apcu-cache-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 APCu 存储中获取缓存信息

## 说明

```php
array|false apcu_cache_info(bool $limited = false)
```

从 APCu 存储中获取缓存信息和元数据（meta-data）。

## 参数

- **`$limited`** — 如果 `$limited` 为 `true`，则不会返回具体被缓存的数据的列表，这在尝试根据统计数据进行调用优化时是很有用的。

## 返回值

成功时返回包含缓存数据（和元数据）的数组 或者在失败时返回 `false`

> 当 `apcu_cache_info()` 无法获取到缓存信息时会触发警告（warning），这种情况通常是因为没有开启 APC 功能。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL apcu 3.0.11 | 引入了 `$limited` 参数。 |
| PECL apcu 3.0.16 | 为 `$cache_type` 参数增加了 "`filehits`" 选项。 |

## 示例

**`apcu_cache_info()` 示例**

```php


<?php
print_r(apcu_cache_info());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [num_slots] => 2000
    [ttl] => 0
    [num_hits] => 9
    [num_misses] => 3
    [start_time] => 1123958803
    [cache_list] => Array
        (
            [0] => Array
                (
                    [filename] => /path/to/apcu_test.php
                    [device] => 29954
                    [inode] => 1130511
                    [type] => file
                    [num_hits] => 1
                    [mtime] => 1123960686
                    [creation_time] => 1123960696
                    [deletion_time] => 0
                    [access_time] => 1123962864
                    [ref_count] => 1
                    [mem_size] => 677
                )
            [1] => Array (...依次列出每个缓存文件)
)

   
```

## 参见

 APCu 配置指令 `APCUIterator::getTotalSize()` `APCUIterator::getTotalHits()` `APCUIterator::getTotalCount()`
