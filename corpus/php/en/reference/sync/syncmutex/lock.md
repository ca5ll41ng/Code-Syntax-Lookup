---
id: "en-php-function-syncmutex-lock"
language: "php"
lang: "en"
category: "function"
name: "SyncMutex::lock"
title: "Waits for an exclusive lock"
signature: "public bool SyncMutex::lock(int $wait = -1)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncmutex.lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Waits for an exclusive lock

## Description

```php
public bool SyncMutex::lock(int $wait = -1)
```

Obtains an exclusive lock on a `SyncMutex` object. If the lock is already acquired, then this increments an internal counter.

## Parameters

- **`$wait`** — The number of milliseconds to wait for the exclusive lock. A value of -1 is infinite.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncMutex::lock()` example**

```php


<?php
$mutex = new SyncMutex("UniqueName");

if (!$mutex->lock(3000))
{
    echo "Unable to lock mutex.";

    exit();
}

/* ... */

$mutex->unlock();
?>

   
```

## See Also

 `SyncMutex::unlock()`
