---
id: "en-php-function-function-imap-mutf7-to-utf8"
language: "php"
lang: "en"
category: "function"
name: "imap_mutf7_to_utf8"
title: "Decode a modified UTF-7 string to UTF-8"
signature: "string|false imap_mutf7_to_utf8(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-mutf7-to-utf8.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decode a modified UTF-7 string to UTF-8

## Description

```php
string|false imap_mutf7_to_utf8(string $string)
```

Decode a modified UTF-7 (as specified in RFC 2060, section 5.1.3) string to UTF-8.

> This function is only available, if libcclient exports utf8_to_mutf7().

## Parameters

- **`$string`** — A string encoded in modified UTF-7.

## Return Values

Returns `$string` converted to UTF-8, or `false` on failure.

## See Also

 `imap_utf8_to_mutf7()`
