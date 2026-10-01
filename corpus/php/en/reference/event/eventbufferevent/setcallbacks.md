---
id: "en-php-function-eventbufferevent-setcallbacks"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::setCallbacks"
title: "Assigns read, write and event(status) callbacks"
signature: "public void EventBufferEvent::setCallbacks(callable $readcb, callable $writecb, callable $eventcb, [mixed $arg = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.setcallbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Assigns read, write and event(status) callbacks

## Description

```php
public void EventBufferEvent::setCallbacks(callable $readcb, callable $writecb, callable $eventcb, [mixed $arg = ...])
```

Assigns read, write and event(status) callbacks.

## Parameters

- **`$readcb`** — Read event callback. See About buffer event callbacks.
- **`$writecb`** — Write event callback. See About buffer event callbacks.
- **`$eventcb`** — Status-change event callback. See About buffer event callbacks.
- **`$arg`** — A variable that will be passed to all the callbacks.

## Return Values

No value is returned.

## See Also

  `EventBufferEvent::__construct()`
