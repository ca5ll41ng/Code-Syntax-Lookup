---
id: "en-php-function-function-imap-fetchheader"
language: "php"
lang: "en"
category: "function"
name: "imap_fetchheader"
title: "Returns header for a message"
signature: "string|false imap_fetchheader(IMAP\\Connection $imap, int $message_num, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-fetchheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns header for a message

## Description

```php
string|false imap_fetchheader(IMAP\Connection $imap, int $message_num, int $flags = 0)
```

This function causes a fetch of the complete, unfiltered [RFC2822](2822) format header of the specified message.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_num`** — The message number
- **`$flags`** — The possible `$flags` are: - `FT_UID` - The `$message_num` argument is a UID - `FT_INTERNAL` - The return string is in "internal" format, without any attempt to canonicalize to CRLF newlines - `FT_PREFETCHTEXT` - The RFC822.TEXT should be pre-fetched at the same time. This avoids an extra RTT on an IMAP connection if a full message text is desired (e.g. in a "save to local file" operation)

## Return Values

Returns the header of the specified message as a text string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_fetch_overview()`
