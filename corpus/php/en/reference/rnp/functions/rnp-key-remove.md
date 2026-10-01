---
id: "en-php-function-function-rnp-key-remove"
language: "php"
lang: "en"
category: "function"
name: "rnp_key_remove"
title: "Remove a key from keyring(s)"
signature: "bool rnp_key_remove(RnpFFI $ffi, string $key_fp, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-key-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a key from keyring(s)

## Description

```php
bool rnp_key_remove(RnpFFI $ffi, string $key_fp, int $flags)
```

Note: you need to call `rnp_save_keys()` to write updated keyring(s) out.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$key_fp`** — Key fingerprint.
- **`$flags`** — See `RNP_KEY_REMOVE_{*}` constants. Flag `RNP_KEY_REMOVE_SUBKEYS` will work only for the primary key and will remove all of its subkeys as well.

## Return Values

Returns `true` on success or `false` on failure.
