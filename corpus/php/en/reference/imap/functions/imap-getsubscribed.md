---
id: "en-php-function-function-imap-getsubscribed"
language: "php"
lang: "en"
category: "function"
name: "imap_getsubscribed"
title: "List all the subscribed mailboxes"
signature: "array|false imap_getsubscribed(IMAP\\Connection $imap, string $reference, string $pattern)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-getsubscribed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# List all the subscribed mailboxes

## Description

```php
array|false imap_getsubscribed(IMAP\Connection $imap, string $reference, string $pattern)
```

Gets information about the subscribed mailboxes.

Identical to `imap_getmailboxes()`, except that it only returns mailboxes that the user is subscribed to.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$reference`** — `$reference` should normally be just the server specification as described in `imap_open()`
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$pattern`** — Specifies where in the mailbox hierarchy to start searching. — There are two special characters you can pass as part of the `$pattern`: '`*`' and '`&#37;`'. '`*`' means to return all mailboxes. If you pass `$pattern` as '`*`', you will get a list of the entire mailbox hierarchy. '`&#37;`' means to return the current level only. '`&#37;`' as the `$pattern` parameter will return only the top level mailboxes; '`~/mail/&#37;`' on `UW_IMAPD` will return every mailbox in the `~/mail` directory, but none in subfolders of that directory.

## Return Values

Returns an array of objects containing mailbox information. Each object has the attributes `$name`, specifying the full name of the mailbox; `$delimiter`, which is the hierarchy delimiter for the part of the hierarchy this mailbox is in; and `$attributes`. `$Attributes` is a bitmask that can be tested against:

- `LATT_NOINFERIORS` - This mailbox has no "children" (there are no mailboxes below this one).
- `LATT_NOSELECT` - This is only a container, not a mailbox - you cannot open it.
- `LATT_MARKED` - This mailbox is marked. Only used by UW-IMAPD.
- `LATT_UNMARKED` - This mailbox is not marked. Only used by UW-IMAPD.
- `LATT_REFERRAL` - This container has a referral to a remote mailbox.
- `LATT_HASCHILDREN` - This mailbox has selectable inferiors.
- `LATT_HASNOCHILDREN` - This mailbox has no selectable inferiors.

The function returns `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
