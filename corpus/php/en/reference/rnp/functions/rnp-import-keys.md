---
id: "en-php-function-function-rnp-import-keys"
language: "php"
lang: "en"
category: "function"
name: "rnp_import_keys"
title: "Import keys from PHP string to the keyring and receive JSON describing new/updated keys"
signature: "string|false rnp_import_keys(RnpFFI $ffi, string $input, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-import-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Import keys from PHP string to the keyring and receive JSON describing new/updated keys

## Description

```php
string|false rnp_import_keys(RnpFFI $ffi, string $input, int $flags)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$input`** — OpenPGP packets containing key(s) to be loaded. Can be either binary or ASCII armored.
- **`$flags`** — See `RNP_LOAD_SAVE_{*}` predefined constants.

## Return Values

JSON string with information about new and updated keys on success or `false` on failure.
