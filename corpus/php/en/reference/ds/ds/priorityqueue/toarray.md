---
id: "en-php-function-ds-priorityqueue-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::toArray"
title: "Converts the queue to an `array`"
signature: "public array Ds\\PriorityQueue::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the queue to an `array`

## Description

```php
public array Ds\PriorityQueue::toArray()
```

Converts the queue to an `array`.

> This method is not destructive.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the queue.

## Examples

**`Ds\PriorityQueue::toArray()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

var_dump($queue->toArray());
?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  string(1) "b"
  [1]=>
  string(1) "c"
  [2]=>
  string(1) "a"
}

   
```
