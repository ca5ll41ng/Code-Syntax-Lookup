---
id: "en-php-function-gearmanjob-workload"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::workload"
title: "Get workload"
signature: "public string GearmanJob::workload()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.workload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get workload

## Description

```php
public string GearmanJob::workload()
```

Returns the workload for the job. This is serialized data that is to be processed by the worker.

## Parameters

This function has no parameters.

## Return Values

Serialized data.

## See Also

 `GearmanClient::do()` `GearmanJob::workloadSize()`
