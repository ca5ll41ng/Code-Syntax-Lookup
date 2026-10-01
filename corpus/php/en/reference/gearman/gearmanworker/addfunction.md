---
id: "en-php-function-gearmanworker-addfunction"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::addFunction"
title: "Register and add callback function"
signature: "public bool GearmanWorker::addFunction(string $function_name, callable $function, mixed $context = null, int $timeout = 0)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.addfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register and add callback function

## Description

```php
public bool GearmanWorker::addFunction(string $function_name, callable $function, mixed $context = null, int $timeout = 0)
```

Registers a function name with the job server and specifies a callback corresponding to that function. Optionally specify extra application context data to be used when the callback is called and a timeout.

## Parameters

- **`$function_name`** — The name of a function to register with the job server
- **`$function`** — A callback that gets called when a job for the registered function name is submitted
- **`$context`** — A reference to arbitrary application context data that can be modified by the worker function
- **`$timeout`** — An interval of time in seconds

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Simple worker making use of extra application context data**

```php


<?php

# get a gearman worker
$worker= new GearmanWorker();

# add the default server (localhost)
$worker->addServer();

# define a variable to hold application data
$count= 0;

# add the "reverse" function
$worker->addFunction("reverse", "reverse_cb", $count);

# start the worker
while ($worker->work());

function reverse_cb($job, &$count)
{
  $count++;
  return "$count: " . strrev($job->workload());
}

?>

   
```

Running a client that submits two jobs for the reverse function would have output similar to the following:

```text


1: olleh
2: dlrow

   
```

## See Also

 `GearmanClient::do()`
