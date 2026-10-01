---
id: "en-php-function-function-sodium-crypto-stream"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_stream"
title: "Generate a deterministic sequence of bytes from a seed"
signature: "string sodium_crypto_stream(int $length, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate a deterministic sequence of bytes from a seed

## Description

```php
string sodium_crypto_stream(int $length, string $nonce, string $key)
```

Generate a deterministic sequence of bytes from a seed, using the XSalsa20 stream cipher.

## Parameters

- **`$length`** — The number of bytes to return.
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key`** — Encryption key (256-bit).

## Return Values

String of pseudorandom bytes.
