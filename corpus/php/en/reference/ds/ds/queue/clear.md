---
id: "en-php-function-ds-queue-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::clear"
title: "Removes all values"
signature: "public void Ds\\Queue::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Queue::clear()
```

Removes all values from the queue.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Queue::clear()` example**

```php


<?php
$queue = new \Ds\Queue([1, 2, 3]);
print_r($queue);

$queue->clear();
print_r($queue);
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
)

   
```
