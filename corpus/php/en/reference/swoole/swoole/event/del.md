---
id: "en-php-function-swoole-event-del"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::del"
title: "Remove a socket from reactor event listener"
signature: "public static bool Swoole\\Event::del(mixed $sock)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.del.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a socket from reactor event listener

## Description

```php
public static bool Swoole\Event::del(mixed $sock)
```

Removes a socket from the reactor event listener.

> Always call Event::del to unregister event monitoring prior to closing the socket. Failure to do so can result in memory leaks.

## Parameters

- **`$sock`** — Socket file descriptor to remove.

## Return Values

Returns `true` on success or `false` on failure.
