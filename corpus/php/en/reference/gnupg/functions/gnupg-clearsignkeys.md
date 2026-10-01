---
id: "en-php-function-function-gnupg-clearsignkeys"
language: "php"
lang: "en"
category: "function"
name: "gnupg_clearsignkeys"
title: "Removes all keys which were set for signing before"
signature: "bool gnupg_clearsignkeys(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-clearsignkeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all keys which were set for signing before

## Description

```php
bool gnupg_clearsignkeys(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_clearsignkeys()` example**

```php


<?php
$res = gnupg_init();
gnupg_clearsignkeys($res);
?>

    
```

**OO `gnupg_clearsignkeys()` example**

```php


<?php
$gpg = new gnupg();
$gpg->clearsignkeys();
?>

    
```
