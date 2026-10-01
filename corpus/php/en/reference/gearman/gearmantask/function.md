---
id: "en-php-function-gearmantask-function"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::function"
title: "Get associated function name (deprecated)"
signature: "public string GearmanTask::function()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get associated function name (deprecated)

## Description

```php
public string GearmanTask::function()
```

Returns the name of the function this task is associated with, i.e., the function the Gearman worker calls.

> This method has been replaced by `GearmanTask::functionName()` in the 0.6.0 release of the Gearman extension.

## Parameters

This function has no parameters.

## Return Values

A function name.
