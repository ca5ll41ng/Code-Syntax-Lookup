---
id: "en-php-function-function-socket-sendmsg"
language: "php"
lang: "en"
category: "function"
name: "socket_sendmsg"
title: "Send a message"
signature: "int|false socket_sendmsg(Socket $socket, array $message, int $flags = 0)"
module: "sockets"
source_url: "https://www.php.net/manual/en/function.socket-sendmsg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a message

## Description

```php
int|false socket_sendmsg(Socket $socket, array $message, int $flags = 0)
```

The function `socket_sendmsg()` sends the message described by `$message` through the socket `$socket`, using the `sendmsg()` system call.

## Parameters

- **`$socket`** — A `Socket` instance created with `socket_create()`, `socket_accept()` or `socket_create_pair()`.
- **`$message`** — An associative array which may contain the following elements. All of them are optional, and unrecognized keys are silently ignored. In particular there is no `flags` element when sending; that key only appears in the array filled in by `socket_recvmsg()`.
  - **`name`** — The address of the remote host, as an array. Its keys are `addr` and `port` for `AF_INET`; `addr`, `port`, `flowinfo` and `scope_id` for `AF_INET6`; and `path` for `AF_UNIX`. `addr` accepts an IP address or a host name, which is then resolved. An optional `family` key selects the address family explicitly; if omitted, the family of `$socket` is used. A family the socket does not support makes the call fail.
  - **`iov`** — A list of buffers holding the data to send, which are sent in order as a single message. Array keys are ignored and the values are converted to string. When this key is missing or empty, no data is sent and the function returns `0`.
  - **`control`** — A list of ancillary data messages. Each is an array with the keys `level`, `type` and `data`. Only the pairs below are supported, and their availability depends on the platform.
    | `level` | `type` | `data` |
    | --- | --- | --- |
    | `SOL_SOCKET` | `SCM_RIGHTS` | A non-empty list of `Socket` instances or stream resources, whose file descriptors are sent to the receiving process. |
    | `SOL_SOCKET` | `SCM_CREDENTIALS` | An array with the keys `pid`, `uid` and `gid`. Named `SCM_CREDS` or `SCM_CREDS2` on some systems. |
    | `IPPROTO_IPV6` | `IPV6_PKTINFO` | An array with the keys `addr` and `ifindex`. |
    | `IPPROTO_IPV6` | `IPV6_HOPLIMIT` | An `int`. |
    | `IPPROTO_IPV6` | `IPV6_TCLASS` | An `int`. |




- **`$flags`** — The value of `$flags` can be any combination of the following flags, joined with the binary OR (`|`) operator. | `MSG_OOB` | Send OOB (out-of-band) data. | | --- | --- | | `MSG_EOR` | Indicate a record mark. The sent data completes the record. | | `MSG_DONTWAIT` | With this flag set, the function returns even if it would normally have blocked. | | `MSG_DONTROUTE` | Bypass routing, use direct interface. |

## Return Values

Returns the number of bytes sent, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$socket` is a `Socket` instance now; previously, it was a `resource`. |

## Examples

**Sending a message with `socket_sendmsg()`**

```php


<?php
$server = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
socket_bind($server, '127.0.0.1', 1053);

$client = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
$sent = socket_sendmsg($client, [
    'name' => ['addr' => '127.0.0.1', 'port' => 1053],
    'iov'  => ['Hello ', 'world'],
], 0);

echo "sent: $sent\n";

socket_recvfrom($server, $buffer, 64, 0, $from, $port);
echo "received: $buffer\n";
?>

   
```

The above example will output:

```text


sent: 11
received: Hello world

   
```

**Passing a file descriptor over a UNIX socket**

The `control` key carries ancillary data. With `SCM_RIGHTS`, it transfers open file descriptors to the process at the other end of a UNIX socket. This is not available on Windows.

```php


<?php
socket_create_pair(AF_UNIX, SOCK_STREAM, 0, $pair);
[$sender, $receiver] = $pair;

$file = fopen(__FILE__, 'r');

socket_sendmsg($sender, [
    // At least one byte of regular data must accompany the ancillary data.
    'iov'     => ['fd'],
    'control' => [
        ['level' => SOL_SOCKET, 'type' => SCM_RIGHTS, 'data' => [$file]],
    ],
], 0);

$message = [
    'buffer_size' => 16,
    'controllen'  => socket_cmsg_space(SOL_SOCKET, SCM_RIGHTS, 1),
];
socket_recvmsg($receiver, $message, 0);

$received = $message['control'][0]['data'][0];
echo "first line: ", fgets($received);
?>

   
```

The above example will output:

```text


first line: <?php

   
```

## See Also

`socket_recvmsg()` `socket_cmsg_space()`
