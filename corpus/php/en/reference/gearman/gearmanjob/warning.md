---
id: "en-php-function-gearmanjob-warning"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::warning"
title: "Send a warning (deprecated)"
signature: "public bool GearmanJob::warning(string $warning)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.warning.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a warning (deprecated)

## Description

```php
public bool GearmanJob::warning(string $warning)
```

Sends a warning for this job while it is running.

> This method has been replaced by `GearmanJob::sendWarning()` in the 0.6.0 release of the Gearman extension.

## Parameters

- **`$warning`** — A warning messages.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::sendComplete()` `GearmanJob::sendException()` `GearmanJob::sendFail()`
