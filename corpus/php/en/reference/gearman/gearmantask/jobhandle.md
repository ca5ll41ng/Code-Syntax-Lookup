---
id: "en-php-function-gearmantask-jobhandle"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::jobHandle"
aliases: ["gearman_job_handle"]
title: "Get the job handle"
signature: "public false|string GearmanTask::jobHandle()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.jobhandle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the job handle

## Description

```php
public false|string GearmanTask::jobHandle()
```

Returns the job handle for this task.

## Parameters

This function has no parameters.

## Return Values

The opaque job handle, or `false` if the task has not yet been created.

## See Also

 `GearmanClient::doJobHandle()`
