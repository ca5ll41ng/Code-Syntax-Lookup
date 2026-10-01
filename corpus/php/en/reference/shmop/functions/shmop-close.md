---
id: "en-php-function-function-shmop-close"
language: "php"
lang: "en"
category: "function"
name: "shmop_close"
title: "Close shared memory block"
signature: "#[\\Deprecated(since: '8.0', message: 'as Shmop objects are freed automatically')] void shmop_close(Shmop $shmop)"
module: "shmop"
source_url: "https://www.php.net/manual/en/function.shmop-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close shared memory block

## Description

```php
#[\Deprecated(since: '8.0', message: 'as Shmop objects are freed automatically')] void shmop_close(Shmop $shmop)
```

> This function has no effect. Prior to PHP 8.0.0, this function was used to close the resource.

`shmop_close()` is used to close a shared memory block.

## Parameters

- **`$shmop`** — The shared memory block resource created by `shmop_open()`

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated, as this function has no effect anymore. |
| 8.0.0 | `$shmop` expects a `Shmop` instance now; previously, a `resource` was expected. |

## Examples

**Closing shared memory block**

```php


<?php
shmop_close($shm_id);
?>

   
```

This example will close shared memory block identified by `$shm_id`.

## See Also

 `shmop_open()`
