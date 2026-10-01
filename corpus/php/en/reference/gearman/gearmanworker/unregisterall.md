---
id: "en-php-function-gearmanworker-unregisterall"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::unregisterAll"
title: "Unregister all function names with the job servers"
signature: "public bool GearmanWorker::unregisterAll()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.unregisterall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unregister all function names with the job servers

## Description

```php
public bool GearmanWorker::unregisterAll()
```

Unregisters all previously registered functions, ensuring that no more jobs are sent to this worker.

## Parameters

This function has no parameters.

## Return Values

A standard Gearman return value.

## See Also

 `GearmanWorker::register()` `GearmanWorker::unregister()`
