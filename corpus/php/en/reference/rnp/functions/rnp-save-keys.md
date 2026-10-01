---
id: "en-php-function-function-rnp-save-keys"
language: "php"
lang: "en"
category: "function"
name: "rnp_save_keys"
title: "Save keys to PHP string"
signature: "bool rnp_save_keys(RnpFFI $ffi, string $format, string $output, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-save-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save keys to PHP string

## Description

```php
bool rnp_save_keys(RnpFFI $ffi, string $format, string $output, int $flags)
```

Note that for G10, the output must be a directory (which must already exist).

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$format`** — The key format of the data (GPG, KBX, G10).
- **`$output`** — key packets will be saved to the string referenced by `$output`.
- **`$flags`** — See `RNP_LOAD_SAVE_{*}` flags description.

## Return Values

Returns `true` on success or `false` on failure.
