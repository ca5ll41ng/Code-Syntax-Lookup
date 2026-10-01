---
id: "en-php-function-function-mhash-get-hash-name"
language: "php"
lang: "en"
category: "function"
name: "mhash_get_hash_name"
title: "Gets the name of the specified hash"
signature: "#[\\Deprecated(since: '8.1')] string|false mhash_get_hash_name(int $algo)"
module: "mhash"
source_url: "https://www.php.net/manual/en/function.mhash-get-hash-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the name of the specified hash

## Description

```php
#[\Deprecated(since: '8.1')] string|false mhash_get_hash_name(int $algo)
```

Gets the name of the specified `$algo`.

## Parameters

- **`$algo`** — The hash ID. One of the `MHASH_hashname` constants.

## Return Values

Returns the name of the hash or `false`, if the hash does not exist.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | This function has been deprecated. Use the `hash_*()` functions instead. |

## Examples

**`mhash_get_hash_name()` Example**

```php


<?php

echo mhash_get_hash_name(MHASH_MD5); // MD5

?>

    
```
