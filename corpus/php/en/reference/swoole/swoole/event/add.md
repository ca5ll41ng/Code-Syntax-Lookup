---
id: "en-php-function-swoole-event-add"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::add"
title: "Add a socket to the underlying reactor event listener"
signature: "public static bool Swoole\\Event::add(mixed $sock, callable $read_callback, [callable $write_callback = ...], [int $flags = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a socket to the underlying reactor event listener

## Description

```php
public static bool Swoole\Event::add(mixed $sock, callable $read_callback, [callable $write_callback = ...], [int $flags = ...])
```

Adds a socket to the underlying reactor event listener. This function can be used in both Server and Client modes.

> A socket that has already been added cannot be added again. Use swoole_event_set to modify the corresponding callback functions and event types for the socket.

## Parameters

- **`$sock`** — File descriptor, stream resource, sockets resource, or object.
- **`$read_callback`** — Callback function for readable events.
- **`$write_callback`** — Callback function for writable events.
- **`$flags`** — Event type mask (e.g. `SWOOLE_EVENT_READ`, `SWOOLE_EVENT_WRITE` or `SWOOLE_EVENT_READ` | `SWOOLE_EVENT_WRITE`).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`Swoole\Event::add()` example**

```php

     
<?php
$fp = stream_socket_client("tcp://www.qq.com:80", $errno, $errstr, 30);
fwrite($fp,"GET / HTTP/1.1\r\nHost: www.qq.com\r\n\r\n");

Swoole\Event::add($fp, function($fp) {
    $resp = fread($fp, 8192);
    Swoole\Event::del($fp);
    fclose($fp);
});
echo "Finish\n";
?>

    
```
