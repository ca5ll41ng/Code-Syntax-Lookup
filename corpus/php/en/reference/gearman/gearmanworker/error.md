---
id: "en-php-function-gearmanworker-error"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::error"
title: "Get the last error encountered"
signature: "public string|false GearmanWorker::error()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the last error encountered

## Description

```php
public string|false GearmanWorker::error()
```

Returns an error string for the last error encountered.

## Parameters

This function has no parameters.

## Return Values

A human readable error string, or `false` if there is no error message available.

## See Also

 `GearmanWorker::getErrno()`
