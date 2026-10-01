---
id: "en-php-function-worker-collect"
language: "php"
lang: "en"
category: "function"
name: "Worker::collect"
title: "Collect references to completed tasks"
signature: "public int Worker::collect([Callable $collector = ...])"
module: "pthreads"
source_url: "https://www.php.net/manual/en/worker.collect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Collect references to completed tasks

## Description

```php
public int Worker::collect([Callable $collector = ...])
```

Allows the worker to collect references determined to be garbage by the optionally given collector.

## Parameters

- **`$collector`** — A Callable collector that returns a boolean on whether the task can be collected or not. Only in rare cases should a custom collector need to be used.

## Return Values

The number of remaining tasks on the worker's stack to be collected.

## Examples

**A basic example of `Worker::collect()`**

```php


<?php
$worker = new Worker();

echo "There are currently {$worker->collect()} tasks on the stack to be collected\n";

for ($i = 0; $i < 15; ++$i) {
    $worker->stack(new class extends Threaded {});
}

echo "There are {$worker->collect()} tasks remaining on the stack to be collected\n";

$worker->start();

while ($worker->collect()); // blocks until all tasks have finished executing

echo "There are now {$worker->collect()} tasks on the stack to be collected\n";

$worker->shutdown();

   
```

The above example will output:

```text


There are currently 0 tasks on the stack to be collected
There are 15 tasks remaining on the stack to be collected
There are now 0 tasks on the stack to be collected

   
```
