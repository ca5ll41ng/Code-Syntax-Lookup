---
id: "en-php-function-function-gnupg-gettrustlist"
language: "php"
lang: "en"
category: "function"
name: "gnupg_gettrustlist"
title: "Search the trust items"
signature: "array|null gnupg_gettrustlist(resource $identifier, string $pattern)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-gettrustlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Search the trust items

## Description

```php
array|null gnupg_gettrustlist(resource $identifier, string $pattern)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.
- **`$pattern`** — Expression to limit the list of trust items to only the ones matching the pattern.

## Return Values

On success, this function returns an array of trust items. On failure, this function returns `null`.

## Examples

**Procedural `gnupg_gettrustlist()` example**

```php


<?php
$res = gnupg_init();
$items = gnupg_gettrustlist($res);
print_r($items);
?>

    
```

**OO `gnupg_gettrustlist()` example**

```php


<?php
$gpg = new gnupg();
$items = $gpg->gettrustlist();
print_r($items);
?>

    
```
