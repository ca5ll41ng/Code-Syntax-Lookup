---
id: "en-php-function-ds-priorityqueue-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::copy"
title: "Returns a shallow copy of the queue"
signature: "public Ds\\PriorityQueue Ds\\PriorityQueue::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the queue

## Description

```php
public Ds\PriorityQueue Ds\PriorityQueue::copy()
```

Returns a shallow copy of the queue.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the queue.

## Examples

**`Ds\PriorityQueue::copy()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

print_r($queue->copy());
?>

   
```

The above example will output something similar to:

```text


Ds\PriorityQueue Object
(
    [0] => b
    [1] => c
    [2] => a
)

   
```
