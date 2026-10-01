---
id: "en-php-function-function-gnupg-deletekey"
language: "php"
lang: "en"
category: "function"
name: "gnupg_deletekey"
title: "Delete a key from the keyring"
signature: "bool gnupg_deletekey(resource $identifier, string $key, bool $allow_secret)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-deletekey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a key from the keyring

## Description

```php
bool gnupg_deletekey(resource $identifier, string $key, bool $allow_secret)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$key`** — The key to delete.
- **`$allow_secret`** — It specifies whether to delete secret keys as well.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Procedural `gnupg_deletekey()` example**

```php


<?php
$res = gnupg_init();
gnupg_deletekey($res, "8660281B6051D071D94B5B230549F9DC851566DC");
?>

    
```

**OO `gnupg_deletekey()` example**

```php


<?php
$gpg = new gnupg();
$gpg->deletekey("8660281B6051D071D94B5B230549F9DC851566DC");
?>

    
```
