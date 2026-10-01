---
id: "en-php-function-function-gnupg-cleardecryptkeys"
language: "php"
lang: "en"
category: "function"
name: "gnupg_cleardecryptkeys"
title: "Removes all keys which were set for decryption before"
signature: "bool gnupg_cleardecryptkeys(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-cleardecryptkeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all keys which were set for decryption before

## Description

```php
bool gnupg_cleardecryptkeys(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_cleardecryptkeys()` example**

```php


<?php
$res = gnupg_init();
gnupg_cleardecryptkeys($res);
?>

    
```

**OO `gnupg_cleardecryptkeys()` example**

```php


<?php
$gpg = new gnupg();
$gpg->cleardecryptkeys();
?>

    
```
