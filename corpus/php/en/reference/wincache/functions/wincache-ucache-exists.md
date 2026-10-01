---
id: "en-php-function-function-wincache-ucache-exists"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_exists"
title: "Checks if a variable exists in the user cache"
signature: "bool wincache_ucache_exists(string $key)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a variable exists in the user cache

## Description

```php
bool wincache_ucache_exists(string $key)
```

Checks if a variable with the `$key` exists in the user cache or not.

## Parameters

- **`$key`** — The `$key` that was used to store the variable in the cache. `$key` is case sensitive.

## Return Values

Returns `true` if variable with the `$key` exitsts, otherwise returns `false`.

## Examples

**Using `wincache_ucache_exists()`**

```php


<?php
if (!wincache_ucache_exists('green'))
    wincache_ucache_set('green', 1);
var_dump(wincache_ucache_exists('green'));
?>

    
```

The above example will output:

```text


bool(true)

    
```

## See Also

`wincache_ucache_set()` `wincache_ucache_add()` `wincache_ucache_get()` `wincache_ucache_clear()` `wincache_ucache_delete()` `wincache_ucache_meminfo()` `wincache_ucache_info()`
