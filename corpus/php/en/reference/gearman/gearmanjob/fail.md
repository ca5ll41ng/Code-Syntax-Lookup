---
id: "en-php-function-gearmanjob-fail"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::fail"
title: "Send fail status (deprecated)"
signature: "public bool GearmanJob::fail()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.fail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send fail status (deprecated)

## Description

```php
public bool GearmanJob::fail()
```

Sends failure status for this job, indicating that the job failed in a known way (as opposed to failing due to a thrown exception).

> This method has been replaced by `GearmanJob::sendFail()` in the 0.6.0 release of the Gearman extension.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::sendException()` `GearmanJob::setReturn()` `GearmanJob::sendStatus()` `GearmanJob::sendWarning()`
