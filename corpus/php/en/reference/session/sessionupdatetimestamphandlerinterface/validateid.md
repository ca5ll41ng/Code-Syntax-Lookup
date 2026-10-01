---
id: "en-php-function-sessionupdatetimestamphandlerinterface-validateid"
language: "php"
lang: "en"
category: "function"
name: "SessionUpdateTimestampHandlerInterface::validateId"
title: "Validate ID"
signature: "public bool SessionUpdateTimestampHandlerInterface::validateId(string $id)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionupdatetimestamphandlerinterface.validateid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validate ID

## Description

```php
public bool SessionUpdateTimestampHandlerInterface::validateId(string $id)
```

Validates a given session ID. A session ID is valid, if a session with that ID already exists. This function is automatically executed when a session is to be started, a session ID is supplied and session.use_strict_mode is enabled.

## Parameters

- **`$id`** — The session ID.

## Return Values

Returns `true` for valid ID, `false` otherwise. Note that this value is returned internally to PHP for processing.
