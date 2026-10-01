---
id: "en-php-function-function-sodium-crypto-secretbox"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_secretbox"
title: "Authenticated shared-key encryption"
signature: "string sodium_crypto_secretbox(string $message, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-secretbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticated shared-key encryption

## Description

```php
string sodium_crypto_secretbox(string $message, string $nonce, string $key)
```

Encrypt a message with a symmetric (shared) key.

## Parameters

- **`$message`** — The plaintext message to encrypt.
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key`** — Encryption key (256-bit).

## Return Values

Returns the encrypted string.

## Errors/Exceptions

- If `$nonce` has a length of bytes different than `SODIUM_CRYPTO_SECRETBOX_NONCEBYTES` (24 bytes), a `SodiumException` will be thrown.
- If `$key` has a length of bytes different than `SODIUM_CRYPTO_SECRETBOX_KEYBYTES` (32 bytes), a `SodiumException` will be thrown.
- Throws a `SodiumException` on failure.

## Examples

**`sodium_crypto_secretbox()` example**

```php


<?php
// The $key must be kept confidential
$key = sodium_crypto_secretbox_keygen();
// Do not reuse $nonce with the same key
$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
$plaintext = "message to be encrypted";
$ciphertext = sodium_crypto_secretbox($plaintext, $nonce, $key);

var_dump(bin2hex($ciphertext));
// The same nonce and key are required to decrypt the $ciphertext
var_dump(sodium_crypto_secretbox_open($ciphertext, $nonce, $key));
?>

   
```

The above example will output something similar to:

```text


string(78) "3a1fa3e9f7b72ef8be51d40abf8e296c6899c185d07b18b4c93e7f26aa776d24c50852cd6b1076"
string(23) "message to be encrypted"

   
```

## See Also

 `sodium_crypto_secretbox_open()` `sodium_crypto_secretbox_keygen()` `random_bytes()`
