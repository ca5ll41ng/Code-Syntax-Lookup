---
id: "en-php-function-sessionhandlerinterface-write"
language: "php"
lang: "en"
category: "function"
name: "SessionHandlerInterface::write"
title: "Write session data"
signature: "public bool SessionHandlerInterface::write(string $id, string $data)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandlerinterface.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write session data

## Description

```php
public bool SessionHandlerInterface::write(string $id, string $data)
```

Writes the session data to the session storage. Called by `session_write_close()`, when `session_register_shutdown()` fails, or during a normal shutdown. Note: `SessionHandlerInterface::close()` is called immediately after this function.

PHP will call this method when the session is ready to be saved and closed. It encodes the session data from the `$_SESSION` superglobal to a serialized string and passes this along with the session ID to this method for storage. The serialization method used is specified in the session.serialize_handler setting.

Note this method is normally called by PHP after the output buffers have been closed unless explicitly called by `session_write_close()`

## Parameters

- **`$id`** — The session id.
- **`$data`** — The encoded session data. This data is the result of the PHP internally encoding the `$_SESSION` superglobal to a serialized string and passing it as this parameter. Please note sessions use an alternative serialization method.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.

## See Also

The session.serialize_handler configuration directive.
