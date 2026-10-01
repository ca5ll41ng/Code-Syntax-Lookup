---
id: "en-php-function-function-shmop-read"
language: "php"
lang: "en"
category: "function"
name: "shmop_read"
title: "Read data from shared memory block"
signature: "string shmop_read(Shmop $shmop, int $offset, int $size)"
module: "shmop"
source_url: "https://www.php.net/manual/en/function.shmop-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read data from shared memory block

## Description

```php
string shmop_read(Shmop $shmop, int $offset, int $size)
```

`shmop_read()` will read a string from shared memory block.

## Parameters

- **`$shmop`** — The shared memory block identifier created by `shmop_open()`
- **`$offset`** — Offset from which to start reading; must be greater than or equal to zero and less than or equal to the actual size of the shared memory segment.
- **`$size`** — The number of bytes to read; must be greater than or equal to zero, and the sum of `$offset` and `$size` must be less than or equal to the actual size of the shared memory segment. `0` reads shmop_size($shmid) - $start bytes.

## Return Values

Returns the data.

## Errors/Exceptions

If `$offset` or `$size` are out of range, a `ValueError` is thrown.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shmop` expects a `Shmop` instance now; previously, a `resource` was expected. |
| 8.0.0 | If `$offset` or `$size` are out of range, a `ValueError` is thrown; previously `E_WARNING` was emitted, and `false` was returned, |

## Examples

**Reading shared memory block**

```php


<?php
$shm_data = shmop_read($shm_id, 0, 50);
?>

   
```

This example will read 50 bytes from shared memory block and place the data inside `$shm_data`.

## See Also

 `shmop_write()`
