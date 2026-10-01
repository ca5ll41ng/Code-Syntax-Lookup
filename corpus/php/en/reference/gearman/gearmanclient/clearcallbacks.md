---
id: "en-php-function-gearmanclient-clearcallbacks"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::clearCallbacks"
title: "Clear all task callback functions"
signature: "public bool GearmanClient::clearCallbacks()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.clearcallbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clear all task callback functions

## Description

```php
public bool GearmanClient::clearCallbacks()
```

Clears all the task callback functions that have previously been set.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## See Also

 `GearmanClient::setDataCallback()` `GearmanClient::setCompleteCallback()` `GearmanClient::setCreatedCallback()` `GearmanClient::setExceptionCallback()` `GearmanClient::setFailCallback()` `GearmanClient::setStatusCallback()` `GearmanClient::setWarningCallback()` `GearmanClient::setWorkloadCallback()`
