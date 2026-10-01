---
id: "en-php-function-ds-priorityqueue-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::clear"
title: "Removes all values"
signature: "public void Ds\\PriorityQueue::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\PriorityQueue::clear()
```

Removes all values from the queue.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\PriorityQueue::clear()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

$queue->clear();
print_r($queue);
?>

   
```

The above example will output something similar to:

```text


Ds\PriorityQueue Object
(
)

   
```
