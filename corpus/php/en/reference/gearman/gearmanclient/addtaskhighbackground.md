---
id: "en-php-function-gearmanclient-addtaskhighbackground"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addTaskHighBackground"
title: "Add a high priority background task to be run in parallel"
signature: "public GearmanTask|false GearmanClient::addTaskHighBackground(string $function_name, string|int|float $workload, mixed $context = null, string|null $unique_key = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addtaskhighbackground.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a high priority background task to be run in parallel

## Description

```php
public GearmanTask|false GearmanClient::addTaskHighBackground(string $function_name, string|int|float $workload, mixed $context = null, string|null $unique_key = null)
```

Adds a high priority background task to be run in parallel with other tasks. Call this method for all the tasks to be run in parallel, then call `GearmanClient::runTasks()` to perform the work. Tasks with a high priority will be selected from the queue before those of normal or low priority.

## Parameters

- **`$function_name`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$context`** — Application context to associate with a task
- **`$unique_key`** — A unique ID used to identify a particular task

## Return Values

A `GearmanTask` object or `false` if the task could not be added.

## See Also

 `GearmanClient::addTask()` `GearmanClient::addTaskHigh()` `GearmanClient::addTaskLow()` `GearmanClient::addTaskBackground()` `GearmanClient::addTaskLowBackground()` `GearmanClient::runTasks()`
