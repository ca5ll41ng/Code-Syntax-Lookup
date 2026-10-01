---
id: "en-php-function-sessionhandlerinterface-read"
language: "php"
lang: "en"
category: "function"
name: "SessionHandlerInterface::read"
title: "Read session data"
signature: "public string|false SessionHandlerInterface::read(string $id)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandlerinterface.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read session data

## Description

```php
public string|false SessionHandlerInterface::read(string $id)
```

Reads the session data from the session storage, and returns the results. Called right after the session starts or when `session_start()` is called. Please note that before this method is called `SessionHandlerInterface::open()` is invoked.

This method is called by PHP itself when the session is started. This method should retrieve the session data from storage by the session ID provided. The string returned by this method must be in the same serialized format as when originally passed to the `SessionHandlerInterface::write()`. Return an empty string when no data is stored for the given session ID; return `false` only to report a failure.

The data returned by this method will be decoded internally by PHP using the unserialization method specified in session.serialize_handler. The resulting data will be used to populate the `$_SESSION` superglobal.

Note that the serialization scheme is not the same as `unserialize()` and can be accessed by `session_decode()`.

## Parameters

- **`$id`** — The session id.

## Return Values

Returns an encoded string of the read data, or an empty string if no data is stored for the session ID. Returning `false` reports a failure: `session_start()` then emits an `E_WARNING` and returns `false`. Note this value is returned internally to PHP for processing.

## See Also

The session.serialize_handler configuration directive.
