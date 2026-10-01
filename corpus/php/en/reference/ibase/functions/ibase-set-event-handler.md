---
id: "en-php-function-function-ibase-set-event-handler"
language: "php"
lang: "en"
category: "function"
name: "ibase_set_event_handler"
title: "Register a callback function to be called when events are posted"
signature: "resource ibase_set_event_handler(callable $event_handler, string $event_name, string $even_names)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-set-event-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a callback function to be called when events are posted

## Description

```php
resource ibase_set_event_handler(callable $event_handler, string $event_name, string $even_names)
```

```php
resource ibase_set_event_handler(resource $connection, callable $event_handler, string $event_name, string $event_names)
```

This function registers a PHP user function as event handler for the specified events.

## Parameters

- **`$event_handler`** — The callback is called with the event name and the link resource as arguments whenever one of the specified events is posted by the database. — The callback must return `false` if the event handler should be canceled. Any other return value is ignored. This function accepts up to 15 event arguments.
- **`$event_name`** — An event name.
- **`$event_names`** — At most 15 events allowed.

## Return Values

The return value is an event resource. This resource can be used to free the event handler using `ibase_free_event_handler()`.

## Examples

**`ibase_set_event_handler()` example**

```php


<?php

function event_handler($event_name, $link)
{
    if ($event_name == "NEW ORDER") {
        // process new order
        ibase_query($link, "UPDATE orders SET status='handled'");
    } else if ($event_name == "DB_SHUTDOWN") {
        // free event handler
        return false;
    }
}

ibase_set_event_handler($link, "event_handler", "NEW_ORDER", "DB_SHUTDOWN");
?>

   
```

## See Also

 `ibase_free_event_handler()` `ibase_wait_event()`
