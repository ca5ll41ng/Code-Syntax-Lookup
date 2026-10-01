---
id: "en-php-function-function-imap-lsub"
language: "php"
lang: "en"
category: "function"
name: "imap_lsub"
title: "List all the subscribed mailboxes"
signature: "array|false imap_lsub(IMAP\\Connection $imap, string $reference, string $pattern)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-lsub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# List all the subscribed mailboxes

## Description

```php
array|false imap_lsub(IMAP\Connection $imap, string $reference, string $pattern)
```

Gets an array of all the mailboxes that you have subscribed.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$reference`** — `$reference` should normally be just the server specification as described in `imap_open()`
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$pattern`** — Specifies where in the mailbox hierarchy to start searching. — There are two special characters you can pass as part of the `$pattern`: '`*`' and '`&#37;`'. '`*`' means to return all mailboxes. If you pass `$pattern` as '`*`', you will get a list of the entire mailbox hierarchy. '`&#37;`' means to return the current level only. '`&#37;`' as the `$pattern` parameter will return only the top level mailboxes; '`~/mail/&#37;`' on `UW_IMAPD` will return every mailbox in the `~/mail` directory, but none in subfolders of that directory.

## Return Values

Returns an array of all the subscribed mailboxes, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_list()` `imap_getmailboxes()`
