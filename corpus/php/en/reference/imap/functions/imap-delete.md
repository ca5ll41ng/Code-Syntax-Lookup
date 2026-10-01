---
id: "en-php-function-function-imap-delete"
language: "php"
lang: "en"
category: "function"
name: "imap_delete"
title: "Mark a message for deletion from current mailbox"
signature: "true imap_delete(IMAP\\Connection $imap, string $message_nums, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mark a message for deletion from current mailbox

## Description

```php
true imap_delete(IMAP\Connection $imap, string $message_nums, int $flags = 0)
```

Marks messages listed in `$message_nums` for deletion. Messages marked for deletion will stay in the mailbox until either `imap_expunge()` is called or `imap_close()` is called with the optional parameter `CL_EXPUNGE`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_nums`** — A `string` representing one or more messages in IMAP4-style sequence format (`"n"`, `"n:m"`, or combination of these delimited by commas).
- **`$flags`** — You can set the `FT_UID` which tells the function to treat the `$message_nums` argument as a `UID`.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws a `ValueError` if `$flags` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
| 8.0.0 | A `ValueError` is now thrown on invalid `$flags` parameter values. Previously, a warning was emitted and the function returned `false`. |

## Examples

**`imap_delete()` example**

```php


<?php

$mbox = imap_open("{imap.example.org}INBOX", "username", "password")
    or die("Can't connect: " . imap_last_error());

$check = imap_mailboxmsginfo($mbox);
echo "Messages before delete: " . $check->Nmsgs . "<br />\n";

imap_delete($mbox, 1);

$check = imap_mailboxmsginfo($mbox);
echo "Messages after  delete: " . $check->Nmsgs . "<br />\n";

imap_expunge($mbox);

$check = imap_mailboxmsginfo($mbox);
echo "Messages after expunge: " . $check->Nmsgs . "<br />\n";

imap_close($mbox);
?>

    
```

## Notes

> IMAP mailboxes may not have their message flags saved between connections, so `imap_expunge()` should be called during the same connection in order to guarantee that messages marked for deletion will actually be purged.

## See Also

`imap_undelete()` `imap_expunge()` `imap_close()`
