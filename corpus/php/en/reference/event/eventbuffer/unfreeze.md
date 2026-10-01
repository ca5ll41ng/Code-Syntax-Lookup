---
id: "en-php-function-eventbuffer-unfreeze"
language: "php"
lang: "en"
category: "function"
name: "EventBuffer::unfreeze"
title: "Re-enable calls that modify an event buffer"
signature: "public bool EventBuffer::unfreeze(bool $at_front)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbuffer.unfreeze.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Re-enable calls that modify an event buffer

## Description

```php
public bool EventBuffer::unfreeze(bool $at_front)
```

Re-enable calls that modify an event buffer.

## Parameters

- **`$at_front`** — Whether to enable events at the front or at the end of the buffer.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBuffer::freeze()`
