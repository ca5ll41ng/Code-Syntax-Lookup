---
id: "en-php-function-gearmantask-data"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::data"
title: "Get data returned for a task"
signature: "public false|string GearmanTask::data()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get data returned for a task

## Description

```php
public false|string GearmanTask::data()
```

Returns data being returned for a task by a worker.

## Parameters

This function has no parameters.

## Return Values

The serialized data, or `false` if no data is present.

## See Also

 `GearmanTask::dataSize()`
