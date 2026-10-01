---
id: "en-php-function-gearmanworker-echo"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::echo"
title: "Test job server response"
signature: "public bool GearmanWorker::echo(string $workload)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.echo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test job server response

## Description

```php
public bool GearmanWorker::echo(string $workload)
```

Sends data to all job servers to see if they echo it back. This is a test function to see if job servers are responding properly.

## Parameters

- **`$workload`** — Arbitrary serialized data

## Return Values

Standard Gearman return value.

## See Also

 `GearmanClient::echo()`
