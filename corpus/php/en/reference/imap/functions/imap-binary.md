---
id: "en-php-function-function-imap-binary"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "imap_binary"
title: "Convert an 8bit string to a base64 string"
signature: "string|false imap_binary(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-binary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert an 8bit string to a base64 string

## Description

```php
string|false imap_binary(string $string)
```

Convert an 8bit string to a base64 string according to [RFC2045](2045), Section 6.8.

## Parameters

- **`$string`** — The 8bit string

## Return Values

Returns a base64 encoded string, or `false` on failure.

## See Also

`imap_base64()`
