---
id: "en-php-function-function-gnupg-encrypt"
language: "php"
lang: "en"
category: "function"
name: "gnupg_encrypt"
title: "Encrypts a given text"
signature: "string|false gnupg_encrypt(resource $identifier, string $plaintext)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypts a given text

## Description

```php
string|false gnupg_encrypt(resource $identifier, string $plaintext)
```

Encrypts the given `$plaintext` with the keys, which were set with gnupg_addencryptkey before and returns the encrypted text.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$plaintext`** — The text being encrypted.

## Return Values

On success, this function returns the encrypted text. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_encrypt()` example**

```php


<?php
$res = gnupg_init();
gnupg_addencryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC");
$enc = gnupg_encrypt($res, "just a test");
echo $enc;
?>

    
```

**OO `gnupg_encrypt()` example**

```php


<?php
$gpg = new gnupg();
$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");
$enc = $gpg->encrypt("just a test");
echo $enc;
?>

    
```
