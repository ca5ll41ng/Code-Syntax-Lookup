---
id: "en-php-function-function-rnp-list-keys"
language: "php"
lang: "en"
category: "function"
name: "rnp_list_keys"
title: "Enumerate all keys present in a keyring by specified identifer type"
signature: "array|false rnp_list_keys(RnpFFI $ffi, string $identifier_type)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-list-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enumerate all keys present in a keyring by specified identifer type

## Description

```php
array|false rnp_list_keys(RnpFFI $ffi, string $identifier_type)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$identifier_type`** — Key identifier type ("userid", "keyid", "grip", "fingerprint").

## Return Values

An associative array where key is an identifier string and value is a PGP key fingerprint or `false` on failure.
