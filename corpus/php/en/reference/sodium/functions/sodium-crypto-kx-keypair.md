---
id: "en-php-function-function-sodium-crypto-kx-keypair"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_kx_keypair"
title: "Creates a new sodium keypair"
signature: "string sodium_crypto_kx_keypair()"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-kx-keypair.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new sodium keypair

## Description

```php
string sodium_crypto_kx_keypair()
```

Create a new sodium keypair consisting of the secret key (32 bytes) followed by the public key (32 bytes). The keys can be retrieved by calling `sodium_crypto_kx_secretkey()` and `sodium_crypto_kx_publickey()`, respectively.

## Parameters

This function has no parameters.

## Return Values

Returns the new keypair on success; throws an exception otherwise.

## Examples

**`sodium_crypto_kx_keypair()` usage**

Create a new keypair and retrieve the secret and the public key from it.

```php


<?php
$keypair = sodium_crypto_kx_keypair();
$secret = sodium_crypto_kx_secretkey($keypair);
$public = sodium_crypto_kx_publickey($keypair);
printf("secret: %s\npublic: %s", sodium_bin2hex($secret), sodium_bin2hex($public));
?>

   
```

The above example will output something similar to:

```text


secret: e7c5c918fdc40762e6000542c0118f4368ce8fd242b0e48c1e17202797a25daf
public: d1f59fda8652caf40ed1a01d2b6f3802b60846986372cd8fa337b7c12c428b18

   
```
