---
id: "en-php-function-function-sodium-crypto-auth"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_auth"
title: "Compute a tag for the message"
signature: "string sodium_crypto_auth(string $message, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-auth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compute a tag for the message

## Description

```php
string sodium_crypto_auth(string $message, string $key)
```

Symmetric message authentication via `sodium_crypto_auth()` provides integrity, but not confidentiality.

Unlike with digital signatures (e.g. `sodium_crypto_sign_detached()`), any party capable of verifying a message is also capable of authenticating their own messages. (Hence, symmetric authentication.)

## Parameters

- **`$message`** — The message you intend to authenticate
- **`$key`** — Authentication key

## Return Values

Authentication tag
