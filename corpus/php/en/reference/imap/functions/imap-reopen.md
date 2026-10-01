---
id: "en-php-function-function-imap-reopen"
language: "php"
lang: "en"
category: "function"
name: "imap_reopen"
title: "Reopen IMAP stream to new mailbox"
signature: "bool imap_reopen(IMAP\\Connection $imap, string $mailbox, int $flags = 0, int $retries = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-reopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reopen IMAP stream to new mailbox

## Description

```php
bool imap_reopen(IMAP\Connection $imap, string $mailbox, int $flags = 0, int $retries = 0)
```

Reopens the specified stream to a new `$mailbox` on an IMAP or NNTP server.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$flags`** — The `$flags` are a bit mask with one or more of the following: - `OP_READONLY` - Open mailbox read-only - `OP_ANONYMOUS` - Don't use or update a `.newsrc` for news (NNTP only) - `OP_HALFOPEN` - For IMAP and NNTP names, open a connection but don't open a mailbox. - `OP_EXPUNGE` - Silently expunge recycle stream - `CL_EXPUNGE` - Expunge mailbox automatically upon mailbox close (see also `imap_delete()` and `imap_expunge()`)
- **`$retries`** — Number of maximum connect attempts

## Return Values

Returns `true` if the stream is reopened, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_reopen()` example**

```php


<?php
$mbox = imap_open("{imap.example.org:143}INBOX", "username", "password") or die(implode(", ", imap_errors()));
// ...
imap_reopen($mbox, "{imap.example.org:143}INBOX.Sent") or die(implode(", ", imap_errors()));
// ..
?>

    
```
