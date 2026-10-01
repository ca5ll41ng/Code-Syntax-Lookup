---
id: "en-php-function-splpriorityqueue-setextractflags"
language: "php"
lang: "en"
category: "function"
name: "SplPriorityQueue::setExtractFlags"
title: "Sets the mode of extraction"
signature: "public int SplPriorityQueue::setExtractFlags(int $flags)"
module: "spl"
source_url: "https://www.php.net/manual/en/splpriorityqueue.setextractflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the mode of extraction

## Description

```php
public int SplPriorityQueue::setExtractFlags(int $flags)
```

## Parameters

- **`$flags`** — Defines what is extracted by `SplPriorityQueue::current()`, `SplPriorityQueue::top()` and `SplPriorityQueue::extract()`.
  - `SplPriorityQueue::EXTR_DATA` (0x00000001): Extract the data
  - `SplPriorityQueue::EXTR_PRIORITY` (0x00000002): Extract the priority
  - `SplPriorityQueue::EXTR_BOTH` (0x00000003): Extract an array containing both

 — The default mode is `SplPriorityQueue::EXTR_DATA`.

## Return Values

Returns the flags of extraction.
