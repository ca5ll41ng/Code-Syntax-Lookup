---
id: "en-php-function-gearmanjob-status"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::status"
title: "Send status (deprecated)"
signature: "public bool GearmanJob::status(int $numerator, int $denominator)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send status (deprecated)

## Description

```php
public bool GearmanJob::status(int $numerator, int $denominator)
```

Sends status information to the job server and any listening clients. Use this to specify what percentage of the job has been completed.

> This method has been replaced by `GearmanJob::sendStatus()` in the 0.6.0 release of the Gearman extension.

## Parameters

- **`$numerator`** — The numerator of the percentage completed expressed as a fraction.
- **`$denominator`** — The denominator of the percentage completed expressed as a fraction.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanClient::jobStatus()` `GearmanTask::taskDenominator()` `GearmanTask::taskNumerator()`
