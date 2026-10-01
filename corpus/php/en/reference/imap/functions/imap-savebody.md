---
id: "en-php-function-function-imap-savebody"
language: "php"
lang: "en"
category: "function"
name: "imap_savebody"
title: "Save a specific body section to a file"
signature: "bool imap_savebody(IMAP\\Connection $imap, resource|string|int $file, int $message_num, string $section = \"\", int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-savebody.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save a specific body section to a file

## Description

```php
bool imap_savebody(IMAP\Connection $imap, resource|string|int $file, int $message_num, string $section = "", int $flags = 0)
```

Saves a part or the whole body of the specified message.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$file`** — The path to the saved file as a string, or a valid file descriptor returned by `fopen()`.
- **`$message_num`** — The message number
- **`$section`** — The part number. It is a string of integers delimited by period which index into a body part list as per the IMAP4 specification
- **`$flags`** — A bitmask with one or more of the following: - `FT_UID` - The `$message_num` is a UID - `FT_PEEK` - Do not set the \Seen flag if not already set - `FT_INTERNAL` - The return string is in internal format, will not canonicalize to CRLF.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_fetchbody()`
