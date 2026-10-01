---
id: "en-php-function-eventbuffer-freeze"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::freeze"
title: "Prevent calls that modify an event buffer from succeeding"
signature: "public bool EventBuffer::freeze(bool $at_front)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.freeze.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prevent calls that modify an event buffer from succeeding

## Description

```php
public bool EventBuffer::freeze(bool $at_front)
```

Prevent calls that modify an event buffer from succeeding

## Parameters

- **`$at_front`** — Whether to disable changes to the front or end of the buffer.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBuffer::unfreeze()`
