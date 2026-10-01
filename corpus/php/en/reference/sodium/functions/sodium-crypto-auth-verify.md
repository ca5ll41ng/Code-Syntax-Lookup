---
id: "en-php-function-function-sodium-crypto-auth-verify"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_auth_verify"
title: "Verifies that the tag is valid for the message"
signature: "bool sodium_crypto_auth_verify(string $mac, string $message, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-auth-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verifies that the tag is valid for the message

## Description

```php
bool sodium_crypto_auth_verify(string $mac, string $message, string $key)
```

Verify the authentication tag is valid for a given message and key.

Unlike with digital signatures (e.g. `sodium_crypto_sign_verify_detached()`), any party capable of verifying a message is also capable of authenticating their own messages. (Hence, symmetric authentication.)

## Parameters

- **`$mac`** — Authentication tag produced by `sodium_crypto_auth()`
- **`$message`** — Message
- **`$key`** — Authentication key

## Return Values

Returns `true` on success or `false` on failure.
