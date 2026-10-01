---
id: "en-php-function-syncsemaphore-lock"
language: "php"
lang: "en"
category: "function"
name: "SyncSemaphore::lock"
title: "Decreases the count of the semaphore or waits"
signature: "public bool SyncSemaphore::lock(int $wait = -1)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsemaphore.lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decreases the count of the semaphore or waits

## Description

```php
public bool SyncSemaphore::lock(int $wait = -1)
```

Decreases the count of a `SyncSemaphore` object or waits until the semaphore becomes non-zero.

## Parameters

- **`$wait`** — The number of milliseconds to wait for the semaphore. A value of -1 is infinite.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncSemaphore::lock()` example**

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

 `SyncSemaphore::unlock()`
