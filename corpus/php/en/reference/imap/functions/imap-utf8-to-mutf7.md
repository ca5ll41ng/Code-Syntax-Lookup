---
id: "en-php-function-function-imap-utf8-to-mutf7"
language: "php"
lang: "en"
category: "function"
name: "imap_utf8_to_mutf7"
title: "Encode a UTF-8 string to modified UTF-7"
signature: "string|false imap_utf8_to_mutf7(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-utf8-to-mutf7.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encode a UTF-8 string to modified UTF-7

## Description

```php
string|false imap_utf8_to_mutf7(string $string)
```

Encode a UTF-8 string to modified UTF-7 (as specified in RFC 2060, section 5.1.3).

> This function is only available, if libcclient exports utf8_to_mutf7().

## Parameters

- **`$string`** — A UTF-8 encoded string.

## Return Values

Returns `$string` converted to modified UTF-7, or `false` on failure.

## See Also

 `imap_mutf7_to_utf8()`
