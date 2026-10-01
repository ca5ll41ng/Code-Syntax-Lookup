---
id: "en-php-function-function-imap-getacl"
language: "php"
lang: "en"
category: "function"
name: "imap_getacl"
title: "Gets the ACL for a given mailbox"
signature: "array|false imap_getacl(IMAP\\Connection $imap, string $mailbox)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-getacl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the ACL for a given mailbox

## Description

```php
array|false imap_getacl(IMAP\Connection $imap, string $mailbox)
```

Gets the ACL for a given mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$mailbox`** — The mailbox name, see `imap_open()` for more information
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.



## Return Values

Returns an associative array of "folder" => "acl" pairs, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_getacl()` example**

```php


<?php

print_r(imap_getacl($imap, 'user.joecool'));

?>

    
```

The above example will output something similar to:

```text


Array
(
    [asubfolder] => lrswipcda
    [anothersubfolder] => lrswipcda
)

    
```

## Notes

This function is currently only available to users of the c-client2000 or greater library.

## See Also

`imap_setacl()`
