---
id: "en-php-function-function-gnupg-addsignkey"
language: "php"
lang: "en"
category: "function"
name: "gnupg_addsignkey"
title: "Add a key for signing"
signature: "bool gnupg_addsignkey(resource $identifier, string $fingerprint, [string $passphrase = ...])"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-addsignkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a key for signing

## Description

```php
bool gnupg_addsignkey(resource $identifier, string $fingerprint, [string $passphrase = ...])
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$fingerprint`** — The fingerprint key.
- **`$passphrase`** — The pass phrase.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_addsignkey()` example**

```php


<?php
$res = gnupg_init();
gnupg_addsignkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
?>

    
```

**OO `gnupg_addsignkey()` example**

```php


<?php
$gpg = new gnupg();
$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
?>

    
```
