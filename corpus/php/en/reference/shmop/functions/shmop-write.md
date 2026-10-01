---
id: "en-php-function-function-shmop-write"
language: "php"
lang: "en"
category: "function"
name: "shmop_write"
title: "Write data into shared memory block"
signature: "int shmop_write(Shmop $shmop, string $data, int $offset)"
module: "shmop"
source_url: "https://www.php.net/manual/en/function.shmop-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write data into shared memory block

## Description

```php
int shmop_write(Shmop $shmop, string $data, int $offset)
```

`shmop_write()` will write a string into shared memory block.

## Parameters

- **`$shmop`** — The shared memory block identifier created by `shmop_open()`
- **`$data`** — A string to write into shared memory block
- **`$offset`** — Specifies where to start writing data inside the shared memory segment. The offset must be greater than or equal to zero and less than or equal to the actual size of the shared memory segment.

## Return Values

The size of the written `$data`.

## Errors/Exceptions

If `$offset` is out of range, or a read-only shared memory segment should be written to, a `ValueError` is thrown.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Prior to PHP 8.0.0, `false` was returned on failure. |
| 8.0.0 | `$shmop` expects a `Shmop` instance now; previously, a `resource` was expected. |

## Examples

**Writing to shared memory block**

```php


<?php
$shm_bytes_written = shmop_write($shm_id, $my_string, 0);
?>

   
```

This example will write data inside `$my_string` into shared memory block, `$shm_bytes_written` will contain the number of bytes written.

## See Also

 `shmop_read()`
