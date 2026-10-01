---
id: "en-php-function-function-com-message-pump"
language: "php"
lang: "en"
category: "function"
name: "com_message_pump"
title: "Process COM messages, sleeping for up to timeoutms milliseconds"
signature: "bool com_message_pump(int $timeout_milliseconds = 0)"
module: "com"
source_url: "https://www.php.net/manual/en/function.com-message-pump.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Process COM messages, sleeping for up to timeoutms milliseconds

## Description

```php
bool com_message_pump(int $timeout_milliseconds = 0)
```

This function will sleep for up to `$timeout_milliseconds` milliseconds, or until a message arrives in the queue.

The purpose of this function is to route COM calls between apartments and handle various synchronization issues. This allows your script to wait efficiently for events to be triggered, while still handling other events or running other code in the background. You should use it in a loop, as demonstrated by the example in the `com_event_sink()` function, until you are finished using event bound COM objects.

## Parameters

- **`$timeout_milliseconds`** — The timeout, in milliseconds. — If you do not specify a value for `$timeout_milliseconds`, then 0 will be assumed. A 0 value means that no waiting will be performed; if there are messages pending they will be dispatched as before; if there are no messages pending, the function will return `false` immediately without sleeping.

## Return Values

If a message or messages arrives before the timeout, they will be dispatched, and the function will return `true`. If the timeout occurs and no messages were processed, the return value will be `false`.
