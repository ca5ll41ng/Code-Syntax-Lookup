---
id: "en-php-function-ds-queue-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::copy"
title: "Returns a shallow copy of the queue"
signature: "public Ds\\Queue Ds\\Queue::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the queue

## Description

```php
public Ds\Queue Ds\Queue::copy()
```

Returns a shallow copy of the queue.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the queue.

## Examples

**`Ds\Queue::copy()` example**

```php


<?php
$a = new \Ds\Queue([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->push(4);

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Queue Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Queue Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)

   
```
