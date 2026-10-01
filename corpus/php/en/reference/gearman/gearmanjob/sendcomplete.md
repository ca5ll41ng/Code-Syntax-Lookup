---
id: "en-php-function-gearmanjob-sendcomplete"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::sendComplete"
title: "Send the result and complete status"
signature: "public bool GearmanJob::sendComplete(string $result)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.sendcomplete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send the result and complete status

## Description

```php
public bool GearmanJob::sendComplete(string $result)
```

Sends result data and the complete status update for this job.

## Parameters

- **`$result`** — Serialized result data.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::sendFail()` `GearmanJob::setReturn()`
