---
id: "en-php-function-syncsharedmemory-read"
language: "php"
lang: "en"
category: "function"
name: "SyncSharedMemory::read"
title: "Copy data from named shared memory"
signature: "public SyncSharedMemory::read(int $start = 0, [int $length = ...])"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsharedmemory.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy data from named shared memory

## Description

```php
public SyncSharedMemory::read(int $start = 0, [int $length = ...])
```

Copies data from named shared memory.

## Parameters

- **`$start`** — The start/offset, in bytes, to begin reading.
  > If the value is negative, the starting position will begin at the specified number of bytes from the end of the shared memory segment.


- **`$length`** — The number of bytes to read.
  > If unspecified, reading will stop at the end of the shared memory segment.
  >
  > If the value is negative, reading will stop the specified number of bytes from the end of the shared memory segment.



## Return Values

A string containing the data read from shared memory.

## Examples

**`SyncSharedMemory::__construct()` example**

```php


<?php
// You will probably need to protect shared memory with other synchronization objects.
// Shared memory goes away when the last reference to it disappears.
$mem = new SyncSharedMemory("AppReportName", 1024);
if ($mem->first())
{
    // Do first time initialization work here.
}

$result = $mem->write("report.txt");

$result = $mem->read(3, -4);
var_dump($result);
?>

   
```

The above example will output something similar to:

```text


string(3) "ort"

   
```

## See Also

 `SyncSharedMemory::__construct()` `SyncSharedMemory::first()` `SyncSharedMemory::write()` `SyncSharedMemory::read()`
