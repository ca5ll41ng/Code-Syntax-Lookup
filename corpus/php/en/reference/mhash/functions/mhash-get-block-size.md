---
id: "en-php-function-function-mhash-get-block-size"
language: "php"
lang: "en"
category: "function"
name: "mhash_get_block_size"
title: "Gets the block size of the specified hash"
signature: "#[\\Deprecated(since: '8.1')] int|false mhash_get_block_size(int $algo)"
module: "mhash"
source_url: "https://www.php.net/manual/en/function.mhash-get-block-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the block size of the specified hash

## Description

```php
#[\Deprecated(since: '8.1')] int|false mhash_get_block_size(int $algo)
```

Gets the size of a block of the specified `$algo`.

## Parameters

- **`$algo`** — The hash ID. One of the `MHASH_hashname` constants.

## Return Values

Returns the size in bytes or `false`, if the `$algo` does not exist.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | This function has been deprecated. Use the `hash_*()` functions instead. |

## Examples

**`mhash_get_block_size()` Example**

```php


<?php

echo mhash_get_block_size(MHASH_MD5); // 16

?>

    
```
