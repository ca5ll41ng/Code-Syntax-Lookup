---
id: "en-php-function-gearmanjob-complete"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::complete"
title: "Send the result and complete status (deprecated)"
signature: "public bool GearmanJob::complete(string $result)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.complete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send the result and complete status (deprecated)

## Description

```php
public bool GearmanJob::complete(string $result)
```

Sends result data and the complete status update for this job.

> This method has been replaced by `GearmanJob::sendComplete()` in the 0.6.0 release of the Gearman extension.

## Parameters

- **`$result`** — Serialized result data.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::sendFail()` `GearmanJob::setReturn()`
