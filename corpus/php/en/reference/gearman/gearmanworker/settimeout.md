---
id: "en-php-function-gearmanworker-settimeout"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::setTimeout"
title: "Set socket I/O activity timeout"
signature: "public true GearmanWorker::setTimeout(int $timeout)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.settimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set socket I/O activity timeout

## Description

```php
public true GearmanWorker::setTimeout(int $timeout)
```

Sets the interval of time to wait for socket I/O activity.

## Parameters

- **`$timeout`** — An interval of time in milliseconds. A negative value indicates an infinite timeout.

## Return Values

Always returns `true`.

## Examples

**A simple worker with a 5 second timeout**

```php


<?php

echo "Starting\n";

# Create our worker object.
$gmworker= new GearmanWorker();

# Add default server (localhost).
$gmworker->addServer();

# Register function "reverse" with the server.
$gmworker->addFunction("reverse", "reverse_fn");

# Set the timeout to 5 seconds
$gmworker->setTimeout(5000);

echo "Waiting for job...\n";
while(@$gmworker->work() || $gmworker->returnCode() == GEARMAN_TIMEOUT)
{
  if ($gmworker->returnCode() == GEARMAN_TIMEOUT)
  {
    # Normally one would want to do something useful here ...
    echo "Timeout. Waiting for next job...\n";
    continue;
  }

  if ($gmworker->returnCode() != GEARMAN_SUCCESS)
  {
    echo "return_code: " . $gmworker->returnCode() . "\n";
    break;
  }
}

echo "Done\n";

function reverse_fn($job)
{
  return strrev($job->workload());
}

?>

   
```

Running the worker with no submitted jobs will generate output that looks like the following:

```text


Starting
Waiting for job...
Timeout. Waiting for next job...
Timeout. Waiting for next job...
Timeout. Waiting for next job...

   
```

## See Also

 `GearmanWorker::timeout()`
