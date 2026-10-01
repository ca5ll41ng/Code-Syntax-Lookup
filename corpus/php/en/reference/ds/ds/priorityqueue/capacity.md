---
id: "en-php-function-ds-priorityqueue-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\PriorityQueue::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\PriorityQueue::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\PriorityQueue::capacity()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();
var_dump($queue->capacity());
?>

   
```

The above example will output something similar to:

```text


int(8)

   
```
