---
id: "en-php-function-splqueue-dequeue"
language: "php"
lang: "en"
category: "function"
name: "SplQueue::dequeue"
title: "Dequeues a node from the queue"
signature: "public mixed SplQueue::dequeue()"
module: "spl"
source_url: "https://www.php.net/manual/en/splqueue.dequeue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dequeues a node from the queue

## Description

```php
public mixed SplQueue::dequeue()
```

Dequeues `$value` from the top of the queue.

> `SplQueue::dequeue()` is an alias of `SplDoublyLinkedList::shift()`.

## Parameters

This function has no parameters.

## Return Values

The value of the dequeued node.
