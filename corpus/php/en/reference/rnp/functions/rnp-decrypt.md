---
id: "en-php-function-function-rnp-decrypt"
language: "php"
lang: "en"
category: "function"
name: "rnp_decrypt"
title: "Decrypt PGP message"
signature: "string|false rnp_decrypt(RnpFFI $ffi, string $input)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrypt PGP message

## Description

```php
string|false rnp_decrypt(RnpFFI $ffi, string $input)
```

Private keys used for decryption should be loaded into the FFI object before calling this function. If password encryption was used, then password provider should be set by calling `rnp_ffi_set_pass_provider()`.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$input`** — Encrypted message.

## Return Values

Decrypted message on success or `false` on failure.
