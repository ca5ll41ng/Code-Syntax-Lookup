---
id: "en-php-function-sessionhandlerinterface-gc"
language: "php"
lang: "en"
category: "function"
name: "SessionHandlerInterface::gc"
title: "Cleanup old sessions"
signature: "public int|false SessionHandlerInterface::gc(int $max_lifetime)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionhandlerinterface.gc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cleanup old sessions

## Description

```php
public int|false SessionHandlerInterface::gc(int $max_lifetime)
```

Cleans up expired sessions. Called by `session_start()`, based on session.gc_divisor, session.gc_probability and session.gc_maxlifetime settings.

## Parameters

- **`$max_lifetime`** — Sessions that have not updated for the last `$max_lifetime` seconds will be removed.

## Return Values

Returns the number of deleted sessions on success, or `false` on failure. Note this value is returned internally to PHP for processing.

## Changelog

|  |  |
| --- | --- |
| 7.1.0 | Prior to this version, the function returned `true` on success. |
