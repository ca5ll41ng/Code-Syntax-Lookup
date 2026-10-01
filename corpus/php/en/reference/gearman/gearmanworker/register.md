---
id: "en-php-function-gearmanworker-register"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::register"
title: "Register a function with the job server"
signature: "public bool GearmanWorker::register(string $function_name, int $timeout = 0)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.register.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a function with the job server

## Description

```php
public bool GearmanWorker::register(string $function_name, int $timeout = 0)
```

Registers a function name with the job server with an optional timeout. The timeout specifies how many seconds the server will wait before marking a job as failed. If the timeout is set to zero, there is no timeout.

## Parameters

- **`$function_name`** — The name of a function to register with the job server
- **`$timeout`** — An interval of time in seconds

## Return Values

A standard Gearman return value.

## See Also

 `GearmanWorker::unregister()` `GearmanWorker::unregisterAll()`
