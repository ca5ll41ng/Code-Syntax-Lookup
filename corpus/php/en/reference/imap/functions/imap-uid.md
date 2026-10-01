---
id: "en-php-function-function-imap-uid"
language: "php"
lang: "en"
category: "function"
name: "imap_uid"
title: "This function returns the UID for the given message sequence number"
signature: "int|false imap_uid(IMAP\\Connection $imap, int $message_num)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-uid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This function returns the UID for the given message sequence number

## Description

```php
int|false imap_uid(IMAP\Connection $imap, int $message_num)
```

This function returns the UID for the given message sequence number. An UID is a unique identifier that will not change over time while a message sequence number may change whenever the content of the mailbox changes.

This function is the inverse of `imap_msgno()`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_num`** — The message number.

## Return Values

The UID of the given message.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Notes

> This function is not supported by POP3 mailboxes.

## See Also

`imap_msgno()`
