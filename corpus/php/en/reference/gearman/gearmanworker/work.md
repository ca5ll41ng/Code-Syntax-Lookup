---
id: "en-php-function-gearmanworker-work"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::work"
title: "Wait for and perform jobs"
signature: "public bool GearmanWorker::work()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.work.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Wait for and perform jobs

## Description

```php
public bool GearmanWorker::work()
```

Waits for a job to be assigned and then calls the appropriate callback function. Issues an `E_WARNING` with the last Gearman error if the return code is not one of `GEARMAN_SUCCESS`, `GEARMAN_IO_WAIT`, or `GEARMAN_WORK_FAIL`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`GearmanWorker::work()` example**

```php


<?php

# create the worker
$worker = new GearmanWorker();

# add the default job server (localhost)
$worker->addServer();

# add the reverse function
$worker->addFunction("reverse", "my_reverse_function");

# start te worker listening for job submissions
while ($worker->work());

function my_reverse_function($job)
{
  return strrev($job->workload());
}

?>

   
```

## See Also

 `GearmanWorker::addFunction()`
