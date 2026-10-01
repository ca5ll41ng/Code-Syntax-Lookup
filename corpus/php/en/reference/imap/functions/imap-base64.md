---
id: "en-php-function-function-imap-base64"
language: "php"
lang: "en"
category: "function"
name: "imap_base64"
title: "Decode BASE64 encoded text"
signature: "string|false imap_base64(string $string)"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-base64.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decode BASE64 encoded text

## Description

```php
string|false imap_base64(string $string)
```

Decodes the given BASE-64 encoded `$string`.

## Parameters

- **`$string`** — The encoded text

## Return Values

Returns the decoded message as a string, or `false` on failure.

## See Also

`imap_binary()` `base64_encode()` `base64_decode()` [RFC2045](2045), Section 6.8
