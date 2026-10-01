---
id: "en-php-function-gearmanjob-sendstatus"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::sendStatus"
title: "Send status"
signature: "public bool GearmanJob::sendStatus(int $numerator, int $denominator)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.sendstatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send status

## Description

```php
public bool GearmanJob::sendStatus(int $numerator, int $denominator)
```

Sends status information to the job server and any listening clients. Use this to specify what percentage of the job has been completed.

## Parameters

- **`$numerator`** — The numerator of the percentage completed expressed as a fraction.
- **`$denominator`** — The denominator of the percentage completed expressed as a fraction.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanClient::jobStatus()` `GearmanTask::taskDenominator()` `GearmanTask::taskNumerator()`
