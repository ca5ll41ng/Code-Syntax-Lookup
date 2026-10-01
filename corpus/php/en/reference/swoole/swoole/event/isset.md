---
id: "en-php-function-swoole-event-isset"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::isset"
title: "Check if a socket is being monitored in the event loop"
signature: "public static bool Swoole\\Event::isset(mixed $fd, int $events = SWOOLE_EVENT_READ | SWOOLE_EVENT_WRITE)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.isset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a socket is being monitored in the event loop

## Description

```php
public static bool Swoole\Event::isset(mixed $fd, int $events = SWOOLE_EVENT_READ | SWOOLE_EVENT_WRITE)
```

Checks whether the specified file descriptor is being monitored for the given event types in the event loop.

## Parameters

- **`$fd`** — File descriptor (stream/socket resource, integer, or object).
- **`$events`** — Event types to check (bitmask of `SWOOLE_EVENT_READ` and/or `SWOOLE_EVENT_WRITE`).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Checking event monitoring status**

```php

     
<?php
$fp = stream_socket_client("tcp://www.qq.com:80");
Swoole\Event::add($fp, function ($fp) {
    echo fread($fp, 8192);
}, null, SWOOLE_EVENT_READ);

var_dump(Swoole\Event::isset($fp, SWOOLE_EVENT_READ)); // Output: true
var_dump(Swoole\Event::isset($fp, SWOOLE_EVENT_WRITE)); // Output: false

    
```
