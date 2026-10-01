---
id: "en-php-function-function-imap-8bit"
language: "php"
lang: "en"
category: "function"
name: "imap_8bit"
title: "Convert an 8bit string to a quoted-printable string"
signature: "string|false imap_8bit(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-8bit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert an 8bit string to a quoted-printable string

## Description

```php
string|false imap_8bit(string $string)
```

Convert an 8bit string to a quoted-printable string (according to [RFC2045](2045), section 6.7).

## Parameters

- **`$string`** — The 8bit string to convert

## Return Values

Returns a quoted-printable string, or `false` on failure.

## See Also

`imap_qprint()`
