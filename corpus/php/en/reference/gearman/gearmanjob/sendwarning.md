---
id: "en-php-function-gearmanjob-sendwarning"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::sendWarning"
title: "Send a warning"
signature: "public bool GearmanJob::sendWarning(string $warning)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.sendwarning.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a warning

## Description

```php
public bool GearmanJob::sendWarning(string $warning)
```

Sends a warning for this job while it is running.

## Parameters

- **`$warning`** — A warning message.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::sendComplete()` `GearmanJob::sendException()` `GearmanJob::sendFail()`
