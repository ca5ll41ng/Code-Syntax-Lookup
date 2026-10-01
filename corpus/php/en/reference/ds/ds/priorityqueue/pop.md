---
id: "en-php-function-ds-priorityqueue-pop"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::pop"
title: "Removes and returns the value with the highest priority"
signature: "public mixed Ds\\PriorityQueue::pop()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the value with the highest priority

## Description

```php
public mixed Ds\PriorityQueue::pop()
```

Removes and returns the value at the front of the queue, ie. the value with the highest priority.

> Values with equal priority fall back to FIFO (first in first out).

## Parameters

This function has no parameters.

## Return Values

The removed value which was at the front of the queue.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\PriorityQueue::pop()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

print_r($queue->pop());
print_r($queue->pop());
print_r($queue->pop());
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
