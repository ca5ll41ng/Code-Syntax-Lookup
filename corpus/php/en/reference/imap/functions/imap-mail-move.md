---
id: "en-php-function-function-imap-mail-move"
language: "php"
lang: "en"
category: "function"
name: "imap_mail_move"
title: "Move specified messages to a mailbox"
signature: "bool imap_mail_move(IMAP\\Connection $imap, string $message_nums, string $mailbox, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mail-move.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move specified messages to a mailbox

## Description

```php
bool imap_mail_move(IMAP\Connection $imap, string $message_nums, string $mailbox, int $flags = 0)
```

Moves mail messages specified by `$message_nums` to the specified `$mailbox`. Note that the mail messages are actually *copied* to the `$mailbox`, and the original messages are flagged for deletion. That implies that the messages in `$mailbox` are assigned new UIDs.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_nums`** — `$message_nums` is a range not just message numbers (as described in [RFC2060](2060)).
- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$flags`** — `$flags` is a bitmask and may contain the single option: - `CP_UID` - the sequence numbers contain UIDS

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Notes

> `imap_mail_move()` will flag the original mail with a delete flag, to successfully delete it a call to the `imap_expunge()` function must be made.

## See Also

`imap_mail_copy()`
