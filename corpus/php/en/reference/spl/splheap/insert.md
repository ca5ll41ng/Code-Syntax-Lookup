---
id: "en-php-function-splheap-insert"
language: "php"
lang: "en"
category: "function"
name: "SplHeap::insert"
title: "Inserts an element in the heap by sifting it up"
signature: "public true SplHeap::insert(mixed $value)"
module: "spl"
source_url: "https://www.php.net/manual/en/splheap.insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts an element in the heap by sifting it up

## Description

```php
public true SplHeap::insert(mixed $value)
```

Insert `$value` in the heap.

## Parameters

- **`$value`** — The value to insert.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `SplHeap::insert()` now has a tentative return of `true`. |
