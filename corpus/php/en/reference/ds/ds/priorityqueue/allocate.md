---
id: "en-php-function-ds-priorityqueue-allocate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::allocate"
title: "Allocates enough memory for a required capacity"
signature: "public void Ds\\PriorityQueue::allocate(int $capacity)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.allocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allocates enough memory for a required capacity

## Description

```php
public void Ds\PriorityQueue::allocate(int $capacity)
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal buffer as values are added.

## Parameters

- **`$capacity`** — The number of values for which capacity should be allocated.
  > Capacity will stay the same if this value is less than or equal to the current capacity.


  > Capacity will always be rounded up to the nearest power of 2.



## Return Values

No value is returned.

## Examples

**`Ds\PriorityQueue::allocate()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();
var_dump($queue->capacity());

$queue->allocate(100);
var_dump($queue->capacity());
?>

   
```

The above example will output something similar to:

```text


int(8)
int(128)

   
```
