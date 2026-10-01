---
id: "en-php-function-splpriorityqueue-compare"
language: "php"
lang: "en"
category: "function"
name: "SplPriorityQueue::compare"
title: "Compare priorities in order to place elements correctly in the heap while sifting up"
signature: "public int SplPriorityQueue::compare(mixed $priority1, mixed $priority2)"
module: "spl"
source_url: "https://www.php.net/manual/en/splpriorityqueue.compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare priorities in order to place elements correctly in the heap while sifting up

## Description

```php
public int SplPriorityQueue::compare(mixed $priority1, mixed $priority2)
```

Compare `$priority1` with `$priority2`.

## Parameters

- **`$priority1`** — The priority of the first node being compared.
- **`$priority2`** — The priority of the second node being compared.

## Return Values

Result of the comparison, positive integer if `$priority1` is greater than `$priority2`, 0 if they are equal, negative integer otherwise.

> Multiple elements with the same priority will get dequeued in no particular order.
