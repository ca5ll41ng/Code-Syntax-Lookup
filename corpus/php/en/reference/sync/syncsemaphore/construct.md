---
id: "en-php-function-syncsemaphore-construct"
language: "php"
lang: "en"
category: "function"
name: "SyncSemaphore::__construct"
title: "Constructs a new SyncSemaphore object"
signature: "public SyncSemaphore::__construct([string $name = ...], int $initialval = 1, bool $autounlock = true)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsemaphore.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new SyncSemaphore object

## Description

```php
public SyncSemaphore::__construct([string $name = ...], int $initialval = 1, bool $autounlock = true)
```

Constructs a named or unnamed semaphore.

## Parameters

- **`$name`** — The name of the semaphore if this is a named semaphore object.
  > If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.


- **`$initialval`** — The initial value of the semaphore. This is the number of locks that may be obtained.
- **`$autounlock`** — Specifies whether or not to automatically unlock the semaphore at the conclusion of the PHP script.
  > If an object is: A named semaphore with an autounlock of `false`, the object is locked, and the PHP script concludes before the object is unlocked, then the underlying semaphore will end up in an inconsistent state.



## Return Values

The new `SyncSemaphore` object.

## Errors/Exceptions

An exception is thrown if the semaphore cannot be created or opened.

## Examples

**`SyncSemaphore::__construct()` example**

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

 `SyncSemaphore::lock()` `SyncSemaphore::unlock()`
