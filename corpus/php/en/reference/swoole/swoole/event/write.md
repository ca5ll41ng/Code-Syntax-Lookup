---
id: "en-php-function-swoole-event-write"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::write"
title: "Write data to socket asynchronously"
signature: "public static bool Swoole\\Event::write(mixed $fd, mixed $data)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write data to socket asynchronously

## Description

```php
public static bool Swoole\Event::write(mixed $fd, mixed $data)
```

Makes data sending asynchronous for stream/sockets resources.

> If data is continuously written to a socket but the peer cannot read fast enough, the socket buffer will eventually fill up. In this case, the Swoole underlying layer will store the excess data in an in-memory buffer and wait for the writable event to trigger before attempting to write to the socket again. However, if the in-memory buffer also becomes full, Swoole will throw a "pipe buffer overflow, reactor will block" error and switch to blocking mode, pausing further writes until space becomes available.

> The buffer-full return of false is an atomic operation—it guarantees either complete success (all data written) or total failure (nothing written).

> Event::write cannot be used with SSL/TLS-encrypted streams or sockets (tunneled connections).

> Upon successful execution, Event::write will automatically switch the $socket to non-blocking mode.

## Parameters

- **`$fd`** — File descriptor (stream/socket resource, integer, or object).
- **`$data`** — Data to send (length must not exceed socket buffer size).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`Swoole\Event::write()` example**

```php

     
<?php
use Swoole\Event;

$fp = stream_socket_client('tcp://127.0.0.1:9501');
$data = str_repeat('A', 1024 * 1024*2);
Event::add($fp, function($fp) {
     echo fread($fp);
});
Event::write($fp, $data);
?>

    
```
