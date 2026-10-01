---
id: "en-php-function-syncmutex-construct"
language: "php"
lang: "en"
category: "function"
name: "SyncMutex::__construct"
title: "Constructs a new SyncMutex object"
signature: "public SyncMutex::__construct([string $name = ...])"
module: "sync"
source_url: "https://www.php.net/manual/en/syncmutex.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new SyncMutex object

## Description

```php
public SyncMutex::__construct([string $name = ...])
```

Constructs a named or unnamed countable mutex.

## Parameters

- **`$name`** — The name of the mutex if this is a named mutex object.
  > If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.



## Return Values

The new `SyncMutex` object.

## Errors/Exceptions

An exception is thrown if the mutex cannot be created or opened.

## Examples

**`SyncMutex::__construct()` named mutex with lock timeout example**

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

**`SyncMutex::__construct()` unnamed mutex example**

```php


<?php
$mutex = new SyncMutex();

$mutex->lock();

/* ... */

$mutex->unlock();
?>

   
```

## See Also

 `SyncMutex::lock()` `SyncMutex::unlock()`
