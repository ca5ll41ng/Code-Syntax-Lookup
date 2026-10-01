---
id: "en-php-function-event-timer"
language: "php"
lang: "en"
category: "function"
name: "Event::timer"
title: "Constructs timer event object"
signature: "public static Event Event::timer(EventBase $base, callable $cb, [mixed $arg = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/event.timer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs timer event object

## Description

```php
public static Event Event::timer(EventBase $base, callable $cb, [mixed $arg = ...])
```

Constructs timer event object. This is a straightforward method to create a timer event. Note, the generic `Event::__construct()` method can contruct signal event objects too.

## Parameters

- **`$base`** — The associated event base object.
- **`$cb`** — The signal event callback. See Event callbacks.
- **`$arg`** — Custom data. If specified, it will be passed to the callback when event triggers.

## Return Values

Returns Event object on success. Otherwise `false`.
