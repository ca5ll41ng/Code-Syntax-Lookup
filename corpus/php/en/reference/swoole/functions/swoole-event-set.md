---
id: "en-php-function-function-swoole-event-set"
language: "php"
lang: "en"
category: "function"
name: "swoole_event_set"
title: "Update the event callback functions of a socket"
signature: "bool swoole_event_set(int $fd, [callable $read_callback = ...], [callable $write_callback = ...], int $events = 0)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-event-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Update the event callback functions of a socket

## Description

```php
bool swoole_event_set(int $fd, [callable $read_callback = ...], [callable $write_callback = ...], int $events = 0)
```

## Parameters

- **`$fd`**
- **`$read_callback`**
- **`$write_callback`**
- **`$events`**

## Return Values
