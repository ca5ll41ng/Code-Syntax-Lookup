---
id: "en-php-function-eventbuffer-substr"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::substr"
title: "Subtracts a portion of the buffer data"
signature: "public string EventBuffer::substr(int $start, [int $length = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.substr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Subtracts a portion of the buffer data

## Description

```php
public string EventBuffer::substr(int $start, [int $length = ...])
```

Subtracts up to `$length` bytes of the buffer data beginning at `$start` position.

## Parameters

- **`$start`** — The start position of data to be subtracted.
- **`$length`** — Maximum number of bytes to subtract.

## Return Values

Returns the data subtracted as a `string` on success, or `false` on failure.

## See Also

  `EventBuffer::read()`
