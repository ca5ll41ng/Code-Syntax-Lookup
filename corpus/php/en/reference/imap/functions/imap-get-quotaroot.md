---
id: "en-php-function-function-imap-get-quotaroot"
language: "php"
lang: "en"
category: "function"
name: "imap_get_quotaroot"
title: "Retrieve the quota settings per user"
signature: "array|false imap_get_quotaroot(IMAP\\Connection $imap, string $mailbox)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-get-quotaroot.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the quota settings per user

## Description

```php
array|false imap_get_quotaroot(IMAP\Connection $imap, string $mailbox)
```

Retrieve the quota settings per user. The limit value represents the total amount of space allowed for this user's total mailbox usage. The usage value represents the user's current total mailbox capacity.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$mailbox`** — `$mailbox` should normally be in the form of which mailbox (i.e. INBOX).

## Return Values

Returns an array of integer values pertaining to the specified user mailbox. All values contain a key based upon the resource name, and a corresponding array with the usage and limit values within.

This function will return `false` in the case of call failure, and an array of information about the connection upon an un-parsable response from the server.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_get_quotaroot()` example**

```php


<?php
$mbox = imap_open("{imap.example.org}", "kalowsky", "password", OP_HALFOPEN)
      or die("can't connect: " . imap_last_error());

$quota = imap_get_quotaroot($mbox, "INBOX");
if (is_array($quota)) {
   $storage = $quota['STORAGE'];
   echo "STORAGE usage level is: " .  $storage['usage'];
   echo "STORAGE limit level is: " .  $storage['limit'];

   $message = $quota['MESSAGE'];
   echo "MESSAGE usage level is: " .  $message['usage'];
   echo "MESSAGE limit level is: " .  $message['limit'];

   /* ...  */

}

imap_close($mbox);
?>

    
```

## Notes

This function is currently only available to users of the c-client2000 or greater library.

The `$imap` should be opened as the user whose mailbox you wish to check.

## See Also

`imap_open()` `imap_set_quota()` `imap_get_quota()`
