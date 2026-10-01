---
id: "en-php-function-function-gnupg-setsignmode"
language: "php"
lang: "en"
category: "function"
name: "gnupg_setsignmode"
title: "Sets the mode for signing"
signature: "bool gnupg_setsignmode(resource $identifier, int $signmode)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-setsignmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the mode for signing

## Description

```php
bool gnupg_setsignmode(resource $identifier, int $signmode)
```

Sets the mode for signing.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$sigmode`** — The mode for signing. — `$signmode` takes a constant indicating what type of signature should be produced. The possible values are `GNUPG_SIG_MODE_NORMAL`, `GNUPG_SIG_MODE_DETACH` and `GNUPG_SIG_MODE_CLEAR`. By default `GNUPG_SIG_MODE_CLEAR` is used.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_setsignmode()` example**

```php


<?php
$res = gnupg_init();
gnupg_setsignmode($res,GNUPG_SIG_MODE_DETACH); // produce a detached signature
?>

    
```

**OO `gnupg_setsignmode()` example**

```php


<?php
$gpg = new gnupg();
$gpg->setsignmode(gnupg::SIG_MODE_DETACH); // produce a detached signature
?>

    
```
