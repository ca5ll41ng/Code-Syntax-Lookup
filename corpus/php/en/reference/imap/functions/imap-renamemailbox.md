---
id: "en-php-function-function-imap-renamemailbox"
language: "php"
lang: "en"
category: "function"
name: "imap_renamemailbox"
title: "Rename an old mailbox to new mailbox"
signature: "bool imap_renamemailbox(IMAP\\Connection $imap, string $from, string $to)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-renamemailbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rename an old mailbox to new mailbox

## Description

```php
bool imap_renamemailbox(IMAP\Connection $imap, string $from, string $to)
```

This function renames on old mailbox to new mailbox (see `imap_open()` for the format of `$mbox` names).

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$from`** — The old mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$to`** — The new mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.



## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_createmailbox()` `imap_deletemailbox()`
