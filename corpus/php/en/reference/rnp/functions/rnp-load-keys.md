---
id: "en-php-function-function-rnp-load-keys"
language: "php"
lang: "en"
category: "function"
name: "rnp_load_keys"
title: "Load keys from PHP string"
signature: "bool rnp_load_keys(RnpFFI $ffi, string $format, string $input, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-load-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load keys from PHP string

## Description

```php
bool rnp_load_keys(RnpFFI $ffi, string $format, string $input, int $flags)
```

Note that for G10, the input must be a directory (which must already exist).

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$format`** — The key format of the data (GPG, KBX, G10).
- **`$input`** — OpenPGP packets containing key(s) to be loaded. Can be either binary or ASCII armored.
- **`$flags`** — See `RNP_LOAD_SAVE_{*}` flags description.

## Return Values

Returns `true` on success or `false` on failure.
