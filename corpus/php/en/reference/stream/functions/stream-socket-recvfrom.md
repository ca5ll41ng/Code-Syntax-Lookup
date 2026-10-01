---
id: "en-php-function-function-stream-socket-recvfrom"
language: "php"
lang: "en"
category: "function"
name: "stream_socket_recvfrom"
title: "Receives data from a socket, connected or not"
signature: "string|false stream_socket_recvfrom(resource $socket, int $length, int $flags = 0, string|null $address = null)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-socket-recvfrom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Receives data from a socket, connected or not

## Description

```php
string|false stream_socket_recvfrom(resource $socket, int $length, int $flags = 0, string|null $address = null)
```

`stream_socket_recvfrom()` accepts data from a remote socket up to `$length` bytes.

## Parameters

- **`$socket`** — The remote socket.
- **`$length`** — The number of bytes to receive from the `$socket`.
- **`$flags`** — The value of `$flags` can be any combination of the following: | `STREAM_OOB` | Process OOB (`out-of-band`) data. | | --- | --- | | `STREAM_PEEK` | Retrieve data from the socket, but do not consume the buffer. Subsequent calls to `fread()` or `stream_socket_recvfrom()` will see the same data. |
- **`$address`** — If `$address` is provided it will be populated with the address of the remote socket.

## Return Values

Returns the read data, as a string, or `false` on failure.

## Examples

**`stream_socket_recvfrom()` example**

```php


<?php
/* Open a server socket to port 1234 on localhost */
$server = stream_socket_server('tcp://127.0.0.1:1234');

/* Accept a connection */
$socket = stream_socket_accept($server);

/* Grab a packet (1500 is a typical MTU size) of OOB data */
echo "Received Out-Of-Band: '" . stream_socket_recvfrom($socket, 1500, STREAM_OOB) . "'\n";

/* Take a peek at the normal in-band data, but don't consume it. */
echo "Data: '" . stream_socket_recvfrom($socket, 1500, STREAM_PEEK) . "'\n";

/* Get the exact same packet again, but remove it from the buffer this time. */
echo "Data: '" . stream_socket_recvfrom($socket, 1500) . "'\n";

/* Close it up */
fclose($socket);
fclose($server);
?>

    
```

## Notes

> If a message received is longer than the `$length` parameter, excess bytes may be discarded depending on the type of socket the message is received from (such as UDP).

> Calls to `stream_socket_recvfrom()` on socket-based streams, after calls to buffer-based stream functions (like `fread()` or `stream_get_line()`) read data directly from the socket and bypass the stream buffer.

## See Also

 `stream_socket_sendto()` `stream_socket_client()` `stream_socket_server()`
