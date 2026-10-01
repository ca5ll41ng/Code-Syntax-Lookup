---
id: "en-php-function-sessionhandler-gc"
language: "php"
lang: "en"
category: "function"
name: "SessionHandler::gc"
title: "Cleanup old sessions"
signature: "public int|false SessionHandler::gc(int $max_lifetime)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandler.gc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cleanup old sessions

## Description

```php
public int|false SessionHandler::gc(int $max_lifetime)
```

Cleans up expired sessions. Called randomly by PHP internally when a session starts or when `session_start()` is invoked. The frequency this is called is based on the session.gc_divisor and session.gc_probability configuration directives.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by `session_set_save_handler()`.

If this class is extended by inheritance, calling the parent `$gc` method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows this method to be overridden and or intercepted and filtered.

For more information on what this method is expected to do, please refer to the documentation at `SessionHandlerInterface::gc()`.

## Parameters

- **`$max_lifetime`** — Sessions that have not updated for the last `$max_lifetime` seconds will be removed.

## Return Values

Returns the number of deleted sessions on success, or `false` on failure. Note this value is returned internally to PHP for processing.

## Changelog

|  |  |
| --- | --- |
| 7.1.0 | Prior to this version, the function returned `true` on success. |
