---
id: "en-php-function-function-imap-msgno"
language: "php"
lang: "en"
category: "function"
name: "imap_msgno"
title: "Gets the message sequence number for the given UID"
signature: "int imap_msgno(IMAP\\Connection $imap, int $message_uid)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-msgno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the message sequence number for the given UID

## Description

```php
int imap_msgno(IMAP\Connection $imap, int $message_uid)
```

Returns the message sequence number for the given `$message_uid`.

This function is the inverse of `imap_uid()`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_uid`** — The message UID

## Return Values

Returns the message sequence number for the given `$message_uid`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_uid()`
