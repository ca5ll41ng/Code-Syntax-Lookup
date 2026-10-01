---
id: "en-php-function-gearmantask-functionname"
language: "php"
lang: "en"
category: "function"
name: "GearmanTask::functionName"
title: "Get associated function name"
signature: "public false|string GearmanTask::functionName()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmantask.functionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get associated function name

## Description

```php
public false|string GearmanTask::functionName()
```

Returns the name of the function this task is associated with, i.e., the function the Gearman worker calls.

## Parameters

This function has no parameters.

## Return Values

A function name, or `false` if the task has not yet been created.
