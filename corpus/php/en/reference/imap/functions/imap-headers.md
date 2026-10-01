---
id: "en-php-function-function-imap-headers"
language: "php"
lang: "en"
category: "function"
name: "imap_headers"
title: "Returns headers for all messages in a mailbox"
signature: "array|false imap_headers(IMAP\\Connection $imap)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-headers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns headers for all messages in a mailbox

## Description

```php
array|false imap_headers(IMAP\Connection $imap)
```

Returns headers for all messages in a mailbox.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.

## Return Values

Returns an array of string formatted with header info. One element per mail message. Returns `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
