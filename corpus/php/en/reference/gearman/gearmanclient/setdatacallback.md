---
id: "en-php-function-gearmanclient-setdatacallback"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setDataCallback"
title: "Callback function when there is a data packet for a task"
signature: "public bool GearmanClient::setDataCallback(callable $callback)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setdatacallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Callback function when there is a data packet for a task

## Description

```php
public bool GearmanClient::setDataCallback(callable $callback)
```

Sets the callback function for accepting data packets for a task.

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

 `GearmanClient::setCompleteCallback()` `GearmanClient::setCreatedCallback()` `GearmanClient::setExceptionCallback()` `GearmanClient::setFailCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
