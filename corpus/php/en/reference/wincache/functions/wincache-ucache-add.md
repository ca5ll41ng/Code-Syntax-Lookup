---
id: "en-php-function-function-wincache-ucache-add"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_add"
title: "Adds a variable in user cache only if variable does not already exist in the cache"
signature: "bool wincache_ucache_add(string $key, mixed $value, int $ttl = 0)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a variable in user cache only if variable does not already exist in the cache

## Description

```php
bool wincache_ucache_add(string $key, mixed $value, int $ttl = 0)
```

```php
bool wincache_ucache_add(array $values, mixed $unused = NULL, int $ttl = 0)
```

Adds a variable in user cache, only if this variable doesn't already exist in the cache. The added variable remains in the user cache unless its time to live expires or it is deleted by using `wincache_ucache_delete()` or `wincache_ucache_clear()` functions.

## Parameters

- **`$key`** — Store the variable using this `$key` name. If a variable with same key is already present the function will fail and return `false`. `$key` is case sensitive. To override the value even if `$key` is present use `wincache_ucache_set()` function instad. `$key` can also take array of name => value pairs where names will be used as keys. This can be used to add multiple values in the cache in one operation, thus avoiding race condition.
- **`$value`** — Value of a variable to store. `$Value` supports all data types except resources, such as file handles. This parameter is ignored if first argument is an array. A general guidance is to pass `null` as `$value` while using array as `$key`. If `$value` is an object, or an array containing objects, then the objects will be serialized. See __sleep() for details on serializing objects.
- **`$values`** — Associative array of keys and values.
- **`$ttl`** — Time for the variable to live in the cache in seconds. After the value specified in `$ttl` has passed the stored variable will be deleted from the cache. This parameter takes a default value of `0` which means the variable will stay in the cache unless explicitly deleted by using `wincache_ucache_delete()` or `wincache_ucache_clear()` functions.

## Return Values

If `$key` is string, the function returns `true` on success and `false` on failure.

If `$key` is an array, the function returns:

- If all the name => value pairs in the array can be set, function returns an empty array;
- If all the name => value pairs in the array cannot be set, function returns `false`;
- If some can be set while others cannot, function returns an array with name=>value pair for which the addition failed in the user cache.

## Examples

**`wincache_ucache_add()` with `$key` as a string**

```php


<?php
$bar = 'BAR';
var_dump(wincache_ucache_add('foo', $bar));
var_dump(wincache_ucache_add('foo', $bar));
var_dump(wincache_ucache_get('foo'));
?>

    
```

The above example will output:

```text


bool(true)
bool(false)
string(3) "BAR" 

    
```

**`wincache_ucache_add()` with `$key` as an array**

```php


<?php
$colors_array = array('green' => '5', 'Blue' => '6', 'yellow' => '7', 'cyan' => '8');
var_dump(wincache_ucache_add($colors_array));
var_dump(wincache_ucache_add($colors_array));
var_dump(wincache_ucache_get('Blue'));
?>

    
```

The above example will output:

```text


array(0) { } 
array(4) { 
  ["green"]=> int(-1) 
  ["Blue"]=> int(-1) 
  ["yellow"]=> int(-1) 
  ["cyan"]=> int(-1) 
} 
string(1) "6"

    
```

## See Also

`wincache_ucache_set()` `wincache_ucache_get()` `wincache_ucache_delete()` `wincache_ucache_clear()` `wincache_ucache_exists()` `wincache_ucache_meminfo()` `wincache_ucache_info()` __sleep()
