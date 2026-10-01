---
id: "en-php-function-gearmanclient-addserver"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addServer"
title: "Add a job server to the client"
signature: "public bool GearmanClient::addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a job server to the client

## Description

```php
public bool GearmanClient::addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true)
```

Adds a job server to a list of servers that can be used to run a task. No socket I/O happens here; the server is simply added to the list.

## Parameters

- **`$host`** — The job server host name.
- **`$port`** — The job server port.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Adding two job servers**

```php


<?php

# Create our client object.
$gmclient= new GearmanClient();

# Add two job servers, the first on the default 4730 port
$gmclient->addServer("10.0.0.1");
$gmclient->addServer("10.0.0.2", 7003);

?>

   
```

## See Also

 `GearmanClient::addServers()`
