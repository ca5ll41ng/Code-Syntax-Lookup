---
id: "en-php-function-function-rnp-ffi-create"
language: "php"
lang: "en"
category: "function"
name: "rnp_ffi_create"
title: "Create the top-level object used for interacting with the library"
signature: "RnpFFI|false rnp_ffi_create(string $pub_format, string $sec_format)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-ffi-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create the top-level object used for interacting with the library

## Description

```php
RnpFFI|false rnp_ffi_create(string $pub_format, string $sec_format)
```

## Parameters

- **`$pub_format`** — the format of the public keyring, RNP_KEYSTORE_GPG or other RNP_KEYSTORE_* constant.
- **`$sec_format`** — the format of the secret keyring, RNP_KEYSTORE_GPG or other RNP_KEYSTORE_* constant

## Return Values

Returns `RnpFFI` object on success or `false` on failure.
