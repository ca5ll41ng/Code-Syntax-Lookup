---
id: "en-php-function-function-stream-socket-sendto"
language: "php"
lang: "en"
category: "function"
name: "stream_socket_sendto"
title: "Sends a message to a socket, whether it is connected or not"
signature: "int|false stream_socket_sendto(resource $socket, string $data, int $flags = 0, string $address = \"\")"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-socket-sendto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends a message to a socket, whether it is connected or not

## Description

```php
int|false stream_socket_sendto(resource $socket, string $data, int $flags = 0, string $address = "")
```

Sends the specified `$data` through the `$socket`.

## Parameters

- **`$socket`** — The socket to send `$data` to.
- **`$data`** — The data to be sent.
- **`$flags`** — The value of `$flags` can be any combination of the following: | `STREAM_OOB` | Process OOB (out-of-band) data. | | --- | --- |
- **`$address`** — The address specified when the socket stream was created will be used unless an alternate address is specified in `$address`. — If specified, it must be in dotted quad (or [ipv6]) format.

## Return Values

Returns a result code, as an integer, or `false` on failure.

## Examples

**`stream_socket_sendto()` Example**

```php


<?php
/* Open a socket to port 1234 on localhost */
$socket = stream_socket_client('tcp://127.0.0.1:1234');

/* Send ordinary data via ordinary channels. */
fwrite($socket, "Normal data transmit.");

/* Send more data out of band. */
stream_socket_sendto($socket, "Out of Band data.", STREAM_OOB);

/* Close it up */
fclose($socket);
?>

    
```

## See Also

 `stream_socket_recvfrom()` `stream_socket_client()` `stream_socket_server()`
