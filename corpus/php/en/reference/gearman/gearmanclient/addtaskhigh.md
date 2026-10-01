---
id: "en-php-function-gearmanclient-addtaskhigh"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addTaskHigh"
title: "Add a high priority task to run in parallel"
signature: "public GearmanTask|false GearmanClient::addTaskHigh(string $function_name, string|int|float $workload, mixed $context = null, string|null $unique_key = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addtaskhigh.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a high priority task to run in parallel

## Description

```php
public GearmanTask|false GearmanClient::addTaskHigh(string $function_name, string|int|float $workload, mixed $context = null, string|null $unique_key = null)
```

Adds a high priority task to be run in parallel with other tasks. Call this method for all the high priority tasks to be run in parallel, then call `GearmanClient::runTasks()` to perform the work. Tasks with a high priority will be selected from the queue before those of normal or low priority.

## Parameters

- **`$function_name`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$context`** — Application context to associate with a task
- **`$unique_key`** — A unique ID used to identify a particular task

## Return Values

A `GearmanTask` object or `false` if the task could not be added.

## Examples

**A high priority task along with two normal tasks**

A high priority task is included among two other tasks. A single worker is available, so that tasks are run one at a time, with the high priority task run first.

```php


<?php

# create the gearman client
$gmc= new GearmanClient();

# add the default job server
$gmc->addServer();

# set the callback for when the job is complete
$gmc->setCompleteCallback("reverse_complete");

# add tasks, one of which is high priority
$task= $gmc->addTask("reverse", "Hello World!", null, "1");
$task= $gmc->addTaskHigh("reverse", "!dlroW olleH", null, "2");
$task= $gmc->addTask("reverse", "Hello World!", null, "3");

if (! $gmc->runTasks())
{
    echo "ERROR " . $gmc->error() . "\n";
    exit;
}
echo "DONE\n";

function reverse_complete($task)
{
    echo "COMPLETE: " . $task->unique() . ", " . $task->data() . "\n";
}

?>

   
```

The above example will output something similar to:

```text


COMPLETE: 2, Hello World!
COMPLETE: 3, !dlroW olleH
COMPLETE: 1, !dlroW olleH
DONE

   
```

## See Also

 `GearmanClient::addTask()` `GearmanClient::addTaskLow()` `GearmanClient::addTaskBackground()` `GearmanClient::addTaskHighBackground()` `GearmanClient::addTaskLowBackground()` `GearmanClient::runTasks()`
