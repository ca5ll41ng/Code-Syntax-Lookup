---
id: "en-php-function-gearmanclient-wait"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::wait"
title: "Wait for I/O activity on all connections in a client"
signature: "public bool GearmanClient::wait()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.wait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Wait for I/O activity on all connections in a client

## Description

```php
public bool GearmanClient::wait()
```

This waits for activity from any one of the connected servers.

## Parameters

This function has no parameters.

## Return Values

`true` on success `false` on an error.

## See Also

 `GearmanWorker::wait()`
