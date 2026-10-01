---
id: "en-php-function-function-gnupg-verify"
language: "php"
lang: "en"
category: "function"
name: "gnupg_verify"
title: "Verifies a signed text"
signature: "array|false gnupg_verify(resource $identifier, string $signed_text, string $signature, [string $plaintext = ...])"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verifies a signed text

## Description

```php
array|false gnupg_verify(resource $identifier, string $signed_text, string $signature, [string $plaintext = ...])
```

Verifies the given `$signed_text` and returns information about the signature.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$signed_text`** — The signed text.
- **`$signature`** — The signature. To verify a clearsigned text, set signature to `false`.
- **`$plaintext`** — The plain text. If this optional parameter is passed, it is filled with the plain text.

## Return Values

On success, this function returns information about the signature. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_verify()` example**

```php


<?php
$plaintext = "";
$res = gnupg_init();
// clearsigned
$info = gnupg_verify($res,$signed_text,false,$plaintext);
print_r($info);
// detached signature
$info = gnupg_verify($res,$signed_text,$signature);
print_r($info);
?>

    
```

**OO `gnupg_verify()` example**

```php


<?php
$plaintext = "";
$gpg = new gnupg();
// clearsigned
$info = $gpg->verify($signed_text,false,$plaintext);
print_r($info);
// detached signature
$info = $gpg->verify($signed_text,$signature);
print_r($info);
?>

    
```
