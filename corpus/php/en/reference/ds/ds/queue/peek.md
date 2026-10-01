---
id: "en-php-function-ds-queue-peek"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::peek"
title: "Returns the value at the front of the queue"
signature: "public mixed Ds\\Queue::peek()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.peek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at the front of the queue

## Description

```php
public mixed Ds\Queue::peek()
```

Returns the value at the front of the queue, but does not remove it.

## Parameters

This function has no parameters.

## Return Values

The value at the front of the queue.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Queue::peek()` example**

```php


<?php
$queue = new \Ds\Queue();

$queue->push("a");
$queue->push("b");
$queue->push("c");

var_dump($queue->peek());
?>

   
```

The above example will output something similar to:

```text


string(1) "a"

   
```
