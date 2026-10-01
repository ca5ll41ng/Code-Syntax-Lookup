---
id: "en-php-function-ds-priorityqueue-push"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::push"
title: "Pushes values into the queue"
signature: "public void Ds\\PriorityQueue::push(mixed $value, int $priority)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pushes values into the queue

## Description

```php
public void Ds\PriorityQueue::push(mixed $value, int $priority)
```

Pushes a `$value` with a given `$priority` into the queue.

## Parameters

- **`$value`** — The value to push into the queue.
- **`$priority`** — The priority associated with the value.

## Return Values

No value is returned.

## Examples

**`Ds\PriorityQueue::push()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();

$queue->push("a",  5);
$queue->push("b", 15);
$queue->push("c", 10);

print_r($queue->pop());
print_r($queue->pop());
print_r($queue->pop());
?>

   
```

The above example will output something similar to:

```text


string(1) "b"
string(1) "c"
string(1) "a"

   
```
