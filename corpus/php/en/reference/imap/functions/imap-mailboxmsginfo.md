---
id: "en-php-function-function-imap-mailboxmsginfo"
language: "php"
lang: "en"
category: "function"
name: "imap_mailboxmsginfo"
title: "Get information about the current mailbox"
signature: "stdClass imap_mailboxmsginfo(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mailboxmsginfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get information about the current mailbox

## Description

```php
stdClass imap_mailboxmsginfo(IMAP\Connection $imap)
```

Checks the current mailbox status on the server. It is similar to `imap_status()`, but will additionally sum up the size of all messages in the mailbox, which will take some additional time to execute.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Returns the information in an object with following properties:

| Date | date of last change (current datetime) |
| --- | --- |
| Driver | driver |
| Mailbox | name of the mailbox |
| Nmsgs | number of messages |
| Recent | number of recent messages |
| Unread | number of unread messages |
| Deleted | number of deleted messages |
| Size | mailbox size |

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_mailboxmsginfo()` example**

```php


<?php

$mbox = imap_open("{imap.example.org}INBOX", "username", "password")
      or die("can't connect: " . imap_last_error());

$check = imap_mailboxmsginfo($mbox);

if ($check) {
    echo "Date: "     . $check->Date    . "<br />\n" ;
    echo "Driver: "   . $check->Driver  . "<br />\n" ;
    echo "Mailbox: "  . $check->Mailbox . "<br />\n" ;
    echo "Messages: " . $check->Nmsgs   . "<br />\n" ;
    echo "Recent: "   . $check->Recent  . "<br />\n" ;
    echo "Unread: "   . $check->Unread  . "<br />\n" ;
    echo "Deleted: "  . $check->Deleted . "<br />\n" ;
    echo "Size: "     . $check->Size    . "<br />\n" ;
} else {
    echo "imap_mailboxmsginfo() failed: " . imap_last_error() . "<br />\n";
}

imap_close($mbox);

?>

    
```
