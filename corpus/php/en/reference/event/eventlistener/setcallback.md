---
id: "en-php-function-eventlistener-setcallback"
language: "php"
lang: "en"
category: "function"
name: "EventListener::setCallback"
title: "The setCallback purpose"
signature: "public void EventListener::setCallback(callable $cb, mixed $arg = null)"
module: "event"
source_url: "https://www.php.net/manual/en/eventlistener.setcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The setCallback purpose

## Description

```php
public void EventListener::setCallback(callable $cb, mixed $arg = null)
```

Adjust event connect listener's callback and optionally the callback argument.

## Parameters

- **`$cb`** — The new callback for new connections. Ignored if `null`. — Should match the following prototype:
  ```php
  void callback(EventListener $listener = null, mixed $fd = null, array $address = null, mixed $arg = null)
  ```


  - **`$listener`** — The `EventListener` object.
  - **`$fd`** — The file descriptor or a resource associated with the listener.
  - **`$address`** — Array of two elements: IP address and the *server* port.
  - **`$arg`** — User custom data attached to the callback.


- **`$arg`** — Custom user data attached to the callback. Ignored if `null`.

## Return Values

No value is returned.
