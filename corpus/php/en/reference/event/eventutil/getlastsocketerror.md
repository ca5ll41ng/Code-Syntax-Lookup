---
id: "en-php-function-eventutil-getlastsocketerror"
language: "php"
lang: "en"
category: "function"
name: "EventUtil::getLastSocketError"
title: "Returns the most recent socket error"
signature: "public static string EventUtil::getLastSocketError([mixed $socket = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventutil.getlastsocketerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the most recent socket error

## Description

```php
public static string EventUtil::getLastSocketError([mixed $socket = ...])
```

Returns the most recent socket error.

## Parameters

- **`$socket`** — Socket resource, stream or a file descriptor of a socket.

## Return Values

Returns the most recent socket error.

## See Also

  `EventUtil::getLastSocketErrno()`
