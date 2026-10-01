---
id: "en-php-function-gearmanclient-addservers"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addServers"
title: "Add a list of job servers to the client"
signature: "public bool GearmanClient::addServers(string $servers = null, bool $setupExceptionHandler = true)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addservers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a list of job servers to the client

## Description

```php
public bool GearmanClient::addServers(string $servers = null, bool $setupExceptionHandler = true)
```

Adds a list of job servers that can be used to run a task. No socket I/O happens here; the servers are simply added to the full list of servers.

## Parameters

- **`$servers`** — A comma-separated list of servers, each server specified in the format '`host:port`'.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Add two job servers**

```php


<?php

# Create our client object.
$gmclient= new GearmanClient();

# Add multiple job servers, the first on the default 4730 port
$gmclient->addServers("10.0.0.1,10.0.0.2:7003");

?>

   
```

## See Also

 `GearmanClient::addServer()`
