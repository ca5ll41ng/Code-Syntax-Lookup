---
id: "en-php-function-function-imap-num-msg"
language: "php"
lang: "en"
category: "function"
name: "imap_num_msg"
title: "Gets the number of messages in the current mailbox"
signature: "int|false imap_num_msg(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-num-msg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of messages in the current mailbox

## Description

```php
int|false imap_num_msg(IMAP\Connection $imap)
```

Gets the number of messages in the current mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Return the number of messages in the current mailbox, as an integer, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_num_recent()` `imap_status()`
