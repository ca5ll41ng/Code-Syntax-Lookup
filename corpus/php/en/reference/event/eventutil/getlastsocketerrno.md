---
id: "en-php-function-eventutil-getlastsocketerrno"
language: "php"
lang: "en"
category: "function"
name: "EventUtil::getLastSocketErrno"
title: "Returns the most recent socket error number"
signature: "public static int EventUtil::getLastSocketErrno(mixed $socket = null)"
module: "event"
source_url: "https://www.php.net/manual/en/eventutil.getlastsocketerrno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the most recent socket error number

## Description

```php
public static int EventUtil::getLastSocketErrno(mixed $socket = null)
```

Returns the most recent socket error number( `errno` ).

## Parameters

- **`$socket`** — Socket resource, stream or a file descriptor of a socket.

## Return Values

Returns the most recent socket error number( `errno` ).

## See Also

  `EventUtil::getLastSocketError()`
