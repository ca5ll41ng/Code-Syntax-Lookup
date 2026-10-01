---
id: "en-php-function-eventbuffer-expand"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::expand"
title: "Reserves space in buffer"
signature: "public bool EventBuffer::expand(int $len)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.expand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reserves space in buffer

## Description

```php
public bool EventBuffer::expand(int $len)
```

Alters the last chunk of memory in the buffer, or adds a new chunk, such that the buffer is now large enough to contain `$len` bytes without any further allocations.

## Parameters

- **`$len`** — The number of bytes to reserve for the buffer

## Return Values

Returns `true` on success or `false` on failure.
