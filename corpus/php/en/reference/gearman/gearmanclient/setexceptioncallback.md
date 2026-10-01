---
id: "en-php-function-gearmanclient-setexceptioncallback"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setExceptionCallback"
title: "Set a callback for worker exceptions"
signature: "public bool GearmanClient::setExceptionCallback(callable $callback)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setexceptioncallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a callback for worker exceptions

## Description

```php
public bool GearmanClient::setExceptionCallback(callable $callback)
```

Specifies a callback function to call when a worker for a task sends an exception.

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

 `GearmanClient::setDataCallback()` `GearmanClient::setCompleteCallback()` `GearmanClient::setCreatedCallback()` `GearmanClient::setFailCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
