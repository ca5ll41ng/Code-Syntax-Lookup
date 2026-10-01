---
id: "en-php-function-sessionupdatetimestamphandlerinterface-updatetimestamp"
language: "php"
lang: "en"
category: "function"
name: "SessionUpdateTimestampHandlerInterface::updateTimestamp"
title: "Update timestamp"
signature: "public bool SessionUpdateTimestampHandlerInterface::updateTimestamp(string $id, string $data)"
module: "session"
source_url: "https://www.php.net/manual/en/sessionupdatetimestamphandlerinterface.updatetimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Update timestamp

## Description

```php
public bool SessionUpdateTimestampHandlerInterface::updateTimestamp(string $id, string $data)
```

Updates the last modification timestamp of the session. This function is automatically executed when a session is updated.

## Parameters

- **`$id`** — The session ID.
- **`$data`** — The session data. The serialized session data may be used to determine whether the session data has changed and therefore should be updated.

## Return Values

Returns `true` if the timestamp was updated, `false` otherwise. Note that this value is returned internally to PHP for processing.
