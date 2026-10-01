---
id: "en-php-function-function-imap-num-recent"
language: "php"
lang: "en"
category: "function"
name: "imap_num_recent"
title: "Gets the number of recent messages in current mailbox"
signature: "int imap_num_recent(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-num-recent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of recent messages in current mailbox

## Description

```php
int imap_num_recent(IMAP\Connection $imap)
```

Gets the number of recent messages in the current mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Returns the number of recent messages in the current mailbox, as an integer.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_num_msg()` `imap_status()`
