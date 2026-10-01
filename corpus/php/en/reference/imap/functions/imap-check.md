---
id: "en-php-function-function-imap-check"
language: "php"
lang: "en"
category: "function"
name: "imap_check"
title: "Check current mailbox"
signature: "stdClass|false imap_check(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-check.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check current mailbox

## Description

```php
stdClass|false imap_check(IMAP\Connection $imap)
```

Checks information about the current mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Returns the information in an object with following properties:

- `Date` - current system time formatted according to [RFC2822](2822)
- `Driver` - protocol used to access this mailbox: POP3, IMAP, NNTP
- `Mailbox` - the mailbox name
- `Nmsgs` - number of messages in the mailbox
- `Recent` - number of recent messages in the mailbox

Returns `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## Examples

**`imap_check()` example**

```php


<?php

$imap = imap_check($imap_stream);
var_dump($imap);

?>

    
```

The above example will output something similar to:

```text


object(stdClass)(5) {
  ["Date"]=>
  string(37) "Wed, 10 Dec 2003 17:56:54 +0100 (CET)"
  ["Driver"]=>
  string(4) "imap"
  ["Mailbox"]=>
  string(54)
  "{www.example.com:143/imap/user="foo@example.com"}INBOX"
  ["Nmsgs"]=>
  int(1)
  ["Recent"]=>
  int(0)
}

    
```
