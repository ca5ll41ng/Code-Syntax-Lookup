---
id: "en-php-function-splpriorityqueue-insert"
language: "php"
lang: "en"
category: "function"
name: "SplPriorityQueue::insert"
title: "Inserts an element in the queue by sifting it up"
signature: "public true SplPriorityQueue::insert(mixed $value, mixed $priority)"
module: "spl"
source_url: "https://www.php.net/manual/en/splpriorityqueue.insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts an element in the queue by sifting it up

## Description

```php
public true SplPriorityQueue::insert(mixed $value, mixed $priority)
```

Insert `$value` with the priority `$priority` in the queue.

## Parameters

- **`$value`** — The value to insert.
- **`$priority`** — The associated priority.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `SplPriorityQueue::insert()` now has a tentative return of `true`. |
