---
id: "en-php-function-function-sapi-windows-set-ctrl-handler"
language: "php"
lang: "en"
category: "function"
name: "sapi_windows_set_ctrl_handler"
title: "Set or remove a CTRL event handler"
signature: "bool sapi_windows_set_ctrl_handler(callable|null $handler, bool $add = true)"
module: "misc"
source_url: "https://www.php.net/manual/en/function.sapi-windows-set-ctrl-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set or remove a CTRL event handler

## Description

```php
bool sapi_windows_set_ctrl_handler(callable|null $handler, bool $add = true)
```

Sets or removes a `CTRL` event handler, which allows Windows CLI processes to intercept or ignore `CTRL+C` and `CTRL+BREAK` events. Note that in multithreaded environments, this is only possible when called from the main thread.

## Parameters

- **`$handler`** — A callback function to set or remove. If set, this function will be called whenever a CTRL C or CTRL BREAK event occurs. The function is supposed to have the following signature: `void``handler()` `int``$event` - **`$event`** — The CTRL event which has been received; either `PHP_WINDOWS_EVENT_CTRL_C` or `PHP_WINDOWS_EVENT_CTRL_BREAK`. Setting a `null` `$handler` causes the process to ignore CTRL C events, but not CTRL BREAK events.
- **`$add`** — If `true`, the handler is set. If `false`, the handler is removed.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic `sapi_windows_set_ctrl_handler()` Usage**

This example shows how to intercept `CTRL` events.

```php


<?php
function ctrl_handler(int $event)
{
    switch ($event) {
        case PHP_WINDOWS_EVENT_CTRL_C:
            echo "You have pressed CTRL+C\n";
            break;
        case PHP_WINDOWS_EVENT_CTRL_BREAK:
            echo "You have pressed CTRL+BREAK\n";
            break;
    }
}

sapi_windows_set_ctrl_handler('ctrl_handler');
while (true); // infinite loop, so the handler can be triggered
?>

   
```

## See Also

 `sapi_windows_generate_ctrl_event()`
