---
id: "en-php-function-function-sodium-crypto-secretstream-xchacha20poly1305-rekey"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_secretstream_xchacha20poly1305_rekey"
title: "Explicitly rotate the key in the secretstream state"
signature: "void sodium_crypto_secretstream_xchacha20poly1305_rekey(string $state)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-secretstream-xchacha20poly1305-rekey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Explicitly rotate the key in the secretstream state

## Description

```php
void sodium_crypto_secretstream_xchacha20poly1305_rekey(string $state)
```

Explicitly rotate the key in the secretstream state. Overwrites the value passed in.

## Parameters

- **`$state`** — Secretstream state.

## Return Values

No value is returned.
