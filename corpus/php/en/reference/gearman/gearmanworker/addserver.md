---
id: "en-php-function-gearmanworker-addserver"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::addServer"
title: "Add a job server"
signature: "public bool GearmanWorker::addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.addserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a job server

## Description

```php
public bool GearmanWorker::addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true)
```

Adds a job server to this worker. This goes into a list of servers than can be used to run jobs. No socket I/O happens here.

## Parameters

- **`$host`** — The job server host name.
- **`$port`** — The job server port.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Add alternate Gearman servers**

```php


<?php
$worker= new GearmanWorker();
$worker->addServer("10.0.0.1");
$worker->addServer("10.0.0.2", 7003);
?>

   
```

## See Also

 `GearmanWorker::addServers()`
