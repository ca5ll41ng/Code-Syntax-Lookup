---
id: "en-php-function-syncreaderwriter-writelock"
language: "php"
lang: "en"
category: "function"
name: "SyncReaderWriter::writelock"
title: "Waits for an exclusive write lock"
signature: "public bool SyncReaderWriter::writelock(int $wait = -1)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncreaderwriter.writelock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Waits for an exclusive write lock

## Description

```php
public bool SyncReaderWriter::writelock(int $wait = -1)
```

Obtains an exclusive write lock on a `SyncReaderWriter` object.

## Parameters

- **`$wait`** — The number of milliseconds to wait for a lock. A value of -1 is infinite.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncReaderWriter::writelock()` example**

```php


<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->writelock();
/* ... */
$readwrite->writeunlock();
?>

   
```

## See Also

 `SyncReaderWriter::writeunlock()`
