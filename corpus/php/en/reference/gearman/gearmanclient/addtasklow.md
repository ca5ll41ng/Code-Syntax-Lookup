---
id: "en-php-function-gearmanclient-addtasklow"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::addTaskLow"
title: "Add a low priority task to run in parallel"
signature: "public GearmanTask|false GearmanClient::addTaskLow(string $function_name, string|int|float $workload, mixed $context = null, string|null $unique_key = null)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.addtasklow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a low priority task to run in parallel

## Description

```php
public GearmanTask|false GearmanClient::addTaskLow(string $function_name, string|int|float $workload, mixed $context = null, string|null $unique_key = null)
```

Adds a low priority background task to be run in parallel with other tasks. Call this method for all the tasks to be run in parallel, then call `GearmanClient::runTasks()` to perform the work. Tasks with a low priority will be selected from the queue after those of normal or low priority.

## Parameters

- **`$function_name`** — A registered function the worker is to execute
- **`$workload`** — Serialized data to be processed
- **`$context`** — Application context to associate with a task
- **`$unique_key`** — A unique ID used to identify a particular task

## Return Values

A `GearmanTask` object or `false` if the task could not be added.

## Examples

**A low priority task along with two normal tasks**

A low priority task is included among two other tasks. A single worker is available, so that tasks are run one at a time, with the low priority task run last.

```php


<?php

# create the gearman client
$gmc= new GearmanClient();

# add the default job server
$gmc->addServer();

# set the callback for when the job is complete
$gmc->setCompleteCallback("reverse_complete");

# add tasks, one of which is low priority
$task= $gmc->addTask("reverse", "Hello World!", null, "1");
$task= $gmc->addTaskLow("reverse", "!dlroW olleH", null, "2");
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


COMPLETE: 3, !dlroW olleH
COMPLETE: 1, !dlroW olleH
COMPLETE: 2, Hello World!
DONE

   
```

## See Also

 `GearmanClient::addTask()` `GearmanClient::addTaskHigh()` `GearmanClient::addTaskBackground()` `GearmanClient::addTaskHighBackground()` `GearmanClient::addTaskLowBackground()` `GearmanClient::runTasks()`
