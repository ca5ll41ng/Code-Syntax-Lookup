---
id: "en-php-function-sessionhandler-open"
language: "php"
lang: "en"
category: "function"
name: "SessionHandler::open"
title: "Initialize session"
signature: "public bool SessionHandler::open(string $path, string $name)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandler.open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize session

## Description

```php
public bool SessionHandler::open(string $path, string $name)
```

Create new session, or re-initialize existing session. Called internally by PHP when a session starts either automatically or when `session_start()` is invoked.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by `session_set_save_handler()`.

If this class is extended by inheritance, calling the parent `$open` method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows this method to be overridden and or intercepted and filtered.

For more information on what this method is expected to do, please refer to the documentation at `SessionHandlerInterface::open()`.

## Parameters

- **`$path`** — The path where to store/retrieve the session.
- **`$name`** — The session name.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.

## See Also

The session.auto-start configuration directive.
