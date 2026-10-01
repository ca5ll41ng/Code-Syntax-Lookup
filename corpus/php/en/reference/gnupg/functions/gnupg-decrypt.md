---
id: "en-php-function-function-gnupg-decrypt"
language: "php"
lang: "en"
category: "function"
name: "gnupg_decrypt"
title: "Decrypts a given text"
signature: "string|false gnupg_decrypt(resource $identifier, string $text)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrypts a given text

## Description

```php
string|false gnupg_decrypt(resource $identifier, string $text)
```

Decrypts the given text with the keys, which were set with gnupg_adddecryptkey before.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$text`** — The text being decrypted.

## Return Values

On success, this function returns the decrypted text. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_decrypt()` example**

```php


<?php
$res = gnupg_init();
gnupg_adddecryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
$plain = gnupg_decrypt($res,$encrypted_text);
echo $plain;
?>

    
```

**OO `gnupg_decrypt()` example**

```php


<?php
$gpg = new gnupg();
$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
$plain = $gpg->decrypt($encrypted_text);
echo $plain;
?>

    
```
