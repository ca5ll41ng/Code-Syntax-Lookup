---
id: "en-php-function-gearmanworker-addservers"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::addServers"
title: "Add job servers"
signature: "public bool GearmanWorker::addServers(string $servers = null, bool $setupExceptionHandler = true)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.addservers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add job servers

## Description

```php
public bool GearmanWorker::addServers(string $servers = null, bool $setupExceptionHandler = true)
```

Adds one or more job servers to this worker. These go into a list of servers that can be used to run jobs. No socket I/O happens here.

## Parameters

- **`$servers`** — A comma separated list of job servers in the format host:port. If no port is specified, it defaults to 4730.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Add two job servers**

```php


<?php

$worker= new GearmanWorker();
$worker->addServers("10.0.0.1,10.0.0.2:7003");

?>

   
```

## See Also

 `GearmanWorker::addServer()`
