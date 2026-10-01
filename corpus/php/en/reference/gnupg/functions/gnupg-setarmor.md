---
id: "en-php-function-function-gnupg-setarmor"
language: "php"
lang: "en"
category: "function"
name: "gnupg_setarmor"
title: "Toggle armored output"
signature: "bool gnupg_setarmor(resource $identifier, int $armor)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-setarmor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Toggle armored output

## Description

```php
bool gnupg_setarmor(resource $identifier, int $armor)
```

Toggle the armored output.

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$armor`** — Pass a non-zero integer-value to this function to enable armored-output (default). Pass 0 to disable armored output.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_setarmor()` example**

```php


<?php
$res = gnupg_init();
gnupg_setarmor($res,1); // enable armored output;
gnupg_setarmor($res,0); // disable armored output;
?>

    
```

**OO `gnupg_setarmor()` example**

```php


<?php
$gpg = new gnupg();
$gpg->setarmor(1); // enable armored output;
$gpg->setarmor(0); // disable armored output;
?>

    
```
