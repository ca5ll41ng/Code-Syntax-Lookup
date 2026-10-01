---
id: "en-php-function-eventbuffer-drain"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::drain"
title: "Removes specified number of bytes from the front of the buffer without copying it anywhere"
signature: "public bool EventBuffer::drain(int $len)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.drain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes specified number of bytes from the front of the buffer without copying it anywhere

## Description

```php
public bool EventBuffer::drain(int $len)
```

Behaves as `EventBuffer::read()`, except that it does not copy the data: it just removes it from the front of the buffer.

## Parameters

- **`$len`** — The number of bytes to remove from the buffer.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBuffer::read()`   `EventBuffer::appendFrom()`
