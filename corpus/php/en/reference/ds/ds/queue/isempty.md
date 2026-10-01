---
id: "en-php-function-ds-queue-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::isEmpty"
title: "Returns whether the queue is empty"
signature: "public bool Ds\\Queue::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the queue is empty

## Description

```php
public bool Ds\Queue::isEmpty()
```

Returns whether the queue is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the queue is empty, `false` otherwise.

## Examples

**`Ds\Queue::isEmpty()` example**

```php


<?php
$a = new \Ds\Queue([1, 2, 3]);
$b = new \Ds\Queue();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
