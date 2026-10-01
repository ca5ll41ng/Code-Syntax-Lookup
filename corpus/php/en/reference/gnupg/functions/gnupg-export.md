---
id: "en-php-function-function-gnupg-export"
language: "php"
lang: "en"
category: "function"
name: "gnupg_export"
title: "Exports a key"
signature: "string|false gnupg_export(resource $identifier, string $fingerprint)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exports a key

## Description

```php
string|false gnupg_export(resource $identifier, string $fingerprint)
```

Exports the key `$fingerprint`.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$fingerprint`** — The fingerprint key.

## Return Values

On success, this function returns the keydata. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_export()` example**

```php


<?php
$res = gnupg_init();
$export = gnupg_export($res,"8660281B6051D071D94B5B230549F9DC851566DC");
echo $export;
?>

    
```

**OO `gnupg_export()` example**

```php


<?php
$gpg = new gnupg();
$export = $gpg->export("8660281B6051D071D94B5B230549F9DC851566DC");
?>

    
```
