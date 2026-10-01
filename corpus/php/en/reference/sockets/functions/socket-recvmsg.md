---
id: "en-php-function-function-socket-recvmsg"
language: "php"
lang: "en"
category: "function"
name: "socket_recvmsg"
title: "Read a message"
signature: "int|false socket_recvmsg(Socket $socket, array $message, int $flags = 0)"
module: "sockets"
source_url: "https://www.php.net/manual/en/function.socket-recvmsg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read a message

## Description

```php
int|false socket_recvmsg(Socket $socket, array $message, int $flags = 0)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$socket`**
- **`$message`**
- **`$flags`**

## Return Values

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$socket` is a `Socket` instance now; previously, it was a `resource`. |

## See Also

`socket_sendmsg()` `socket_cmsg_space()`
