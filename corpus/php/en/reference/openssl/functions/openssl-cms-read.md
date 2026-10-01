---
id: "en-php-function-function-openssl-cms-read"
language: "php"
lang: "en"
category: "function"
name: "openssl_cms_read"
title: "Export the CMS file to an array of PEM certificates"
signature: "bool openssl_cms_read(string $input_filename, array $certificates)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-cms-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export the CMS file to an array of PEM certificates

## Description

```php
bool openssl_cms_read(string $input_filename, array $certificates)
```

Performs the exact analog to `openssl_pkcs7_read()`.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$input_filename`**
- **`$certificates`**

## Return Values

Returns `true` on success or `false` on failure.
