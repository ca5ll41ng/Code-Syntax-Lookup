---
id: "en-php-function-function-imap-qprint"
language: "php"
lang: "en"
category: "function"
name: "imap_qprint"
title: "Convert a quoted-printable string to an 8 bit string"
signature: "string|false imap_qprint(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-qprint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert a quoted-printable string to an 8 bit string

## Description

```php
string|false imap_qprint(string $string)
```

Convert a quoted-printable string to an 8 bit string according to [RFC2045](2045), section 6.7.

## Parameters

- **`$string`** — A quoted-printable string

## Return Values

Returns an 8 bits string, or `false` on failure.

## See Also

`imap_8bit()`
