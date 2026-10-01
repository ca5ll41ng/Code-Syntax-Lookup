---
id: "en-php-function-ds-priorityqueue-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::isEmpty"
title: "Returns whether the queue is empty"
signature: "public bool Ds\\PriorityQueue::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the queue is empty

## Description

```php
public bool Ds\PriorityQueue::isEmpty()
```

Returns whether the queue is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the queue is empty, `false` otherwise.

## Examples

**`Ds\PriorityQueue::isEmpty()` example**

```php


<?php
$a = new \Ds\PriorityQueue();
$b = new \Ds\PriorityQueue();

$a->push("a",  5);
$a->push("b", 15);
$a->push("c", 10);

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
