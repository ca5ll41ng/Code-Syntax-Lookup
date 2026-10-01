---
id: "en-php-function-function-sodium-crypto-secretbox-open"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_secretbox_open"
title: "Authenticated shared-key decryption"
signature: "string|false sodium_crypto_secretbox_open(string $ciphertext, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-secretbox-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticated shared-key decryption

## Description

```php
string|false sodium_crypto_secretbox_open(string $ciphertext, string $nonce, string $key)
```

Decrypt an encrypted message with a symmetric (shared) key.

## Parameters

- **`$ciphertext`** — Must be in the format provided by `sodium_crypto_secretbox()` (ciphertext and tag, concatenated).
- **`$nonce`** — A number that must be only used once, per message. 24 bytes long. This is a large enough bound to generate randomly (i.e. `random_bytes()`).
- **`$key`** — Encryption key (256-bit).

## Return Values

The decrypted string on success or `false` on failure.

## Errors/Exceptions

- If `$nonce` has a length of bytes different than `SODIUM_CRYPTO_SECRETBOX_NONCEBYTES` (24 bytes), a `SodiumException` will be thrown.
- If `$key` has a length of bytes different than `SODIUM_CRYPTO_SECRETBOX_KEYBYTES` (32 bytes), a `SodiumException` will be thrown.

## Examples

**`sodium_crypto_secretbox_open()` example**

```php


<?php
// The $key must be kept confidential
$key = random_bytes(SODIUM_CRYPTO_SECRETBOX_KEYBYTES);
// Do not reuse $nonce with the same key
$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
$ciphertext = sodium_crypto_secretbox('message to be encrypted', $nonce, $key);

// The same nonce and key are required to decrypt the $ciphertext
$plaintext = sodium_crypto_secretbox_open($ciphertext, $nonce, $key);
if ($plaintext !== false) {
    echo $plaintext . PHP_EOL;
}
?>

   
```

The above example will output:

```text


message to be encrypted

   
```

## See Also

 `sodium_crypto_secretbox()` `sodium_crypto_secretbox_keygen()` `random_bytes()`
