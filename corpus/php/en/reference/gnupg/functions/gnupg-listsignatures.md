---
id: "en-php-function-function-gnupg-listsignatures"
language: "php"
lang: "en"
category: "function"
name: "gnupg_listsignatures"
title: "List key signatures"
signature: "array|null gnupg_listsignatures(resource $identifier, string $keyid)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-listsignatures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# List key signatures

## Description

```php
array|null gnupg_listsignatures(resource $identifier, string $keyid)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$keyid`** — The key ID to list signatures for.

## Return Values

On success, this function returns an array of key signatures. On failure, this function returns `null`.

## Examples

**Procedural `gnupg_listsignatures()` example**

```php


<?php
$res = gnupg_init();
$signatures = gnupg_listsignatures($res, "8660281B6051D071D94B5B230549F9DC851566DC");
print_r($signatures);
?>

    
```

**OO `gnupg_listsignatures()` example**

```php


<?php
$gpg = new gnupg();
$signatures = $gpg->listsignatures("8660281B6051D071D94B5B230549F9DC851566DC");
print_r($signatures);
?>

    
```
