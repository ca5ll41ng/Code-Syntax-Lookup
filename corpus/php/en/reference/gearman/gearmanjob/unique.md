---
id: "en-php-function-gearmanjob-unique"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::unique"
title: "Get the unique identifier"
signature: "public false|string GearmanJob::unique()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.unique.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the unique identifier

## Description

```php
public false|string GearmanJob::unique()
```

Returns the unique identifier for this job. The identifier is assigned by the client.

## Parameters

This function has no parameters.

## Return Values

An opaque unique identifier, or `false` if the job has not yet been initialized.

## See Also

 `GearmanClient::do()` `GearmanTask::uuid()`
