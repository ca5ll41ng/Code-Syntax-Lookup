---
id: "en-php-function-function-stream-socket-shutdown"
language: "php"
lang: "en"
category: "function"
name: "stream_socket_shutdown"
title: "Shutdown a full-duplex connection"
signature: "bool stream_socket_shutdown(resource $stream, int $mode)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-socket-shutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Shutdown a full-duplex connection

## Description

```php
bool stream_socket_shutdown(resource $stream, int $mode)
```

Shutdowns (partially or not) a full-duplex connection.

> The associated buffer, or buffers, may or may not be emptied.

## Parameters

- **`$stream`** — An open stream (opened with `stream_socket_client()`, for example)
- **`$mode`** — One of the following constants: `STREAM_SHUT_RD` (disable further receptions), `STREAM_SHUT_WR` (disable further transmissions) or `STREAM_SHUT_RDWR` (disable further receptions and transmissions).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**A `stream_socket_shutdown()` example**

```php


<?php

$server = stream_socket_server('tcp://127.0.0.1:1337');
$client = stream_socket_client('tcp://127.0.0.1:1337');

var_dump(fputs($client, "hello"));

stream_socket_shutdown($client, STREAM_SHUT_WR);
var_dump(fputs($client, "hello")); // doesn't work now

?>

    
```

The above example will output something similar to:

```text


int(5)

Notice: fputs(): send of 5 bytes failed with errno=32 Broken pipe in test.php on line 9
int(0)

    
```

## See Also

`fclose()`
