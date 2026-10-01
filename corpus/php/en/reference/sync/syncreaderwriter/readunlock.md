---
id: "en-php-function-syncreaderwriter-readunlock"
language: "php"
lang: "en"
category: "function"
name: "SyncReaderWriter::readunlock"
title: "Releases a read lock"
signature: "public bool SyncReaderWriter::readunlock()"
module: "sync"
source_url: "https://www.php.net/manual/en/syncreaderwriter.readunlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Releases a read lock

## Description

```php
public bool SyncReaderWriter::readunlock()
```

Releases a read lock on a `SyncReaderWriter` object.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncReaderWriter::readunlock()` example**

```php


<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->readlock();
/* ... */
$readwrite->readunlock();
?>

   
```

## See Also

 `SyncReaderWriter::readlock()`
