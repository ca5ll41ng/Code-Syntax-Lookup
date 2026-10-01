---
id: "en-php-function-gearmanclient-dobackground"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::doBackground"
title: "Run a task in the background"
signature: "public string GearmanClient::doBackground(string $function, string $workload, string|null $unique = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.dobackground.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run a task in the background

## Description

```php
public string GearmanClient::doBackground(string $function, string $workload, string|null $unique = null)
```

Runs a task in the background, returning a job handle which can be used to get the status of the running task.

## Parameters

- **`$function`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$unique`** — A unique ID used to identify a particular task

## Return Values

The job handle for the submitted task.

## Examples

**Submit and monitor a background job**

The worker in this example has an artificial delay introduced to mimic a long running job. The client script periodically checks the status of the running job.

```php


<?php

/* create our object */
$gmclient= new GearmanClient();

/* add the default server */
$gmclient->addServer();

/* run reverse client */
$job_handle = $gmclient->doBackground("reverse", "this is a test");

if ($gmclient->returnCode() != GEARMAN_SUCCESS)
{
  echo "bad return code\n";
  exit;
}

$done = false;
do
{
   sleep(3);
   $stat = $gmclient->jobStatus($job_handle);
   if (!$stat[0]) // the job is known so it is not done
      $done = true;
   echo "Running: " . ($stat[1] ? "true" : "false") . ", numerator: " . $stat[2] . ", denominator: " . $stat[3] . "\n";
}
while(!$done);

echo "done!\n";

?>

   
```

The above example will output something similar to:

```text


Running: true, numerator: 3, denominator: 14
Running: true, numerator: 6, denominator: 14
Running: true, numerator: 9, denominator: 14
Running: true, numerator: 12, denominator: 14
Running: false, numerator: 0, denominator: 0
done!

   
```

## See Also

 `GearmanClient::doNormal()` `GearmanClient::doHigh()` `GearmanClient::doLow()` `GearmanClient::doHighBackground()` `GearmanClient::doLowBackground()`
