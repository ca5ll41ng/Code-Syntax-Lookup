---
id: "en-php-function-eventbase-loop"
language: "php"
lang: "en"
category: "function"
name: "EventBase::loop"
title: "Dispatch pending events"
signature: "public bool EventBase::loop([int $flags = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.loop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dispatch pending events

## Description

```php
public bool EventBase::loop([int $flags = ...])
```

Wait for events to become active, and run their callbacks.

>

## Parameters

- **`$flags`** — Optional flags. One of `EventBase::LOOP_*` constants. See EventBase constants.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBase::dispatch()`
