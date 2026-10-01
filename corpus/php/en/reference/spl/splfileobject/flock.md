---
id: "en-php-function-splfileobject-flock"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::flock"
title: "Portable file locking"
signature: "public bool SplFileObject::flock(int $operation, int $wouldBlock = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.flock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Portable file locking

## Description

```php
public bool SplFileObject::flock(int $operation, int $wouldBlock = null)
```

Locks or unlocks the file in the same portable way as `flock()`.

## Parameters

- **`$operation`** — `$operation` is one of the following: - `LOCK_SH` to acquire a shared lock (reader). - `LOCK_EX` to acquire an exclusive lock (writer). - `LOCK_UN` to release a lock (shared or exclusive). — It is also possible to add `LOCK_NB` as a bitmask to one of the above operations, if `flock()` should not block during the locking attempt.
- **`$wouldBlock`** — Set to `true` if the lock would block (EWOULDBLOCK errno condition).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SplFileObject::flock()` example**

```php


<?php
$file = new SplFileObject("/tmp/lock.txt", "w");
if ($file->flock(LOCK_EX)) { // do an exclusive lock
    $file->ftruncate(0);     // truncate file
    $file->fwrite("Write something here\n");
    $file->flock(LOCK_UN);   // release the lock    
} else {
    echo "Couldn't get the lock!";
}
?>

    
```

## See Also

`flock()`
