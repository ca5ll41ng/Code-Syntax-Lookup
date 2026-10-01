---
id: "en-php-function-function-session-write-close"
language: "php"
lang: "en"
category: "function"
name: "session_write_close"
title: "Write session data and end session"
signature: "bool session_write_close()"
module: "session"
source_url: "https://www.php.net/manual/en/function.session-write-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write session data and end session

## Description

```php
bool session_write_close()
```

End the current session and store session data.

Session data is usually stored after your script terminated without the need to call `session_write_close()`, but as session data is locked to prevent concurrent writes only one script may operate on a session at any time. When using framesets together with sessions you will experience the frames loading one by one due to this locking. You can reduce the time needed to load all the frames by ending the session as soon as all changes to session variables are done.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | If `$_SESSION` contains a key with a pipe character (`\|`), an `E_WARNING` is now emitted. Previously, this would silently fail to write the session data. |
| 7.2.0 | The return type of this function is `bool` now. Formerly, it has been `void`. |

## See Also

 `session_register_shutdown()` `session_start()` `session_abort()`
