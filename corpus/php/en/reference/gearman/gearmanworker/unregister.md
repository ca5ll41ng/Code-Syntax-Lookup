---
id: "en-php-function-gearmanworker-unregister"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::unregister"
title: "Unregister a function name with the job servers"
signature: "public bool GearmanWorker::unregister(string $function_name)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.unregister.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unregister a function name with the job servers

## Description

```php
public bool GearmanWorker::unregister(string $function_name)
```

Unregisters a function name with the job servers ensuring that no more jobs (for that function) are sent to this worker.

## Parameters

- **`$function_name`** — The name of a function to register with the job server

## Return Values

A standard Gearman return value.

## See Also

 `GearmanWorker::register()` `GearmanWorker::unregisterAll()`
