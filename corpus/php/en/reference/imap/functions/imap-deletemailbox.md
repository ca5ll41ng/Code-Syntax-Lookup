---
id: "en-php-function-function-imap-deletemailbox"
language: "php"
lang: "en"
category: "function"
name: "imap_deletemailbox"
title: "Delete a mailbox"
signature: "bool imap_deletemailbox(IMAP\\Connection $imap, string $mailbox)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-deletemailbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a mailbox

## Description

```php
bool imap_deletemailbox(IMAP\Connection $imap, string $mailbox)
```

Deletes the specified `$mailbox`.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.



## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_createmailbox()` `imap_renamemailbox()` `imap_open()` for the format of `$mbox`
