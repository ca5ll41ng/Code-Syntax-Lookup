---
id: "en-php-function-function-sodium-crypto-generichash"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_generichash"
title: "Get a hash of the message"
signature: "string sodium_crypto_generichash(string $message, string $key = \"\", int $length = SODIUM_CRYPTO_GENERICHASH_BYTES)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-generichash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a hash of the message

## Description

```php
string sodium_crypto_generichash(string $message, string $key = "", int $length = SODIUM_CRYPTO_GENERICHASH_BYTES)
```

Hash a message with BLAKE2b.

## Parameters

- **`$message`** — The message being hashed.
- **`$key`** — (Optional) cryptographic key. This serves the same function as a HMAC key, but it's utilized as a reserved section of the internal BLAKE2 state.
- **`$length`** — Output size.

## Return Values

The cryptographic hash as raw bytes. If a hex-encoded output is desired, the result can be passed to `sodium_bin2hex()`.
