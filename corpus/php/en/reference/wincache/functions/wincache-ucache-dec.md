---
id: "en-php-function-function-wincache-ucache-dec"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_dec"
title: "Decrements the value associated with the key"
signature: "mixed wincache_ucache_dec(string $key, int $dec_by = 1, [bool $success = ...])"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-dec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrements the value associated with the key

## Description

```php
mixed wincache_ucache_dec(string $key, int $dec_by = 1, [bool $success = ...])
```

Decrements the value associated with the `$key` by 1 or as specified by `$dec_by`.

## Parameters

- **`$key`** — The `$key` that was used to store the variable in the cache. `$key` is case sensitive.
- **`$dec_by`** — The value by which the variable associated with the `$key` will get decremented. If the argument is a floating point number it will be truncated to nearest integer. The variable associated with the `$key` should be of type `long`, otherwise the function fails and returns `false`.
- **`$success`** — Will be set to `true` on success and `false` on failure.

## Return Values

Returns the decremented value on success and `false` on failure.

## Examples

**Using `wincache_ucache_dec()`**

```php


<?php
wincache_ucache_set('counter', 1);
var_dump(wincache_ucache_dec('counter', 2923, $success));
var_dump($success);
?>

    
```

The above example will output:

```text


int(2922) 
bool(true)

    
```

## See Also

`wincache_ucache_inc()` `wincache_ucache_cas()`
