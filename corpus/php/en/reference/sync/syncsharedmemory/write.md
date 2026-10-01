---
id: "en-php-function-syncsharedmemory-write"
language: "php"
lang: "en"
category: "function"
name: "SyncSharedMemory::write"
title: "Copy data to named shared memory"
signature: "public SyncSharedMemory::write([string $string = ...], int $start = 0)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsharedmemory.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy data to named shared memory

## Description

```php
public SyncSharedMemory::write([string $string = ...], int $start = 0)
```

Copies data to named shared memory.

## Parameters

- **`$string`** — The data to write to shared memory.
  > If the size of the data exceeds the size of the shared memory, the number of bytes written returned will be less than the length of the input.


- **`$start`** — The start/offset, in bytes, to begin writing.
  > If the value is negative, the starting position will begin at the specified number of bytes from the end of the shared memory segment.



## Return Values

An integer containing the number of bytes written to shared memory.

## Examples

**`SyncSharedMemory::write()` example**

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
var_dump($result);

$result = $mem->write("report.txt", -3);
var_dump($result);
?>

   
```

The above example will output something similar to:

```text


int(10)
int(3)

   
```

## See Also

 `SyncSharedMemory::__construct()` `SyncSharedMemory::first()` `SyncSharedMemory::write()` `SyncSharedMemory::read()`
