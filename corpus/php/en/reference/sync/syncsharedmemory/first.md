---
id: "en-php-function-syncsharedmemory-first"
language: "php"
lang: "en"
category: "function"
name: "SyncSharedMemory::first"
title: "Check to see if the object is the first instance system-wide of named shared memory"
signature: "public bool SyncSharedMemory::first()"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsharedmemory.first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check to see if the object is the first instance system-wide of named shared memory

## Description

```php
public bool SyncSharedMemory::first()
```

Retrieves the system-wide first instance status of a `SyncSharedMemory` object.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SyncSharedMemory::first()` example**

```php


<?php
$mem = new SyncSharedMemory("AppReportName", 1024);
if ($mem->first())
{
    // Do first time initialization work here.
}

var_dump($mem->first());

$mem2 = new SyncSharedMemory("AppReportName", 1024);

var_dump($mem2->first());
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(false)

   
```

## See Also

 `SyncSharedMemory::write()` `SyncSharedMemory::read()`
