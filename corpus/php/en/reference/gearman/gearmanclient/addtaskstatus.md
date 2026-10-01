---
id: "en-php-function-gearmanclient-addtaskstatus"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addTaskStatus"
title: "Add a task to get status"
signature: "public GearmanTask|false GearmanClient::addTaskStatus(string $job_handle, mixed $context = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addtaskstatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a task to get status

## Description

```php
public GearmanTask|false GearmanClient::addTaskStatus(string $job_handle, mixed $context = null)
```

Used to request status information from the Gearman server, which will call the specified status callback (set using `GearmanClient::setStatusCallback()`).

## Parameters

- **`$job_handle`** — The job handle for the task to get status for
- **`$context`** — Data to be passed to the status callback, generally a reference to an array or object

## Return Values

A `GearmanTask` object or `false` on failure.

## Examples

**Monitor completion of multiple background tasks**

An artificial delay is introduced in the worker in this example to simulate a long running process. There is only one worker running for this example.

```php


<?php

/* create our object */
$gmclient= new GearmanClient();

/* add the default server */
$gmclient->addServer();

/* start some background jobs and save the handles */
$handles = array();
$handles[0] = $gmclient->doBackground("reverse", "Hello World!");
$handles[1] = $gmclient->doBackground("reverse", "!dlroW olleH");

$gmclient->setStatusCallback("reverse_status");

/* Poll the server to see when those background jobs finish; */
/* a better method would be to use event callbacks */
do
{
   /* Use the context variable to track how many tasks have completed */
   $done = 0;
   $gmclient->addTaskStatus($handles[0], $done);
   $gmclient->addTaskStatus($handles[1], $done);
   $gmclient->runTasks();
   echo "Done: $done\n";
   sleep(1);
}
while ($done != 2);

function reverse_status($task, $done)
{
   if (!$task->isKnown())
      $done++;
}

?>

   
```

The above example will output something similar to:

```text


Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 2

   
```

## See Also

 `GearmanClient::setStatusCallback()`
