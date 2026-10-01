---
id: "en-php-function-function-stream-socket-client"
language: "php"
lang: "en"
category: "function"
name: "stream_socket_client"
title: "Open Internet or Unix domain socket connection"
signature: "resource|false stream_socket_client(string $address, int $error_code = null, string $error_message = null, float|null $timeout = null, int $flags = STREAM_CLIENT_CONNECT, resource|null $context = null)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-socket-client.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open Internet or Unix domain socket connection

## Description

```php
resource|false stream_socket_client(string $address, int $error_code = null, string $error_message = null, float|null $timeout = null, int $flags = STREAM_CLIENT_CONNECT, resource|null $context = null)
```

Initiates a stream or datagram connection to the destination specified by `$address`. The type of socket created is determined by the transport specified using standard URL formatting: `transport://target`. For Internet Domain sockets (AF_INET) such as TCP and UDP, the `target` portion of the `$address` parameter should consist of a hostname or IP address followed by a colon and a port number. For Unix domain sockets, the `target` portion should point to the socket file on the filesystem.

> The stream will by default be opened in blocking mode. You can switch it to non-blocking mode by using `stream_set_blocking()`.

## Parameters

 {{{ 

- **`$address`** — Address to the socket to connect to.
- **`$error_code`** — Will be set to the system level error number if connection fails.
- **`$error_message`** — Will be set to the system level error message if the connection fails.
- **`$timeout`** — Number of seconds until the `connect()` system call should timeout. By default, default_socket_timeout is used. > This parameter only applies when not making asynchronous connection attempts. > To set a timeout for reading/writing data over the socket, use the `stream_set_timeout()`, as the `$timeout` only applies while making connecting the socket.
- **`$flags`** — Bitmask field which may be set to any combination of connection flags. Currently the select of connection flags is limited to `STREAM_CLIENT_CONNECT` (default), `STREAM_CLIENT_ASYNC_CONNECT` and `STREAM_CLIENT_PERSISTENT`.
- **`$context`** — A valid context resource created with `stream_context_create()`.

 }}} 

## Return Values

 {{{ 

On success a stream resource is returned which may be used together with the other file functions (such as `fgets()`, `fgetss()`, `fwrite()`, `fclose()`, and `feof()`), `false` on failure.

 }}} 

## Errors/Exceptions

 {{{ 

On failure the `$error_code` and `$error_message` arguments will be populated with the actual system level error that occurred in the system-level `connect()` call. If the value returned in `$error_code` is `0` and the function returned `false`, it is an indication that the error occurred before the `connect()` call. This is most likely due to a problem initializing the socket. Note that the `$error_code` and `$error_message` arguments will always be passed by reference.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$timeout` and `$context` are now nullable. |

## Examples

 {{{ 

**`stream_socket_client()` example**

 {{{ 

```php


<?php
$fp = stream_socket_client("tcp://www.example.com:80", $errno, $errstr, 30);
if (!$fp) {
    echo "$errstr ($errno)<br />\n";
} else {
    fwrite($fp, "GET / HTTP/1.0\r\nHost: www.example.com\r\nAccept: */*\r\n\r\n");
    while (!feof($fp)) {
        echo fgets($fp, 1024);
    }
    fclose($fp);
}
?>

    
```

**Using UDP connection**

 {{{ 

Retrieving the day and time from the UDP service "daytime" (port 13) on localhost.

```php


<?php
$fp = stream_socket_client("udp://127.0.0.1:13", $errno, $errstr);
if (!$fp) {
    echo "ERROR: $errno - $errstr<br />\n";
} else {
    fwrite($fp, "\n");
    echo fread($fp, 26);
    fclose($fp);
}
?>

    
```

 }}} 

## Notes

 {{{ 

> UDP sockets will sometimes appear to have opened without an error, even if the remote host is unreachable. The error will only become apparent when you read or write data to/from the socket. The reason for this is because UDP is a "connectionless" protocol, which means that the operating system does not try to establish a link for the socket until it actually needs to send or receive data.

> When specifying a numerical IPv6 address (e.g. `fe80::1`), you must enclose the IP in square brackets—for example, `tcp://[fe80::1]:80`.

> Depending on the environment, the Unix domain or the optional connect timeout may not be available. A list of available transports can be retrieved using `stream_get_transports()`. See `transports` for a list of built in transports.

 }}} 

## See Also

 {{{ 

`stream_socket_server()` `stream_set_blocking()` `stream_set_timeout()` `stream_select()` `fgets()` `fgetss()` `fwrite()` `fclose()` `feof()` `ref.curl`

 }}}
