---
id: "en-php-function-function-wincache-ucache-inc"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_inc"
title: "Increments the value associated with the key"
signature: "mixed wincache_ucache_inc(string $key, int $inc_by = 1, [bool $success = ...])"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-inc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Increments the value associated with the key

## Description

```php
mixed wincache_ucache_inc(string $key, int $inc_by = 1, [bool $success = ...])
```

Increments the value associated with the `$key` by 1 or as specified by `$inc_by`.

## Parameters

- **`$key`** — The `$key` that was used to store the variable in the cache. `$key` is case sensitive.
- **`$inc_by`** — The value by which the variable associated with the `$key` will get incremented. If the argument is a floating point number it will be truncated to nearest integer. The variable associated with the `$key` should be of type `long`, otherwise the function fails and returns `false`.
- **`$success`** — Will be set to `true` on success and `false` on failure.

## Return Values

Returns the incremented value on success and `false` on failure.

## Examples

**Using `wincache_ucache_inc()`**

```php


<?php
wincache_ucache_set('counter', 1);
var_dump(wincache_ucache_inc('counter', 2921, $success));
var_dump($success);
?>

    
```

The above example will output:

```text


int(2922) 
bool(true)

    
```

## See Also

`wincache_ucache_dec()` `wincache_ucache_cas()`
