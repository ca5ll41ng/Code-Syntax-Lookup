---
id: "en-php-function-gearmantask-uuid"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::uuid"
title: "Get the unique identifier for a task (deprecated)"
signature: "public string GearmanTask::uuid()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.uuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the unique identifier for a task (deprecated)

## Description

```php
public string GearmanTask::uuid()
```

Returns the unique identifier for this task. This is assigned by the `GearmanClient`, as opposed to the job handle which is set by the Gearman job server.

> This method has been replaced by `GearmanTask::unique()` in the 0.6.0 release of the Gearman extension.

## Parameters

This function has no parameters.

## Return Values

The unique identifier, or `false` if no identifier is assigned.

## See Also

 `GearmanClient::do()` `GearmanClient::addTask()`
