---
id: "en-php-function-function-wincache-ucache-meminfo"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_meminfo"
title: "Retrieves information about user cache memory usage"
signature: "array|false wincache_ucache_meminfo()"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-meminfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves information about user cache memory usage

## Description

```php
array|false wincache_ucache_meminfo()
```

Retrieves information about memory usage by user cache.

## Parameters

This function has no parameters.

## Return Values

Array of meta data about user cache memory usage or `false` on failure

The array returned by this function contains the following elements:

- `memory_total` - amount of memory in bytes allocated for the user cache
- `memory_free` - amount of free memory in bytes available for the user cache
- `num_used_blks` - number of memory blocks used by the user cache
- `num_free_blks` - number of free memory blocks available for the user cache
- `memory_overhead` - amount of memory in bytes used for the user cache internal structures

## Examples

**A `wincache_ucache_meminfo()` example**

```php


<pre>
<?php
print_r(wincache_ucache_meminfo());
?>
</pre>


    
```

The above example will output:

```text


Array 
( 
    [memory_total] => 5242880 
    [memory_free] => 5215056 
    [num_used_blks] => 6 
    [num_free_blks] => 3 
    [memory_overhead] => 176
) 

    
```

## See Also

`wincache_fcache_fileinfo()` `wincache_fcache_meminfo()` `wincache_ocache_fileinfo()` `wincache_rplist_fileinfo()` `wincache_rplist_meminfo()` `wincache_refresh_if_changed()` `wincache_ucache_info()` `wincache_scache_info()` `wincache_scache_meminfo()`
