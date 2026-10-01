---
id: "en-php-function-function-rnp-import-signatures"
language: "php"
lang: "en"
category: "function"
name: "rnp_import_signatures"
title: "Import standalone signatures to the keyring and receive JSON describing updated keys"
signature: "string|false rnp_import_signatures(RnpFFI $ffi, string $input, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-import-signatures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Import standalone signatures to the keyring and receive JSON describing updated keys

## Description

```php
string|false rnp_import_signatures(RnpFFI $ffi, string $input, int $flags)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$input`** — OpenPGP packets containing signatures to be imported. Can be either binary or ASCII armored.
- **`$flags`** — Currently must be 0.

## Return Values

JSON string with information about updated keys on success or `false` on failure.
