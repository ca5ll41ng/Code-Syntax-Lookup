---
id: "en-php-function-function-gnupg-decryptverify"
language: "php"
lang: "en"
category: "function"
name: "gnupg_decryptverify"
title: "Decrypts and verifies a given text"
signature: "array|false gnupg_decryptverify(resource $identifier, string $text, string $plaintext)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-decryptverify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrypts and verifies a given text

## Description

```php
array|false gnupg_decryptverify(resource $identifier, string $text, string $plaintext)
```

Decrypts and verifies a given text and returns information about the signature.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$text`** — The text being decrypted.
- **`$plaintext`** — The parameter `$plaintext` gets filled with the decrypted text.

## Return Values

On success, this function returns information about the signature and fills the `$plaintext` parameter with the decrypted text. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_decryptverify()` example**

```php


<?php
$plaintext = "";
$res = gnupg_init();
gnupg_adddecryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
$info = gnupg_decryptverify($res,$text,$plaintext);
print_r($info);
?>

    
```

**OO `gnupg_decryptverify()` example**

```php


<?php
$plaintext = "";
$gpg = new gnupg();
$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
$info = $gpg->decryptverify($text,$plaintext);
print_r($info);
?>

    
```
