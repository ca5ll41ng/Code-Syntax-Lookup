---
id: "en-php-function-function-imap-body"
language: "php"
lang: "en"
category: "function"
name: "imap_body"
title: "Read the message body"
signature: "string|false imap_body(IMAP\\Connection $imap, int $message_num, int $flags = 0)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-body.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read the message body

## Description

```php
string|false imap_body(IMAP\Connection $imap, int $message_num, int $flags = 0)
```

`imap_body()` returns the body of the message, numbered `$message_num` in the current mailbox.

`imap_body()` will only return a verbatim copy of the message body. To extract single parts of a multipart MIME-encoded message you have to use `imap_fetchstructure()` to analyze its structure and `imap_fetchbody()` to extract a copy of a single body component.

## Parameters

- **`$imap`** — An `IMAP\Connection` instance.
- **`$message_num`** — The message number
- **`$flags`** — The optional `$flags` are a bit mask with one or more of the following: - `FT_UID` - The `$message_num` is a UID - `FT_PEEK` - Do not set the \Seen flag if not already set - `FT_INTERNAL` - The return string is in internal format, will not canonicalize to CRLF.

## Return Values

Returns the body of the specified message, as a string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$imap` parameter expects an `IMAP\Connection` instance now; previously, a valid `imap` `resource` was expected. |
