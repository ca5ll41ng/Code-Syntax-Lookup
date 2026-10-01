---
id: "en-php-function-gearmanjob-sendexception"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::sendException"
title: "Send exception for running job (exception)"
signature: "public bool GearmanJob::sendException(string $exception)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.sendexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send exception for running job (exception)

## Description

```php
public bool GearmanJob::sendException(string $exception)
```

Sends the supplied exception when this job is running.

## Parameters

- **`$exception`** — An exception description.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::setReturn()` `GearmanJob::sendStatus()` `GearmanJob::sendWarning()`
