---
id: "en-php-function-syncmutex-unlock"
language: "php"
lang: "en"
category: "function"
name: "SyncMutex::unlock"
title: "Unlocks the mutex"
signature: "public bool SyncMutex::unlock(bool $all = false)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncmutex.unlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unlocks the mutex

## Description

```php
public bool SyncMutex::unlock(bool $all = false)
```

Decreases the internal counter of a `SyncMutex` object. When the internal counter reaches zero, the actual lock on the object is released.

## Parameters

- **`$all`** — Specifies whether or not to set the internal counter to zero and therefore release the lock.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncMutex::unlock()` example**

```php


<?php
$mutex = new SyncMutex("UniqueName");

$mutex->lock();

/* ... */

$mutex->unlock();
?>

   
```

## See Also

 `SyncMutex::lock()`
