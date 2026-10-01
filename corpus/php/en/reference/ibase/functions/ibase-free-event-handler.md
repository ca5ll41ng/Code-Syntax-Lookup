---
id: "en-php-function-function-ibase-free-event-handler"
language: "php"
lang: "en"
category: "function"
name: "ibase_free_event_handler"
title: "Cancels a registered event handler"
signature: "bool ibase_free_event_handler(resource $event)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-free-event-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancels a registered event handler

## Description

```php
bool ibase_free_event_handler(resource $event)
```

This function causes the registered event handler specified by `$event` to be cancelled. The callback function will no longer be called for the events it was registered to handle.

## Parameters

- **`$event`** — An event resource, created by `ibase_set_event_handler()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_set_event_handler()`
