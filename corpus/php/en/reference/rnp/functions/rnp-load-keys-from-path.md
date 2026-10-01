---
id: "en-php-function-function-rnp-load-keys-from-path"
language: "php"
lang: "en"
category: "function"
name: "rnp_load_keys_from_path"
title: "Load keys from specified path"
signature: "bool rnp_load_keys_from_path(RnpFFI $ffi, string $format, string $input_path, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-load-keys-from-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load keys from specified path

## Description

```php
bool rnp_load_keys_from_path(RnpFFI $ffi, string $format, string $input_path, int $flags)
```

Note that for G10, the input must be a directory (which must already exist).

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$format`** — The key format of the data (GPG, KBX, G10).
- **`$input_path`** — file or directory containing the keys.
- **`$flags`** — See `RNP_LOAD_SAVE_{*}` flags description.

## Return Values

Returns `true` on success or `false` on failure.
