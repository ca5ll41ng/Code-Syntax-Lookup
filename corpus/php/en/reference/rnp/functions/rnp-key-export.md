---
id: "en-php-function-function-rnp-key-export"
language: "php"
lang: "en"
category: "function"
name: "rnp_key_export"
title: "Export a key"
signature: "string|false rnp_key_export(RnpFFI $ffi, string $key_fp, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-key-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export a key

## Description

```php
string|false rnp_key_export(RnpFFI $ffi, string $key_fp, int $flags)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$key_fp`** — Key fingerprint.
- **`$flags`** — See `RNP_KEY_EXPORT_{*}` predefined constants (except `RNP_KEY_EXPORT_BASE64`).

## Return Values

OpenPGP packets of exported key (binary or ASCII-armored) on success or `false` on failure.
