---
id: "en-php-function-function-mhash-count"
language: "php"
lang: "en"
category: "function"
name: "mhash_count"
title: "Gets the highest available hash ID"
signature: "#[\\Deprecated(since: '8.1')] int mhash_count()"
module: "mhash"
source_url: "https://www.php.net/manual/en/function.mhash-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the highest available hash ID

## Description

```php
#[\Deprecated(since: '8.1')] int mhash_count()
```

Gets the highest available hash ID.

## Parameters

This function has no parameters.

## Return Values

Returns the highest available hash ID. Hashes are numbered from 0 to this hash ID.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | This function has been deprecated. Use the `hash_*()` functions instead. |

## Examples

**Traversing all hashes**

```php


<?php

$nr = mhash_count();

for ($i = 0; $i <= $nr; $i++) {
    echo sprintf("The blocksize of %s is %d\n",
        mhash_get_hash_name($i),
        mhash_get_block_size($i));
}
?>

    
```
