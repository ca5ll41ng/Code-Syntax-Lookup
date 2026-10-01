---
id: "en-php-function-eventbuffer-prepend"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::prepend"
title: "Prepend data to the front of the buffer"
signature: "public bool EventBuffer::prepend(string $data)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepend data to the front of the buffer

## Description

```php
public bool EventBuffer::prepend(string $data)
```

Prepend data to the front of the buffer.

## Parameters

- **`$data`** — String to be prepended to the front of the buffer.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBuffer::prependBuffer()`   `EventBuffer::add()`   `EventBuffer::addBuffer()`
