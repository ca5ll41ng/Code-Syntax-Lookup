---
id: "en-php-function-function-shmop-size"
language: "php"
lang: "en"
category: "function"
name: "shmop_size"
title: "Get size of shared memory block"
signature: "int shmop_size(Shmop $shmop)"
module: "shmop"
source_url: "https://www.php.net/manual/en/function.shmop-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get size of shared memory block

## Description

```php
int shmop_size(Shmop $shmop)
```

`shmop_size()` is used to get the size, in bytes of the shared memory block.

## Parameters

- **`$shmop`** — The shared memory block identifier created by `shmop_open()`

## Return Values

Returns an int, which represents the number of bytes the shared memory block occupies.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shmop` expects a `Shmop` instance now; previously, a `resource` was expected. |

## Examples

**Getting the size of the shared memory block**

```php


<?php
$shm_size = shmop_size($shm_id);
?>

   
```

This example will put the size of shared memory block identified by `$shm_id` into `$shm_size`.
