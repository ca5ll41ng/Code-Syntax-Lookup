---
id: "en-php-function-function-rnp-key-export-revocation"
language: "php"
lang: "en"
category: "function"
name: "rnp_key_export_revocation"
title: "Generate and export primary key revocation signature"
signature: "string|false rnp_key_export_revocation(RnpFFI $ffi, string $key_fp, int $flags, [array $options = ...])"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-key-export-revocation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate and export primary key revocation signature

## Description

```php
string|false rnp_key_export_revocation(RnpFFI $ffi, string $key_fp, int $flags, [array $options = ...])
```

Note: to revoke a key you'll need to import this signature into the keystore or use `rnp_key_revoke()` function.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$key_fp`** — Key fingerprint of the primary key to be revoked.
- **`$flags`** — `RNP_KEY_EXPORT_ARMORED` or 0.
- **`$options`** — An associative array with options.
  | Key | Data type |  |
  | --- | --- | --- |
  | `"hash"` | string | Set hash algorithm used during signature calculation. |
  | `"code"` | string | Code reason for revocation code. Possible values: 'no', 'superseded', 'compromised', 'retired'. If not defined, then value 'no' will be used by default. |
  | `"reason"` | string | Textual representation of the reason for revocation. |



## Return Values

Exported revocation signature on success or `false` on failure.
