---
id: "en-php-function-function-wincache-rplist-fileinfo"
language: "php"
lang: "en"
category: "function"
name: "wincache_rplist_fileinfo"
title: "Retrieves information about resolve file path cache"
signature: "array|false wincache_rplist_fileinfo(bool $summaryonly = false)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-rplist-fileinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves information about resolve file path cache

## Description

```php
array|false wincache_rplist_fileinfo(bool $summaryonly = false)
```

Retrieves information about cached mappings between relative file paths and corresponding absolute file paths.

## Parameters

- **`$summaryonly`**

## Return Values

Array of meta data about the resolve file path cache or `false` on failure

The array returned by this function contains the following elements:

- `total_file_count` - total number of file path mappings stored in the cache
- `rplist_entries` - an array that contains the information about all the cached file paths: - `resolve_path` - path to a file - `subkey_data` - corresponding absolute path to a file

## Examples

**A `wincache_rplist_fileinfo()` example**

```php


<pre>
<?php
print_r(wincache_rplist_fileinfo());
?>
</pre>


    
```

The above example will output:

```text


Array
(
    [total_file_count] => 5
    [rplist_entries] => Array
        (
            [1] => Array
                (
                    [resolve_path] => checkcache.php
                    [subkey_data] => c:\inetpub\wwwroot|c:\inetpub\wwwroot\checkcache.php
                )

            [2] => Array (...iterates for each cached file)
        )
)

    
```

## See Also

`wincache_fcache_meminfo()` `wincache_fcache_fileinfo()` `wincache_ocache_fileinfo()` `wincache_ocache_meminfo()` `wincache_rplist_meminfo()` `wincache_refresh_if_changed()` `wincache_ucache_meminfo()` `wincache_ucache_info()` `wincache_scache_info()` `wincache_scache_meminfo()`
