---
id: "en-php-function-gearmanclient-setfailcallback"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setFailCallback"
title: "Set callback for job failure"
signature: "public bool GearmanClient::setFailCallback(callable $callback)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setfailcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set callback for job failure

## Description

```php
public bool GearmanClient::setFailCallback(callable $callback)
```

Sets the callback function to be used when a task does not complete successfully.

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

 `GearmanClient::setDataCallback()` `GearmanClient::setCompleteCallback()` `GearmanClient::setCreatedCallback()` `GearmanClient::setExceptionCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
