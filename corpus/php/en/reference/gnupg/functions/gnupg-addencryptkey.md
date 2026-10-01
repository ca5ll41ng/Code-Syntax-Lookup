---
id: "en-php-function-function-gnupg-addencryptkey"
language: "php"
lang: "en"
category: "function"
name: "gnupg_addencryptkey"
title: "Add a key for encryption"
signature: "bool gnupg_addencryptkey(resource $identifier, string $fingerprint)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-addencryptkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a key for encryption

## Description

```php
bool gnupg_addencryptkey(resource $identifier, string $fingerprint)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$fingerprint`** — The fingerprint key.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_addencryptkey()` example**

```php


<?php
$res = gnupg_init();
gnupg_addencryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC");
?>

    
```

**OO `gnupg_addencryptkey()` example**

```php


<?php
$gpg = new gnupg();
$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");
?>

    
```
