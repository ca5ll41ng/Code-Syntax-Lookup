---
id: "en-php-function-function-gnupg-keyinfo"
language: "php"
lang: "en"
category: "function"
name: "gnupg_keyinfo"
title: "Returns an array with information about all keys that matches the given pattern"
signature: "array|false gnupg_keyinfo(resource $identifier, string $pattern)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-keyinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array with information about all keys that matches the given pattern

## Description

```php
array|false gnupg_keyinfo(resource $identifier, string $pattern)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$pattern`** — The pattern being checked against the keys.

## Return Values

Returns an array with information about all keys that matches the given pattern or `false`, if an error has occurred.

## Examples

**Procedural `gnupg_keyinfo()` example**

```php


<?php
$res = gnupg_init();
$info = gnupg_keyinfo($res, 'test');
print_r($info);
?>

    
```

**OO `gnupg_keyinfo()` example**

```php


<?php
$gpg = new gnupg();
$info = $gpg->keyinfo("test");
print_r($info);
?>

    
```
