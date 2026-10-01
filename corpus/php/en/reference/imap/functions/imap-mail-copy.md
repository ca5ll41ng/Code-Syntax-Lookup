---
id: "en-php-function-function-imap-mail-copy"
language: "php"
lang: "en"
category: "function"
name: "imap_mail_copy"
title: "Copy specified messages to a mailbox"
signature: "bool imap_mail_copy(IMAP\\Connection $imap, string $message_nums, string $mailbox, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mail-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy specified messages to a mailbox

## Description

```php
bool imap_mail_copy(IMAP\Connection $imap, string $message_nums, string $mailbox, int $flags = 0)
```

Copies mail messages specified by `$message_nums` to specified mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_nums`** — `$message_nums` is a range not just message numbers (as described in [RFC2060](2060)).
- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$flags`** — `$flags` is a bitmask of one or more of - `CP_UID` - the sequence numbers contain UIDS - `CP_MOVE` - Delete the messages from the current mailbox after copying. If this flag is set, the function behaves identically to `imap_mail_move()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_mail_move()`
