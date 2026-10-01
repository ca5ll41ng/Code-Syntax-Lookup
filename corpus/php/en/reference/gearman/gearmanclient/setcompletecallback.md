---
id: "en-php-function-gearmanclient-setcompletecallback"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setCompleteCallback"
title: "Set a function to be called on task completion"
signature: "public bool GearmanClient::setCompleteCallback(callable $callback)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setcompletecallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a function to be called on task completion

## Description

```php
public bool GearmanClient::setCompleteCallback(callable $callback)
```

Use to set a callback function to be called when a `GearmanTask` is completed, or when `GearmanJob::sendComplete()` is invoked by a worker (whichever happens first).

This callback executes only when executing a `GearmanTask` using `GearmanClient::runTasks()`. It is not used for individual jobs.

> The callback will only be triggered for tasks that are added (e.g. by calling `GearmanClient::addTask()`) after calling this method.

## Parameters

- **`$callback`** — A function or method to call. It should return a valid Gearman return value. — If no return statement is present, it defaults to `GEARMAN_SUCCESS`.
  ```php
  int {callback}(GearmanTask $task, mixed $context)
  ```


  - **`$task`** — The task this callback is called for.
  - **`$context`** — Whatever has been passed to `GearmanClient::addTask()` (or equivalent method) as `$context`.



## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `GearmanClient::setDataCallback()` `GearmanClient::setCreatedCallback()` `GearmanClient::setExceptionCallback()` `GearmanClient::setFailCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
