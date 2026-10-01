---
id: "zh-php-function-function-opcache-get-status"
language: "php"
lang: "zh"
category: "function"
name: "opcache_get_status"
title: "获取缓存的状态信息"
signature: "array|false opcache_get_status(bool $include_scripts = true)"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-get-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取缓存的状态信息

## 说明

```php
array|false opcache_get_status(bool $include_scripts = true)
```

该函数将返回内存中缓存实例的状态信息。不会返回有关文件缓存的任何信息。

## 参数

- **`$include_scripts`** — 包含脚本的具体声明信息。

## 返回值

返回可能包含脚本特定状态信息的数组， 或者在失败时返回 `false`。

## 错误／异常

在启用了 `opcache.restrict_api` 的情况下，如果当前路径在禁止规则里，将会出现 E_WARNING ；不会返回任何状态信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PHP 8.3.0 | opcache_get_status()['scripts'][n]['revalidate'] 现在包含 Unix 时间戳，表示下次重新验证脚本时间戳的时间，由 `opcache.revalidate_freq` INI 指令指定。 |

## 示例

**`opcache_get_status()` 示例**

```php


<?php
var_dump(opcache_get_status());
?>

   
```

以上示例的输出类似于：

```text


array(9) {
  'opcache_enabled' =>
  bool(true)
  'cache_full' =>
  bool(false)
  'restart_pending' =>
  bool(false)
  'restart_in_progress' =>
  bool(false)
  'memory_usage' =>
  array(4) {
    'used_memory' =>
    int(9167936)
    'free_memory' =>
    int(125049792)
    'wasted_memory' =>
    int(0)
    'current_wasted_percentage' =>
    double(0)
  }
  'interned_strings_usage' =>
  array(4) {
    'buffer_size' =>
    int(8388608)
    'used_memory' =>
    int(2593616)
    'free_memory' =>
    int(5794992)
    'number_of_strings' =>
    int(10358)
  }
  'opcache_statistics' =>
  array(13) {
    'num_cached_scripts' =>
    int(0)
    'num_cached_keys' =>
    int(0)
    'max_cached_keys' =>
    int(16229)
    'hits' =>
    int(0)
    'start_time' =>
    int(1733310010)
    'last_restart_time' =>
    int(0)
    'oom_restarts' =>
    int(0)
    'hash_restarts' =>
    int(0)
    'manual_restarts' =>
    int(0)
    'misses' =>
    int(0)
    'blacklist_misses' =>
    int(0)
    'blacklist_miss_ratio' =>
    double(0)
    'opcache_hit_rate' =>
    double(0)
  }
  'scripts' =>
  array(0) {
  }
  'jit' =>
  array(7) {
    'enabled' =>
    bool(false)
    'on' =>
    bool(false)
    'kind' =>
    int(5)
    'opt_level' =>
    int(4)
    'opt_flags' =>
    int(6)
    'buffer_size' =>
    int(0)
    'buffer_free' =>
    int(0)
  }
}

   
```

## 参见

 `opcache_get_configuration()`
