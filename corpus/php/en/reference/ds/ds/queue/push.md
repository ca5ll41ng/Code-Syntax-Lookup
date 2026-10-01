---
id: "en-php-function-ds-queue-push"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Queue::push"
title: "Pushes values into the queue"
signature: "public void Ds\\Queue::push(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-queue.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pushes values into the queue

## Description

```php
public void Ds\Queue::push(mixed $values)
```

Pushes `$values` into the queue.

## Parameters

- **`$values`** — The values to push into the queue.

## Return Values

No value is returned.

## Examples

**`Ds\Queue::push()` example**

```php


<?php
$queue = new \Ds\Queue();

$queue->push("a");
$queue->push("b");
$queue->push("c", "d");
$queue->push(...["e", "f"]);

print_r($queue);
?>

   
```

The above example will output something similar to:

```text


Ds\Queue Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)

   
```
