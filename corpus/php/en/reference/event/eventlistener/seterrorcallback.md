---
id: "en-php-function-eventlistener-seterrorcallback"
language: "php"
lang: "en"
category: "function"
name: "EventListener::setErrorCallback"
title: "Set event listener's error callback"
signature: "public void EventListener::setErrorCallback(string $cb)"
module: "event"
source_url: "https://www.php.net/manual/en/eventlistener.seterrorcallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set event listener's error callback

## Description

```php
public void EventListener::setErrorCallback(string $cb)
```

Set event listener's error callback

## Parameters

- **`$cb`** — The error callback. Should match the following prototype:
  ```php
  void callback(EventListener $listener = null, mixed $data = null)
  ```


  - **`$listener`** — The `EventListener` object.
  - **`$data`** — User custom data attached to the callback.



## Return Values

## See Also

  `EventListener::setCallback()`
