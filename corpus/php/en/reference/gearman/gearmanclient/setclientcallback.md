---
id: "en-php-function-gearmanclient-setclientcallback"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::setClientCallback"
title: "Callback function when there is a data packet for a task (deprecated)"
signature: "public void GearmanClient::setClientCallback(callable $callback)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.setclientcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Callback function when there is a data packet for a task (deprecated)

## Description

```php
public void GearmanClient::setClientCallback(callable $callback)
```

Sets the callback function for accepting data packets for a task.

> This method has been replaced by `GearmanClient::setDataCallback()` in the 0.6.0 release of the Gearman extension.

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

 `GearmanClient::setCompleteCallback()` `GearmanClient::setCreatedCallback()` `GearmanClient::setDataCallback()` `GearmanClient::setExceptionCallback()` `GearmanClient::setFailCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
