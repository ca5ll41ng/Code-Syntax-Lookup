---
id: "en-php-function-syncsharedmemory-construct"
language: "php"
lang: "en"
category: "function"
name: "SyncSharedMemory::__construct"
title: "Constructs a new SyncSharedMemory object"
signature: "public SyncSharedMemory::__construct(string $name, int $size)"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsharedmemory.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new SyncSharedMemory object

## Description

```php
public SyncSharedMemory::__construct(string $name, int $size)
```

Constructs a named shared memory object.

## Parameters

- **`$name`** — The name of the shared memory object.
  > If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.


- **`$size`** — The size, in bytes, of shared memory to reserve.
  > The amount of memory cannot be resized later. Request sufficient storage up front.



## Return Values

The new `SyncSharedMemory` object.

## Errors/Exceptions

An exception is thrown if the shared memory object cannot be created or opened.

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

$result = $mem->write(json_encode(array("name" => "my_report.txt")));
?>

   
```

## See Also

 `SyncSharedMemory::first()` `SyncSharedMemory::size()` `SyncSharedMemory::write()` `SyncSharedMemory::read()`
