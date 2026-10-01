---
id: "en-php-function-syncsemaphore-unlock"
language: "php"
lang: "en"
category: "function"
name: "SyncSemaphore::unlock"
title: "Increases the count of the semaphore"
signature: "public bool SyncSemaphore::unlock([int $prevcount = ...])"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsemaphore.unlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Increases the count of the semaphore

## Description

```php
public bool SyncSemaphore::unlock([int $prevcount = ...])
```

Increases the count of a `SyncSemaphore` object.

## Parameters

- **`$prevcount`** — Returns the previous count of the semaphore.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncSemaphore::unlock()` example**

```php


<?php
$semaphore = new SyncSemaphore("LimitedResource_2clients", 2);

if (!$semaphore->lock(3000))
{
    echo "Unable to lock semaphore.";

    exit();
}

/* ... */

$semaphore->unlock();
?>

   
```

## See Also

 `SyncSemaphore::lock()`
