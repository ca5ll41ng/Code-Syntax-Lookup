---
id: "en-php-function-function-imap-fetchmime"
language: "php"
lang: "en"
category: "function"
name: "imap_fetchmime"
title: "Fetch MIME headers for a particular section of the message"
signature: "string|false imap_fetchmime(IMAP\\Connection $imap, int $message_num, string $section, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-fetchmime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch MIME headers for a particular section of the message

## Description

```php
string|false imap_fetchmime(IMAP\Connection $imap, int $message_num, string $section, int $flags = 0)
```

Fetch the MIME headers of a particular section of the body of the specified messages.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_num`** — The message number
- **`$section`** — The part number. It is a string of integers delimited by period which index into a body part list as per the IMAP4 specification
- **`$flags`** — A bitmask with one or more of the following: - `FT_UID` - The `$message_num` is a UID - `FT_PEEK` - Do not set the \Seen flag if not already set - `FT_INTERNAL` - The return string is in internal format, will not canonicalize to CRLF.

## Return Values

Returns the MIME headers of a particular section of the body of the specified messages as a text string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |

## See Also

`imap_fetchbody()` `imap_fetchstructure()` `imap_fetchheader()`
