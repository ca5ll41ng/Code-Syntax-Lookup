---
id: "en-php-function-function-sodium-crypto-stream-xchacha20"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_stream_xchacha20"
title: "Expands the key and nonce into a keystream of pseudorandom bytes"
signature: "string sodium_crypto_stream_xchacha20(int $length, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-stream-xchacha20.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Expands the key and nonce into a keystream of pseudorandom bytes

## Description

```php
string sodium_crypto_stream_xchacha20(int $length, string $nonce, string $key)
```

Expands the `$key` and `$nonce` into a keystream of pseudorandom bytes.

## Parameters

- **`$length`** — Number of bytes desired.
- **`$nonce`** — 24-byte nonce.
- **`$key`** — Key, possibly generated from `sodium_crypto_stream_xchacha20_keygen()`.

## Return Values

Returns a pseudorandom stream that can be used with `sodium_crypto_stream_xchacha20_xor()`.
