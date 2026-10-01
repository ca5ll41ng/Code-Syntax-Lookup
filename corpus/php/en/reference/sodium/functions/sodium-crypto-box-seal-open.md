---
id: "en-php-function-function-sodium-crypto-box-seal-open"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_box_seal_open"
title: "Anonymous public-key decryption"
signature: "string|false sodium_crypto_box_seal_open(string $ciphertext, string $key_pair)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-box-seal-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Anonymous public-key decryption

## Description

```php
string|false sodium_crypto_box_seal_open(string $ciphertext, string $key_pair)
```

Decrypt a message that was encrypted with `sodium_crypto_box_seal()`

## Parameters

- **`$ciphertext`** — The encrypted message
- **`$key_pair`** — The keypair of the recipient. Must include the secret key.

## Return Values

The plaintext on success, or `false` on failure.

## Examples

 {{{ 

**`sodium_crypto_box_seal_open()` example**

 {{{ 

```php


<?php
// Ciphertext is not sensitive; base64_decode is fine
$sealed_b64 = "oRBXXAV4iQBrxlV4A21Bord8Yo/D8ZlrIIGNyaRCcGBfpz0map52I3xq6l+CST+1NSgQkbV+HiYyFjXWiWiaCGupGf+zl4bgWj/A9Adtem7Jt3h3emrMsLw=";
$sealed = base64_decode($sealed_b64);

// Keypair contains a cryptographic secret; use a timing-safe decoder
$keypair_b64 = "KZkF8wnB7bnC2aXB3lFOqCTc0Z6MllvaQb9ASVG8o2/MsewkuE4u1uaEgTzSakeiYyIW8DGj+02/L3cWIbs9bQ==";
$keypair = sodium_base642bin($keypair_b64, SODIUM_BASE64_VARIANT_ORIGINAL);

$opened = sodium_crypto_box_seal_open($sealed, $keypair);
var_dump($opened);
?>

   
```

The above example will output something similar to:

```text


string(41) "Writing software in PHP can be a delight!"

   
```

 }}} 

 }}}
