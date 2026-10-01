---
id: "en-php-function-function-ibase-wait-event"
language: "php"
lang: "en"
category: "function"
name: "ibase_wait_event"
title: "Wait for an event to be posted by the database"
signature: "string ibase_wait_event(string $event_name, string $event_names)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-wait-event.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Wait for an event to be posted by the database

## Description

```php
string ibase_wait_event(string $event_name, string $event_names)
```

```php
string ibase_wait_event(resource $connection, string $event_name, string $event_names)
```

This function suspends execution of the script until one of the specified events is posted by the database. The name of the event that was posted is returned. This function accepts up to 15 event arguments.

## Parameters

- **`$event_name`** — The event name.
- **`$event_names`**

## Return Values

Returns the name of the event that was posted.

## See Also

 `ibase_set_event_handler()` `ibase_free_event_handler()`
