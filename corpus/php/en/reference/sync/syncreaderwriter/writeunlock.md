---
id: "en-php-function-syncreaderwriter-writeunlock"
language: "php"
lang: "en"
category: "function"
name: "SyncReaderWriter::writeunlock"
title: "Releases a write lock"
signature: "public bool SyncReaderWriter::writeunlock()"
module: "sync"
source_url: "https://www.php.net/manual/en/syncreaderwriter.writeunlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Releases a write lock

## Description

```php
public bool SyncReaderWriter::writeunlock()
```

Releases a write lock on a `SyncReaderWriter` object.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncReaderWriter::writeunlock()` example**

```php


<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->writelock();
/* ... */
$readwrite->writeunlock();
?>

   
```

## See Also

 `SyncReaderWriter::writelock()`
