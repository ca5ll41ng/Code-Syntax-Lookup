---
id: "en-php-function-function-rnp-save-keys-to-path"
language: "php"
lang: "en"
category: "function"
name: "rnp_save_keys_to_path"
title: "Save keys to specified path"
signature: "bool rnp_save_keys_to_path(RnpFFI $ffi, string $format, string $output_path, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-save-keys-to-path.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save keys to specified path

## Description

```php
bool rnp_save_keys_to_path(RnpFFI $ffi, string $format, string $output_path, int $flags)
```

Saves keys present in the FFI object (loaded or generated) to the specified file or directory.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$format`** — The key format of the data (GPG, KBX, G10).
- **`$output_path`** — File or directory path where keys should be saved to.
- **`$flags`** — See `RNP_LOAD_SAVE_{*}` flags description.

## Return Values

Returns `true` on success or `false` on failure.
