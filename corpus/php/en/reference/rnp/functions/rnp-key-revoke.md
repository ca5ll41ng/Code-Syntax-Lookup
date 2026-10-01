---
id: "en-php-function-function-rnp-key-revoke"
language: "php"
lang: "en"
category: "function"
name: "rnp_key_revoke"
title: "Revoke a key or subkey by generating and adding revocation signature"
signature: "bool rnp_key_revoke(RnpFFI $ffi, string $key_fp, int $flags, [array $options = ...])"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-key-revoke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Revoke a key or subkey by generating and adding revocation signature

## Description

```php
bool rnp_key_revoke(RnpFFI $ffi, string $key_fp, int $flags, [array $options = ...])
```

Note: you need to call `rnp_save_keys()` to write updated keyring(s) out.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$key_fp`** — Key fingerprint.
- **`$flags`** — Currently must be 0.
- **`$options`** — An associative array with options.
  | Key | Data type |  |
  | --- | --- | --- |
  | `"hash"` | string | Set hash algorithm used during signature calculation. |
  | `"code"` | string | Code reason for revocation code. Possible values: 'no', 'superseded', 'compromised', 'retired'. If not defined, then value 'no' will be used by default. |
  | `"reason"` | string | Textual representation of the reason for revocation. |



## Return Values

Returns `true` on success or `false` on failure.
