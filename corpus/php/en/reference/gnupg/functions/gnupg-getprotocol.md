---
id: "en-php-function-function-gnupg-getprotocol"
language: "php"
lang: "en"
category: "function"
name: "gnupg_getprotocol"
title: "Returns the currently active protocol for all operations"
signature: "int gnupg_getprotocol(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-getprotocol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the currently active protocol for all operations

## Description

```php
int gnupg_getprotocol(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns the currently active protocol, which can be one of `GNUPG_PROTOCOL_OpenPGP` or `GNUPG_PROTOCOL_CMS`.

## Examples

**Procedural `gnupg_getprotocol()` example**

```php


<?php
$res = gnupg_init();
echo gnupg_getprotocol($res);
?>

    
```

**OO `gnupg_getprotocol()` example**

```php


<?php
$gpg = new gnupg();
echo $gpg->getprotocol();
?>

    
```
