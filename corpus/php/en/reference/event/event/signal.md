---
id: "en-php-function-event-signal"
language: "php"
lang: "en"
category: "function"
name: "Event::signal"
title: "Constructs signal event object"
signature: "public static Event Event::signal(EventBase $base, int $signum, callable $cb, [mixed $arg = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/event.signal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs signal event object

## Description

```php
public static Event Event::signal(EventBase $base, int $signum, callable $cb, [mixed $arg = ...])
```

Constructs signal event object. This is a straightforward method to create a signal event. Note, the generic `Event::__construct()` method can contruct signal event objects too.

## Parameters

- **`$base`** — The associated event base object.
- **`$signum`** — The signal number.
- **`$cb`** — The signal event callback. See Event callbacks.
- **`$arg`** — Custom data. If specified, it will be passed to the callback when event triggers.

## Return Values

Returns Event object on success. Otherwise `false`.

## See Also

  Constructing signal events
