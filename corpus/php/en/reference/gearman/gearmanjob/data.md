---
id: "en-php-function-gearmanjob-data"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::data"
title: "Send data for a running job (deprecated)"
signature: "public bool GearmanJob::data(string $data)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data for a running job (deprecated)

## Description

```php
public bool GearmanJob::data(string $data)
```

Sends data to the job server (and any listening clients) for this job.

> This method has been replaced by `GearmanJob::sendData()` in the 0.6.0 release of the Gearman extension.

## Parameters

- **`$data`** — Arbitrary serialized data.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::workload()` `GearmanTask::data()`
