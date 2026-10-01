---
id: "en-php-function-gearmantask-unique"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::unique"
title: "Get the unique identifier for a task"
signature: "public false|string GearmanTask::unique()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.unique.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the unique identifier for a task

## Description

```php
public false|string GearmanTask::unique()
```

Returns the unique identifier for this task. This is assigned by the `GearmanClient`, as opposed to the job handle which is set by the Gearman job server.

## Parameters

This function has no parameters.

## Return Values

The unique identifier, or `false` if no identifier is assigned.

## See Also

 `GearmanClient::do()` `GearmanClient::addTask()`
