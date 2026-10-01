---
id: "en-php-function-function-imap-utf7-encode"
language: "php"
lang: "en"
category: "function"
name: "imap_utf7_encode"
title: "Converts ISO-8859-1 string to modified UTF-7 text"
signature: "string imap_utf7_encode(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-utf7-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts ISO-8859-1 string to modified UTF-7 text

## Description

```php
string imap_utf7_encode(string $string)
```

Converts `$string` to modified UTF-7 text.

This is needed to encode mailbox names that contain certain characters which are not in range of printable ASCII characters.

## Parameters

- **`$string`** — An ISO-8859-1 string.

## Return Values

Returns `$string` encoded with the modified UTF-7 encoding as defined in [RFC 2060](2060), section 5.1.3.

## See Also

`imap_utf7_decode()`
