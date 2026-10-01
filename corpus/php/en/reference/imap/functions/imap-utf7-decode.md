---
id: "en-php-function-function-imap-utf7-decode"
language: "php"
lang: "en"
category: "function"
name: "imap_utf7_decode"
title: "Decodes a modified UTF-7 encoded string"
signature: "string|false imap_utf7_decode(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-utf7-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decodes a modified UTF-7 encoded string

## Description

```php
string|false imap_utf7_decode(string $string)
```

Decodes modified UTF-7 `$string` into ISO-8859-1 string.

This function is needed to decode mailbox names that contain certain characters which are not in range of printable ASCII characters.

## Parameters

- **`$string`** — A modified UTF-7 encoding string, as defined in [RFC 2060](2060), section 5.1.3.

## Return Values

Returns a string that is encoded in ISO-8859-1 and consists of the same sequence of characters in `$string`, or `false` if `$string` contains invalid modified UTF-7 sequence or `$string` contains a character that is not part of ISO-8859-1 character set.

## See Also

`imap_utf7_encode()`
