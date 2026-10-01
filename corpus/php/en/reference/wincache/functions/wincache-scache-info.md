---
id: "en-php-function-function-wincache-scache-info"
language: "php"
lang: "en"
category: "function"
name: "wincache_scache_info"
title: "Retrieves information about files cached in the session cache"
signature: "array|false wincache_scache_info(bool $summaryonly = false)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-scache-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves information about files cached in the session cache

## Description

```php
array|false wincache_scache_info(bool $summaryonly = false)
```

Retrieves information about session cache content and its usage.

## Parameters

- **`$summaryonly`** — Controls whether the returned array will contain information about individual cache entries along with the session cache summary.

## Return Values

Array of meta data about session cache or `false` on failure

The array returned by this function contains the following elements:

- `total_cache_uptime` - total time in seconds that the session cache has been active
- `total_item_count` - total number of elements that are currently in the session cache
- `is_local_cache` - true is the cache metadata is for a local cache instance, false if the metadata is for the global cache
- `total_hit_count` - number of times the data has been served from the cache
- `total_miss_count` - number of times the data has not been found in the cache
- `scache_entries` - an array that contains the information about all the cached items: - `key_name` - name of the key which is used to store the data - `value_type` - type of value stored by the key - `use_time` - time in seconds since the file has been accessed in the opcode cache - `last_check` - time in seconds since the file has been checked for modifications - `ttl_seconds` - time remaining for the data to live in the cache, 0 meaning infinite - `age_seconds` - time elapsed from the time data has been added in the cache - `hitcount` - number of times data has been served from the cache

## Examples

**A `wincache_scache_info()` example**

```php


<pre>
<?php
print_r(wincache_scache_info());
?>
</pre>


    
```

The above example will output:

```text


Array
(
    [total_cache_uptime] => 17357
    [total_file_count] => 121
    [total_hit_count] => 36562
    [total_miss_count] => 201
    [scache_entries] => Array
        (
            [1] => Array
                (
                    [file_name] => c:\inetpub\wwwroot\checkcache.php
                    [add_time] => 17356
                    [use_time] => 7
                    [last_check] => 10
                    [hit_count] => 454
                    [function_count] => 0
                    [class_count] => 1
                )
            [2] => Array (...iterates for each cached file)
        )
)

    
```

## See Also

`wincache_fcache_fileinfo()` `wincache_fcache_meminfo()` `wincache_ocache_meminfo()` `wincache_rplist_fileinfo()` `wincache_rplist_meminfo()` `wincache_refresh_if_changed()` `wincache_ucache_meminfo()` `wincache_ucache_info()` `wincache_scache_meminfo()`
