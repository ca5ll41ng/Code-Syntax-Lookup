---
id: "en-php-function-sessionhandler-read"
language: "php"
lang: "en"
category: "function"
name: "SessionHandler::read"
title: "Read session data"
signature: "public string|false SessionHandler::read(string $id)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandler.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read session data

## Description

```php
public string|false SessionHandler::read(string $id)
```

Reads the session data from the session storage, and returns the result back to PHP for internal processing. This method is called automatically by PHP when a session is started (either automatically or explicitly with `session_start()` and is preceded by an internal call to the `SessionHandler::open()`.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by `session_set_save_handler()`.

If this class is extended by inheritance, calling the parent `$read` method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows the method to be overridden and or intercepted and filtered (for example, decrypting the `$data` value returned by the parent `$read` method).

For more information on what this method is expected to do, please refer to the documentation at `SessionHandlerInterface::read()`.

## Parameters

- **`$id`** — The session id to read data for.

## Return Values

Returns the encoded session data from the internal save handler, an empty string if it holds no data for the session ID, or `false` if the internal save handler failed to read. Note this value is returned internally to PHP for processing.

## See Also

The session.serialize_handler configuration directive.
