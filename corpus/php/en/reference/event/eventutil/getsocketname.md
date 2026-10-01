---
id: "en-php-function-eventutil-getsocketname"
language: "php"
lang: "en"
category: "function"
name: "EventUtil::getSocketName"
title: "Retrieves the current address to which the socket is bound"
signature: "public static bool EventUtil::getSocketName(mixed $socket, string $address, [mixed $port = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventutil.getsocketname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves the current address to which the socket is bound

## Description

```php
public static bool EventUtil::getSocketName(mixed $socket, string $address, [mixed $port = ...])
```

Retrieves the current address to which the `$socket` is bound.

## Parameters

- **`$socket`** — Socket resource, stream or a file descriptor of a socket.
- **`$address`** — Output parameter. IP-address, or the UNIX domain socket path depending on the socket address family.
- **`$port`** — Output parameter. The port the socket is bound to. Has no meaning for UNIX domain sockets.

## Return Values

Returns `true` on success or `false` on failure.
