---
id: "en-php-function-function-gnupg-import"
language: "php"
lang: "en"
category: "function"
name: "gnupg_import"
title: "Imports a key"
signature: "array|false gnupg_import(resource $identifier, string $keydata)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Imports a key

## Description

```php
array|false gnupg_import(resource $identifier, string $keydata)
```

Imports the key `$keydata` and returns an array with information about the importprocess.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$keydata`** — The data key that is being imported.

## Return Values

On success, this function returns and info-array about the importprocess. On failure, this function returns `false`.

## Examples

**Procedural `gnupg_import()` example**

```php


<?php
$res = gnupg_init();
$info = gnupg_import($res,$keydata);
print_r($info);
?>

    
```

**OO `gnupg_import()` example**

```php


<?php
$gpg = new gnupg();
$info = $gpg->import($keydata);
print_r($info);
?>

    
```
