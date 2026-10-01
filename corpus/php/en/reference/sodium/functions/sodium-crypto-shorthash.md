---
id: "en-php-function-function-sodium-crypto-shorthash"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_shorthash"
title: "Compute a short hash of a message and key"
signature: "string sodium_crypto_shorthash(string $message, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-shorthash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compute a short hash of a message and key

## Description

```php
string sodium_crypto_shorthash(string $message, string $key)
```

`sodium_crypto_shorthash()` wraps a hash function called SipHash-2-4, which is ideal for implementing hash tables that are not susceptible to hash collision denial of service attacks (Hash-DoS).

SipHash-2-4 isn't a general purpose cryptographic hash function.

## Parameters

- **`$message`** — The message to hash.
- **`$key`** — The hash key.

## Return Values
