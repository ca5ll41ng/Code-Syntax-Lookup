---
id: "en-php-function-sessionhandler-close"
language: "php"
lang: "en"
category: "function"
name: "SessionHandler::close"
title: "Close the session"
signature: "public bool SessionHandler::close()"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandler.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close the session

## Description

```php
public bool SessionHandler::close()
```

Closes the current session. This method is automatically executed internally by PHP when closing the session, or explicitly via `session_write_close()` (which first calls the `SessionHandler::write()`).

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was activated by `session_set_save_handler()`.

If this class is extended by inheritance, calling the parent `$close` method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows the method to be overridden and or intercepted.

For more information on what this method is expected to do, please refer to the documentation at `SessionHandlerInterface::close()`.

## Parameters

This function has no parameters.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.
