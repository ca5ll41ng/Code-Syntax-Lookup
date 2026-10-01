---
id: "en-php-function-sessionhandlerinterface-destroy"
language: "php"
lang: "en"
category: "function"
name: "SessionHandlerInterface::destroy"
title: "Destroy a session"
signature: "public bool SessionHandlerInterface::destroy(string $id)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandlerinterface.destroy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Destroy a session

## Description

```php
public bool SessionHandlerInterface::destroy(string $id)
```

Destroys a session. Called by `session_regenerate_id()` (with $destroy = `true`), `session_destroy()` and when `session_decode()` fails.

## Parameters

- **`$id`** — The session ID being destroyed.

## Return Values

The return value (usually `true` on success, `false` on failure). Note this value is returned internally to PHP for processing.
