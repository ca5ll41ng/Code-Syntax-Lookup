---
id: "en-php-function-gearmanjob-handle"
language: "php"
lang: "en"
category: "function"
name: "GearmanJob::handle"
title: "Get the job handle"
signature: "public false|string GearmanJob::handle()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanjob.handle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the job handle

## Description

```php
public false|string GearmanJob::handle()
```

Returns the opaque job handle assigned by the job server.

## Parameters

This function has no parameters.

## Return Values

An opaque job handle, or `false` if the job has not yet been initialized.

## See Also

 `GearmanTask::jobHandle()`
