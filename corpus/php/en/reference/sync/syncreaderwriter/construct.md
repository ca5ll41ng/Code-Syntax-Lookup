---
id: "en-php-function-syncreaderwriter-construct"
language: "php"
lang: "en"
category: "function"
name: "SyncReaderWriter::__construct"
title: "Constructs a new SyncReaderWriter object"
signature: "public SyncReaderWriter::__construct([string $name = ...], int $autounlock = 1)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncreaderwriter.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new SyncReaderWriter object

## Description

```php
public SyncReaderWriter::__construct([string $name = ...], int $autounlock = 1)
```

Constructs a named or unnamed reader-writer object.

## Parameters

- **`$name`** — The name of the reader-writer if this is a named reader-writer object.
  > If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.


  > On Windows, `$name` must not contain backslashes.


- **`$autounlock`** — Specifies whether or not to automatically unlock the reader-writer at the conclusion of the PHP script.
  > If an object is: A named reader-writer with an autounlock of FALSE, the object is locked for either reading or writing, and the PHP script concludes before the object is unlocked, then the underlying objects will end up in an inconsistent state.



## Return Values

The new `SyncReaderWriter` object.

## Errors/Exceptions

An exception is thrown if the reader-writer cannot be created or opened.

## Examples

**`SyncReaderWriter::__construct()` example**

```php


<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->readlock();
/* ... */
$readwrite->readunlock();

$readwrite->writelock();
/* ... */
$readwrite->writeunlock();
?>

   
```

## See Also

 `SyncReaderWriter::readlock()` `SyncReaderWriter::readunlock()` `SyncReaderWriter::writelock()` `SyncReaderWriter::writeunlock()`
