---
id: "en-php-function-eventutil-setsocketoption"
language: "php"
lang: "en"
category: "function"
name: "EventUtil::setSocketOption"
title: "Sets socket options"
signature: "public static bool EventUtil::setSocketOption(mixed $socket, int $level, int $optname, mixed $optval)"
module: "event"
source_url: "https://www.php.net/manual/en/eventutil.setsocketoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets socket options

## Description

```php
public static bool EventUtil::setSocketOption(mixed $socket, int $level, int $optname, mixed $optval)
```

Sets socket options.

## Parameters

- **`$socket`** — Socket resource, stream, or numeric file descriptor associated with the socket.
- **`$level`** — One of `EventUtil::SOL_*` constants. Specifies the protocol level at which the option resides. For example, to retrieve options at the socket level, a `$level` parameter of `EventUtil::SOL_SOCKET` would be used. Other levels, such as TCP, can be used by specifying the protocol number of that level. Protocol numbers can be found by using the `getprotobyname()` function. See EventUtil constants.
- **`$optname`** — Option name(type). Has the same meaning as corresponding parameter of `socket_get_option()` function. See EventUtil constants.
- **`$optval`** — Accepts the same values as `$optval` parameter of the `socket_get_option()` function.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `socket_get_option()`   `socket_set_option()`
