---
id: "en-php-function-syncsharedmemory-size"
language: "php"
lang: "en"
category: "function"
name: "SyncSharedMemory::size"
title: "Returns the size of the named shared memory"
signature: "public int SyncSharedMemory::size()"
module: "sync"
source_url: "https://www.php.net/manual/en/syncsharedmemory.size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the size of the named shared memory

## Description

```php
public int SyncSharedMemory::size()
```

Retrieves the shared memory size of a `SyncSharedMemory` object.

## Parameters

This function has no parameters.

## Return Values

An integer containing the size of the shared memory. This will be the same size that was passed to the constructor.

## Examples

**`SyncSharedMemory::size()` example**

```php


<?php
$mem = new SyncSharedMemory("AppReportName", 1024);
var_dump($mem->size());
?>

   
```

The above example will output something similar to:

```text


int(1024)

   
```

## See Also

 `SyncSharedMemory::__construct()` `SyncSharedMemory::write()` `SyncSharedMemory::read()`
