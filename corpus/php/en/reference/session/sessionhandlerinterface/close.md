---
id: "en-php-function-sessionhandlerinterface-close"
language: "php"
lang: "en"
category: "function"
name: "SessionHandlerInterface::close"
title: "Close the session"
signature: "public bool SessionHandlerInterface::close()"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandlerinterface.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close the session

## Description

```php
public bool SessionHandlerInterface::close()
```

Closes the current session. This function is automatically executed when closing the session, or explicitly via `session_write_close()`.

## Parameters

This function has no parameters.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.
