---
id: "en-php-function-function-sodium-crypto-kdf-derive-from-key"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_kdf_derive_from_key"
title: "Derive a subkey"
signature: "string sodium_crypto_kdf_derive_from_key(int $subkey_length, int $subkey_id, string $context, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-kdf-derive-from-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Derive a subkey

## Description

```php
string sodium_crypto_kdf_derive_from_key(int $subkey_length, int $subkey_id, string $context, string $key)
```

Derive a subkey from a root key and additional context.

Similar to `hash_hkdf()`.

## Parameters

- **`$subkey_length`** — Length of the key to return (in bytes)
- **`$subkey_id`** — Return the Nth subkey from a given root key. Useful for seeking.
- **`$context`** — Application-specific context.
- **`$key`** — The root key from which the subkey is derived.

## Return Values

A string of pseudorandom (raw binary) bytes.
