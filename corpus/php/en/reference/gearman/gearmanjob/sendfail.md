---
id: "en-php-function-gearmanjob-sendfail"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::sendFail"
title: "Send fail status"
signature: "public bool GearmanJob::sendFail()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.sendfail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send fail status

## Description

```php
public bool GearmanJob::sendFail()
```

Sends failure status for this job, indicating that the job failed in a known way (as opposed to failing due to a thrown exception).

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::sendException()` `GearmanJob::setReturn()` `GearmanJob::sendStatus()` `GearmanJob::sendWarning()`
