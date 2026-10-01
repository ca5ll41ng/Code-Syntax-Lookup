---
id: "en-php-function-eventbase-exit"
language: "php"
lang: "en"
category: "function"
name: "EventBase::exit"
title: "Stop dispatching events"
signature: "public bool EventBase::exit([float $timeout = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.exit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stop dispatching events

## Description

```php
public bool EventBase::exit([float $timeout = ...])
```

Tells event base to stop optionally after given number of seconds.

## Parameters

- **`$timeout`** — Optional number of seconds after which the event base should stop dispatching events.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventBase::stop()`
