---
id: "en-php-function-function-sodium-crypto-sign-open"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_sign_open"
title: "Check that the signed message has a valid signature"
signature: "string|false sodium_crypto_sign_open(string $signed_message, string $public_key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-sign-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check that the signed message has a valid signature

## Description

```php
string|false sodium_crypto_sign_open(string $signed_message, string $public_key)
```

Verify the signature attached to a message and return the message

## Parameters

- **`$signed_message`** — A message signed with `sodium_crypto_sign()`
- **`$public_key`** — An Ed25519 public key

## Return Values

Returns the original signed message on success, or `false` on failure.
