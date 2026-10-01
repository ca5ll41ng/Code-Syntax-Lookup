---
id: "en-php-function-ds-queue-pop"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::pop"
title: "Removes and returns the value at the front of the queue"
signature: "public mixed Ds\\Queue::pop()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the value at the front of the queue

## Description

```php
public mixed Ds\Queue::pop()
```

Removes and returns the value at the front of the queue.

## Parameters

This function has no parameters.

## Return Values

The removed value which was at the front of the queue.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Queue::pop()` example**

```php


<?php
$queue = new \Ds\Queue();

$queue->push("a");
$queue->push("b");
$queue->push("c");

var_dump($queue->pop());
var_dump($queue->pop());
var_dump($queue->pop());
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
