---
id: "en-php-function-function-imap-close"
language: "php"
lang: "en"
category: "function"
name: "imap_close"
title: "Close an IMAP stream"
signature: "true imap_close(IMAP\\Connection $imap, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close an IMAP stream

## Description

```php
true imap_close(IMAP\Connection $imap, int $flags = 0)
```

Closes the imap stream.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$flags`** — If set to `CL_EXPUNGE`, the function will silently expunge the mailbox before closing, removing all messages marked for deletion. You can achieve the same thing by using `imap_expunge()`

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws a `ValueError` if `$flags` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | A `ValueError` is now thrown on invalid `$flags` parameter values. Previously, a warning was emitted and the function returned `false`. |

## See Also

`imap_open()`
