---
id: "en-php-function-function-gnupg-encryptsign"
language: "php"
lang: "en"
category: "function"
name: "gnupg_encryptsign"
title: "Encrypts and signs a given text"
signature: "string|false gnupg_encryptsign(resource $identifier, string $plaintext)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-encryptsign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypts and signs a given text

## Description

```php
string|false gnupg_encryptsign(resource $identifier, string $plaintext)
```

Encrypts and signs the given `$plaintext` with the keys, which were set with gnupg_addsignkey and gnupg_addencryptkey before and returns the encrypted and signed text.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$plaintext`** — The text being encrypted.

## Return Values

On success, this function returns the encrypted and signed text. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_encryptsign()` example**

```php


<?php
$res = gnupg_init();
gnupg_addencryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC");
gnupg_addsignkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
$enc = gnupg_encryptsign($res, "just a test");
echo $enc;
?>

    
```

**OO `gnupg_encryptsign()` example**

```php


<?php
$gpg = new gnupg();
$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");
$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
$enc = $gpg->encryptsign("just a test");
echo $enc;
?>

    
```
