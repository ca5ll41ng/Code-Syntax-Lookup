---
id: "en-php-function-gearmanclient-jobstatus"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::jobStatus"
aliases: ["gearman_job_status"]
title: "Get the status of a background job"
signature: "public array GearmanClient::jobStatus(string $job_handle)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.jobstatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the status of a background job

## Description

Object-oriented style (method):

```php
public array GearmanClient::jobStatus(string $job_handle)
```

Gets the status for a background job given a job handle. The status information will specify whether the job is known, whether the job is currently running, and the percentage completion.

## Parameters

- **`$job_handle`** — The job handle assigned by the Gearman server

## Return Values

An array containing status information for the job corresponding to the supplied job handle. The first array element is a boolean indicating whether the job is even known, the second is a boolean indicating whether the job is still running, and the third and fourth elements correspond to the numerator and denominator of the fractional completion percentage, respectively.

## Examples

**Monitor the status of a long running background job**

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

 `GearmanClient::doStatus()`
