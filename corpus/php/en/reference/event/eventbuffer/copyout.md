---
id: "en-php-function-eventbuffer-copyout"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::copyout"
title: "Copies out specified number of bytes from the front of the buffer"
signature: "public int EventBuffer::copyout(string $data, int $max_bytes)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.copyout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copies out specified number of bytes from the front of the buffer

## Description

```php
public int EventBuffer::copyout(string $data, int $max_bytes)
```

Behaves just like `EventBuffer::read()`, but does not drain any data from the buffer. I.e. it copies the first `$max_bytes` bytes from the front of the buffer into `$data`. If there are fewer than `$max_bytes` bytes available, the function copies all the bytes there are.

## Parameters

- **`$data`** — Output string.
- **`$max_bytes`** — The number of bytes to copy.

## Return Values

Returns the number of bytes copied, or `-1` on failure.

## See Also

  `EventBuffer::read()`   `EventBuffer::appendFrom()`
