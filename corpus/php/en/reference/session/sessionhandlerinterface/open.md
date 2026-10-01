---
id: "en-php-function-sessionhandlerinterface-open"
language: "php"
lang: "en"
category: "function"
name: "SessionHandlerInterface::open"
title: "Initialize session"
signature: "public bool SessionHandlerInterface::open(string $path, string $name)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandlerinterface.open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize session

## Description

```php
public bool SessionHandlerInterface::open(string $path, string $name)
```

Re-initialize existing session, or creates a new one. Called when a session starts or when `session_start()` is invoked.

## Parameters

- **`$path`** — The path where to store/retrieve the session.
- **`$name`** — The session name.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.

## See Also

`session_name()` The session.auto-start configuration directive.
