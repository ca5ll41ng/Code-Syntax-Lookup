---
id: "en-php-function-function-openssl-cipher-key-length"
language: "php"
lang: "en"
category: "function"
name: "openssl_cipher_key_length"
title: "Gets the cipher key length"
signature: "int|false openssl_cipher_key_length(string $cipher_algo)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-cipher-key-length.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the cipher key length

## Description

```php
int|false openssl_cipher_key_length(string $cipher_algo)
```

Gets the cipher key length.

## Parameters

- **`$cipher_algo`** — The cipher method, see `openssl_get_cipher_methods()` for a list of potential values.

## Return Values

Returns the cipher length on success, or `false` on failure.

## Errors/Exceptions

Emits an `E_WARNING` level error when the cipher algorithm is unknown.

## Examples

**`openssl_cipher_key_length()` example**

```php


<?php
$method = 'AES-128-CBC';

var_dump(openssl_cipher_key_length($method));
?>

   
```

The above example will output something similar to:

```text


int(16)

   
```
