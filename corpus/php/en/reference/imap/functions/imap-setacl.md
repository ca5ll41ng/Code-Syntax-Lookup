---
id: "en-php-function-function-imap-setacl"
language: "php"
lang: "en"
category: "function"
name: "imap_setacl"
title: "Sets the ACL for a given mailbox"
signature: "bool imap_setacl(IMAP\\Connection $imap, string $mailbox, string $user_id, string $rights)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-setacl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the ACL for a given mailbox

## Description

```php
bool imap_setacl(IMAP\Connection $imap, string $mailbox, string $user_id, string $rights)
```

Sets the ACL for a giving mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$user_id`** — The user to give the rights to.
- **`$rights`** — The rights to give to the user. Passing an empty string will delete acl.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Notes

This function is currently only available to users of the c-client2000 or greater library.

## See Also

`imap_getacl()`
