---
id: "en-php-function-function-gnupg-geterror"
language: "php"
lang: "en"
category: "function"
name: "gnupg_geterror"
title: "Returns the errortext, if a function fails"
signature: "string|false gnupg_geterror(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-geterror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the errortext, if a function fails

## Description

```php
string|false gnupg_geterror(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns an errortext, if an error has occurred, otherwise `false`.

## Examples

**Procedural `gnupg_geterror()` example**

```php


<?php
$res = gnupg_init();
echo gnupg_geterror($res);
?>

    
```

**OO `gnupg_geterror()` example**

```php


<?php
$gpg = new gnupg();
echo $gpg->geterror();
?>

    
```
