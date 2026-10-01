---
id: "en-php-function-function-shmop-delete"
language: "php"
lang: "en"
category: "function"
name: "shmop_delete"
title: "Delete shared memory block"
signature: "bool shmop_delete(Shmop $shmop)"
module: "shmop"
source_url: "https://www.php.net/manual/en/function.shmop-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete shared memory block

## Description

```php
bool shmop_delete(Shmop $shmop)
```

`shmop_delete()` is used to delete a shared memory block.

## Parameters

- **`$shmop`** — The shared memory block resource created by `shmop_open()`

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$shmop` expects a `Shmop` instance now; previously, a `resource` was expected. |

## Examples

**Deleting shared memory block**

```php


<?php
shmop_delete($shm_id);
?>

   
```

This example will delete shared memory block identified by `$shm_id`.
