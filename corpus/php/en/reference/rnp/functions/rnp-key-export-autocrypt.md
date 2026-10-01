---
id: "en-php-function-function-rnp-key-export-autocrypt"
language: "php"
lang: "en"
category: "function"
name: "rnp_key_export_autocrypt"
title: "Export minimal key for autocrypt feature (just 5 packets: key, uid, signature, encryption subkey, signature)"
signature: "string|false rnp_key_export_autocrypt(RnpFFI $ffi, string $key_fp, string $subkey_fp, string $uid, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-key-export-autocrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export minimal key for autocrypt feature (just 5 packets: key, uid, signature, encryption subkey, signature)

## Description

```php
string|false rnp_key_export_autocrypt(RnpFFI $ffi, string $key_fp, string $subkey_fp, string $uid, int $flags)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$key_fp`** — Primary key fingerprint.
- **`$subkey_fp`** — Subkey to export. Can be an empty string to pick the first suitable subkey.
- **`$uid`** — User ID to export. Can be an empty string if exported key has only one uid.
- **`$flags`** — Only `RNP_KEY_EXPORT_BASE64` is currently supported. Enabling it would export base64-encoded key data instead of binary.

## Return Values

OpenPGP packets of exported key on success or `false` on failure.
