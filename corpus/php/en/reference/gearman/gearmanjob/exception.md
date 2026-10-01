---
id: "en-php-function-gearmanjob-exception"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::exception"
title: "Send exception for running job (deprecated)"
signature: "public bool GearmanJob::exception(string $exception)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.exception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send exception for running job (deprecated)

## Description

```php
public bool GearmanJob::exception(string $exception)
```

Sends the supplied exception when this job is running.

> This method has been replaced by `GearmanJob::sendException()` in the 0.6.0 release of the Gearman extension.

## Parameters

- **`$exception`** — An exception description.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::setReturn()` `GearmanJob::sendStatus()` `GearmanJob::sendWarning()`
