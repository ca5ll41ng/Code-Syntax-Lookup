---
id: "en-php-function-function-imap-set-quota"
language: "php"
lang: "en"
category: "function"
name: "imap_set_quota"
title: "Sets a quota for a given mailbox"
signature: "bool imap_set_quota(IMAP\\Connection $imap, string $quota_root, int $mailbox_size)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-set-quota.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a quota for a given mailbox

## Description

```php
bool imap_set_quota(IMAP\Connection $imap, string $quota_root, int $mailbox_size)
```

Sets an upper limit quota on a per mailbox basis.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$quota_root`** — The mailbox to have a quota set. This should follow the IMAP standard format for a mailbox: `user.name`.
- **`$mailbox_size`** — The maximum size (in KB) for the `$quota_root`

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_set_quota()` example**

```php


<?php
$mbox = imap_open("{imap.example.org:143}", "mailadmin", "password");

if (!imap_set_quota($mbox, "user.kalowsky", 3000)) {
    echo "Error in setting quota\n";
    return;
}

imap_close($mbox);
?>

    
```

## Notes

This function is currently only available to users of the c-client2000 or greater library.

The given `$imap` must be opened as the mail administrator, other wise this function will fail.

## See Also

`imap_open()` `imap_get_quota()`
