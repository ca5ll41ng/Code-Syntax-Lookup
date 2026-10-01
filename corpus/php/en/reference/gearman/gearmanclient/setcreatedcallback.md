---
id: "en-php-function-gearmanclient-setcreatedcallback"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setCreatedCallback"
title: "Set a callback for when a task is queued"
signature: "public bool GearmanClient::setCreatedCallback(callable $callback)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setcreatedcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a callback for when a task is queued

## Description

```php
public bool GearmanClient::setCreatedCallback(callable $callback)
```

Sets a callback function to be called when a task is received and queued by the Gearman job server.

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

 `GearmanClient::setDataCallback()` `GearmanClient::setCompleteCallback()` `GearmanClient::setExceptionCallback()` `GearmanClient::setFailCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
