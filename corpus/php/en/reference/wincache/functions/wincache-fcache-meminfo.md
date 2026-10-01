---
id: "en-php-function-function-wincache-fcache-meminfo"
language: "php"
lang: "en"
category: "function"
name: "wincache_fcache_meminfo"
title: "Retrieves information about file cache memory usage"
signature: "array|false wincache_fcache_meminfo()"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-fcache-meminfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves information about file cache memory usage

## Description

```php
array|false wincache_fcache_meminfo()
```

Retrieves information about memory usage by file cache.

## Parameters

This function has no parameters.

## Return Values

Array of meta data about file cache memory usage or `false` on failure

The array returned by this function contains the following elements:

- `memory_total` - amount of memory in bytes allocated for the file cache
- `memory_free` - amount of free memory in bytes available for the file cache
- `num_used_blks` - number of memory blocks used by the file cache
- `num_free_blks` - number of free memory blocks available for the file cache
- `memory_overhead` - amount of memory in bytes used for the file cache internal structures

## Examples

**A `wincache_fcache_meminfo()` example**

```php


<pre>
<?php
print_r(wincache_fcache_meminfo());
?>
</pre>


    
```

The above example will output:

```text


Array
(
    [memory_total] => 134217728
    [memory_free] => 131339120
    [num_used_blks] => 361
    [num_free_blks] => 3
    [memory_overhead] => 5856
)

    
```

## See Also

`wincache_fcache_fileinfo()` `wincache_ocache_fileinfo()` `wincache_ocache_meminfo()` `wincache_rplist_fileinfo()` `wincache_rplist_meminfo()` `wincache_refresh_if_changed()` `wincache_ucache_meminfo()` `wincache_ucache_info()` `wincache_scache_info()` `wincache_scache_meminfo()`
