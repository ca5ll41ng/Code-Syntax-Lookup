---
id: "en-php-function-sessionhandler-write"
language: "php"
lang: "en"
category: "function"
name: "SessionHandler::write"
title: "Write session data"
signature: "public bool SessionHandler::write(string $id, string $data)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandler.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write session data

## Description

```php
public bool SessionHandler::write(string $id, string $data)
```

Writes the session data to the session storage. Called by normal PHP shutdown, by `session_write_close()`, or when `session_register_shutdown()` fails. PHP will call `SessionHandler::close()` immediately after this method returns.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by `session_set_save_handler()`.

If this class is extended by inheritance, calling the parent `$write` method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows this method to be overridden and or intercepted and filtered (for example, encrypting the `$data` value before sending it to the parent `$write` method).

For more information on what this method is expected to do, please refer to the documentation at `SessionHandlerInterface::write()`.

## Parameters

- **`$id`** — The session id.
- **`$data`** — The encoded session data. This data is the result of the PHP internally encoding the `$_SESSION` superglobal to a serialized string and passing it as this parameter. Please note sessions use an alternative serialization method.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.

## See Also

The session.serialize_handler configuration directive.
