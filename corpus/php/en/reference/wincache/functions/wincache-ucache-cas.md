---
id: "en-php-function-function-wincache-ucache-cas"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_cas"
title: "Compares the variable with old value and assigns new value to it"
signature: "bool wincache_ucache_cas(string $key, int $old_value, int $new_value)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-cas.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares the variable with old value and assigns new value to it

## Description

```php
bool wincache_ucache_cas(string $key, int $old_value, int $new_value)
```

Compares the variable associated with the `$key` with `$old_value` and if it matches then assigns the `$new_value` to it.

## Parameters

- **`$key`** — The `$key` that is used to store the variable in the cache. `$key` is case sensitive.
- **`$old_value`** — Old value of the variable pointed by `$key` in the user cache. The value should be of type `long`, otherwise the function returns `false`.
- **`$new_value`** — New value which will get assigned to variable pointer by `$key` if a match is found. The value should be of type `long`, otherwise the function returns `false`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Using `wincache_ucache_cas()`**

```php


<?php
wincache_ucache_set('counter', 2922);
var_dump(wincache_ucache_cas('counter', 2922, 1));
var_dump(wincache_ucache_get('counter'));
?>

    
```

The above example will output:

```text


bool(true) 
int(1)

    
```

## See Also

`wincache_ucache_inc()` `wincache_ucache_dec()`
