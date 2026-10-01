---
id: "en-php-function-function-gnupg-clearencryptkeys"
language: "php"
lang: "en"
category: "function"
name: "gnupg_clearencryptkeys"
title: "Removes all keys which were set for encryption before"
signature: "bool gnupg_clearencryptkeys(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-clearencryptkeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all keys which were set for encryption before

## Description

```php
bool gnupg_clearencryptkeys(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_clearencryptkeys()` example**

```php


<?php
$res = gnupg_init();
gnupg_clearencryptkeys($res);
?>

    
```

**OO `gnupg_clearencryptkeys()` example**

```php


<?php
$gpg = new gnupg();
$gpg->clearencryptkeys();
?>

    
```
