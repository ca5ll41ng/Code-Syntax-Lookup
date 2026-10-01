---
id: "en-php-function-gearmanjob-senddata"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::sendData"
title: "Send data for a running job"
signature: "public bool GearmanJob::sendData(string $data)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.senddata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data for a running job

## Description

```php
public bool GearmanJob::sendData(string $data)
```

Sends data to the job server (and any listening clients) for this job.

## Parameters

- **`$data`** — Arbitrary serialized data.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanJob::workload()` `GearmanTask::data()`
