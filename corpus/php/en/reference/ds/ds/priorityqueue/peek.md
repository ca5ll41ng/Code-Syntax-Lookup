---
id: "en-php-function-ds-priorityqueue-peek"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::peek"
title: "Returns the value at the front of the queue"
signature: "public mixed Ds\\PriorityQueue::peek()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.peek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at the front of the queue

## Description

```php
public mixed Ds\PriorityQueue::peek()
```

Returns the value at the front of the queue, but does not remove it.

## Parameters

This function has no parameters.

## Return Values

The value at the front of the queue.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\PriorityQueue::peek()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

var_dump($queue->peek());
?>

   
```

The above example will output something similar to:

```text


string(1) "b"

   
```
