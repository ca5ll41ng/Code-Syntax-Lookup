---
id: "en-php-function-function-imap-undelete"
language: "php"
lang: "en"
category: "function"
name: "imap_undelete"
title: "Unmark the message which is marked deleted"
signature: "true imap_undelete(IMAP\\Connection $imap, string $message_nums, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-undelete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unmark the message which is marked deleted

## Description

```php
true imap_undelete(IMAP\Connection $imap, string $message_nums, int $flags = 0)
```

Removes the deletion flag for a specified message, which is set by `imap_delete()` or `imap_mail_move()`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_nums`** — A `string` representing one or more messages in IMAP4-style sequence format (`"n"`, `"n:m"`, or combination of these delimited by commas).
- **`$flags`**

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_delete()` `imap_mail_move()`
