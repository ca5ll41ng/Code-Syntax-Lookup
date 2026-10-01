---
id: "en-php-function-function-wincache-rplist-meminfo"
language: "php"
lang: "en"
category: "function"
name: "wincache_rplist_meminfo"
title: "Retrieves information about memory usage by the resolve file path cache"
signature: "array|false wincache_rplist_meminfo()"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-rplist-meminfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves information about memory usage by the resolve file path cache

## Description

```php
array|false wincache_rplist_meminfo()
```

Retrieves information about memory usage by resolve file path cache.

## Parameters

This function has no parameters.

## Return Values

Array of meta data that describes memory usage by resolve file path cache. or `false` on failure

The array returned by this function contains the following elements:

- `memory_total` - amount of memory in bytes allocated for the resolve file path cache
- `memory_free` - amount of free memory in bytes available for the resolve file path cache
- `num_used_blks` - number of memory blocks used by the resolve file path cache
- `num_free_blks` - number of free memory blocks available for the resolve file path cache
- `memory_overhead` - amount of memory in bytes used for the internal structures of resolve file path cache

## Examples

**A `wincache_rplist_meminfo()` example**

```php


<pre>
<?php
print_r(wincache_rplist_meminfo());
?>
</pre>


    
```

The above example will output:

```text


Array
(
    [memory_total] => 9437184
    [memory_free] => 9416744
    [num_used_blks] => 23
    [num_free_blks] => 1
    [memory_overhead] => 416
)

    
```

## See Also

`wincache_fcache_fileinfo()` `wincache_fcache_meminfo()` `wincache_ocache_fileinfo()` `wincache_ocache_meminfo()` `wincache_rplist_fileinfo()` `wincache_refresh_if_changed()` `wincache_ucache_meminfo()` `wincache_ucache_info()` `wincache_scache_info()` `wincache_scache_meminfo()`
