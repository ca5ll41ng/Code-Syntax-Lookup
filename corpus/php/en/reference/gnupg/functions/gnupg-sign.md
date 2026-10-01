---
id: "en-php-function-function-gnupg-sign"
language: "php"
lang: "en"
category: "function"
name: "gnupg_sign"
title: "Signs a given text"
signature: "string|false gnupg_sign(resource $identifier, string $plaintext)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Signs a given text

## Description

```php
string|false gnupg_sign(resource $identifier, string $plaintext)
```

Signs the given `$plaintext` with the keys, which were set with gnupg_addsignkey before and returns the signed text or the signature, depending on what was set with gnupg_setsignmode.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$plaintext`** — The plain text being signed.

## Return Values

On success, this function returns the signed text or the signature. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_sign()` example**

```php


<?php
$res = gnupg_init();
gnupg_addsignkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
$signed = gnupg_sign($res, "just a test");
echo $signed;
?>

    
```

**OO `gnupg_sign()` example**

```php


<?php
$gpg = new gnupg();
$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
$signed = $gpg->sign("just a test");
echo $signed;
?>

    
```
