---
id: "en-php-function-function-swoole-event-add"
language: "php"
lang: "en"
category: "function"
name: "swoole_event_add"
title: "Add new callback functions of a socket into the EventLoop"
signature: "int swoole_event_add(int $fd, [callable $read_callback = ...], [callable $write_callback = ...], int $events = 0)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-event-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add new callback functions of a socket into the EventLoop

## Description

```php
int swoole_event_add(int $fd, [callable $read_callback = ...], [callable $write_callback = ...], int $events = 0)
```

## Parameters

- **`$fd`**
- **`$read_callback`**
- **`$write_callback`**
- **`$events`**

## Return Values
