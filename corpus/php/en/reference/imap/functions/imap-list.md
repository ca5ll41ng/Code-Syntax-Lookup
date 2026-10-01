---
id: "en-php-function-function-imap-list"
language: "php"
lang: "en"
category: "function"
name: "imap_list"
title: "Read the list of mailboxes"
signature: "array|false imap_list(IMAP\\Connection $imap, string $reference, string $pattern)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read the list of mailboxes

## Description

```php
array|false imap_list(IMAP\Connection $imap, string $reference, string $pattern)
```

Read the list of mailboxes.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$reference`** — `$reference` should normally be just the server specification as described in `imap_open()`.
  > Passing untrusted data to this parameter is *insecure*, unless imap.enable_insecure_rsh is disabled.


- **`$pattern`** — Specifies where in the mailbox hierarchy to start searching. — There are two special characters you can pass as part of the `$pattern`: '`*`' and '`&#37;`'. '`*`' means to return all mailboxes. If you pass `$pattern` as '`*`', you will get a list of the entire mailbox hierarchy. '`&#37;`' means to return the current level only. '`&#37;`' as the `$pattern` parameter will return only the top level mailboxes; '`~/mail/&#37;`' on `UW_IMAPD` will return every mailbox in the `~/mail` directory, but none in subfolders of that directory.

## Return Values

Returns an array containing the names of the mailboxes or `false` in case of failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_list()` example**

```php


<?php
$mbox = imap_open("{imap.example.org}", "username", "password", OP_HALFOPEN)
      or die("can't connect: " . imap_last_error());

$list = imap_list($mbox, "{imap.example.org}", "*");
if (is_array($list)) {
    foreach ($list as $val) {
        echo imap_utf7_decode($val) . "\n";
    }
} else {
    echo "imap_list failed: " . imap_last_error() . "\n";
}

imap_close($mbox);
?>

    
```

## See Also

`imap_getmailboxes()` `imap_lsub()`
