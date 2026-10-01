---
id: "en-php-function-eventutil-getsocketfd"
language: "php"
lang: "en"
category: "function"
name: "EventUtil::getSocketFd"
title: "Returns numeric file descriptor of a socket, or stream"
signature: "public static int EventUtil::getSocketFd(mixed $socket)"
module: "event"
source_url: "https://www.php.net/manual/en/eventutil.getsocketfd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns numeric file descriptor of a socket, or stream

## Description

```php
public static int EventUtil::getSocketFd(mixed $socket)
```

Returns numeric file descriptor of a socket or stream specified by `$socket` argument just like the `Event` extension does it internally for all methods accepting socket resource or stream.

## Parameters

- **`$socket`** — Socket resource or stream.

## Return Values

Returns numeric file descriptor of a socket, or stream. `EventUtil::getSocketFd()` returns `false` in case if it is whether failed to recognize the type of the underlying file, or detected that the file descriptor associated with `$socket` is not valid.
