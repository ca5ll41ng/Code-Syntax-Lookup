---
id: "en-php-function-syncreaderwriter-readlock"
language: "php"
lang: "en"
category: "function"
name: "SyncReaderWriter::readlock"
title: "Waits for a read lock"
signature: "public bool SyncReaderWriter::readlock(int $wait = -1)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncreaderwriter.readlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Waits for a read lock

## Description

```php
public bool SyncReaderWriter::readlock(int $wait = -1)
```

Obtains a read lock on a `SyncReaderWriter` object.

## Parameters

- **`$wait`** — The number of milliseconds to wait for a lock. A value of -1 is infinite.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncReaderWriter::readlock()` example**

```php


<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->readlock();
/* ... */
$readwrite->readunlock();
?>

   
```

## See Also

 `SyncReaderWriter::readunlock()`
