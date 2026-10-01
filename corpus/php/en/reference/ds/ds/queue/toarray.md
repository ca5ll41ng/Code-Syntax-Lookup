---
id: "en-php-function-ds-queue-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::toArray"
title: "Converts the queue to an `array`"
signature: "public array Ds\\Queue::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the queue to an `array`

## Description

```php
public array Ds\Queue::toArray()
```

Converts the queue to an `array`.

> Casting to an `array` is not supported yet.

> This method is not destructive.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the queue.

## Examples

**`Ds\Queue::toArray()` example**

```php


<?php
$queue = new \Ds\Queue([1, 2, 3]);

var_dump($queue->toArray());
?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
