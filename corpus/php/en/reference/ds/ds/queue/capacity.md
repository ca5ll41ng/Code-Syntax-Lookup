---
id: "en-php-function-ds-queue-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\Queue::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\Queue::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\Queue::capacity()` example**

```php


<?php
$queue = new \Ds\Queue();
var_dump($queue->capacity());

$queue->push(...range(1, 50));
var_dump($queue->capacity());
?>

   
```

The above example will output something similar to:

```text


int(8)
int(64)

   
```
