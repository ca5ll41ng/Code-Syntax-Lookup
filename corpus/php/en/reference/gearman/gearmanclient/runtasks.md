---
id: "en-php-function-gearmanclient-runtasks"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::runTasks"
title: "Run a list of tasks in parallel"
signature: "public bool GearmanClient::runTasks()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.runtasks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run a list of tasks in parallel

## Description

```php
public bool GearmanClient::runTasks()
```

For a set of tasks previously added with `GearmanClient::addTask()`, `GearmanClient::addTaskHigh()`, `GearmanClient::addTaskLow()`, `GearmanClient::addTaskBackground()`, `GearmanClient::addTaskHighBackground()`, or `GearmanClient::addTaskLowBackground()`, this call starts running the tasks in parallel.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanClient::addTask()`
